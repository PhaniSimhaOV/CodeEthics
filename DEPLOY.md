# Deploy Code Ethics website to AWS

**Stack:** AWS Amplify Hosting (Next.js SSR) + MongoDB Atlas M0 + AWS S3 (media uploads) + GoDaddy DNS

**Realistic monthly cost:** $0 in year 1 (AWS free tier), ~$3–10/mo after.

**Region:** `ap-south-1` (Mumbai) — chosen for India latency.

---

## 0. Before you start

You will need, in this order:
- The repo pushed to GitHub with the latest commits on `main` (instructions in step 4).
- A working AWS console login on the **Code Ethics AWS account**.
- Your **GoDaddy login** with DNS access to `codeethics.in`.
- About 90 minutes uninterrupted.

Keep one tab open for each of: AWS Console, MongoDB Atlas, GoDaddy DNS, GitHub.

---

## 1. MongoDB Atlas — create the production database (10 min)

1. Go to https://cloud.mongodb.com — sign in (or create a free account with `ps@codeethics.in`).
2. **Create a new Organization** named `Code Ethics` if you don't have one.
3. **Create a new Project** named `codeethics-website`.
4. Click **Create Cluster** → choose **M0 Free**.
   - Provider: **AWS**
   - Region: **Mumbai (ap-south-1)**
   - Cluster name: `codeethics-prod`
   - Click **Create Deployment**.
5. On the "Connect to Cluster" pop-up:
   - **Add a database user:**
     - Username: `codeethics-app`
     - Password: click **Autogenerate Secure Password** → copy it somewhere safe (you'll need it in step 5).
     - Click **Create User**.
   - **Add IP addresses to your access list:**
     - Click **Add IP Address** → choose **Allow Access From Anywhere** (`0.0.0.0/0`) → **Add Entry**.
     - (Amplify Lambda IPs are dynamic. We rely on the strong DB password + DB-user-only permissions.)
   - Click **Finish and Close**.
6. Click **Connect** on your cluster → **Drivers** → **Node.js**. Copy the connection string. It looks like:
   ```
   mongodb+srv://codeethics-app:<password>@codeethics-prod.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
7. Replace `<password>` with the actual password from step 5, and add the database name `codeethics` before the `?`:
   ```
   mongodb+srv://codeethics-app:THEPASSWORD@codeethics-prod.xxxxx.mongodb.net/codeethics?retryWrites=true&w=majority
   ```
   This is your **`DATABASE_URI`** value. Save it.

---

## 2. AWS S3 — bucket for media uploads (10 min)

1. AWS Console → switch region to **Mumbai (ap-south-1)** in the top-right.
2. Open **S3** → **Create bucket**.
   - Bucket name: `codeethics-media-prod` (must be globally unique — add a suffix if taken)
   - Region: **ap-south-1**
   - **Object Ownership:** ACLs disabled (default).
   - **Block Public Access:** **uncheck** "Block all public access" — confirm the warning. (Media files need public read so they render on the website. Write access is still restricted to the IAM user we create next.)
   - Versioning: Disabled (cheaper; not needed).
   - Encryption: SSE-S3 (default).
   - Click **Create bucket**.
3. After creation, click into the bucket → **Permissions** tab → **Bucket policy** → **Edit** → paste:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::codeethics-media-prod/*"
       }
     ]
   }
   ```
   Replace bucket name if you changed it. Save.

4. **Permissions tab → CORS** → paste:
   ```json
   [
     {
       "AllowedHeaders": ["*"],
       "AllowedMethods": ["GET", "PUT", "POST", "HEAD"],
       "AllowedOrigins": ["https://www.codeethics.in", "https://codeethics.in", "http://localhost:3000"],
       "ExposeHeaders": ["ETag"]
     }
   ]
   ```
   Save.

5. Create an **IAM user** that the app uses to upload to this bucket:
   - AWS Console → **IAM** → **Users** → **Create user**.
   - User name: `codeethics-website-s3`
   - Click **Next** → **Attach policies directly** → click **Create policy** (opens new tab).
   - Policy editor → **JSON** tab → paste:
     ```json
     {
       "Version": "2012-10-17",
       "Statement": [
         {
           "Effect": "Allow",
           "Action": ["s3:PutObject", "s3:GetObject", "s3:DeleteObject", "s3:ListBucket"],
           "Resource": [
             "arn:aws:s3:::codeethics-media-prod",
             "arn:aws:s3:::codeethics-media-prod/*"
           ]
         }
       ]
     }
     ```
   - Next → name it `codeethics-website-s3-policy` → **Create policy**.
   - Back in the user creation tab, refresh the policy list, select `codeethics-website-s3-policy` → **Next** → **Create user**.
6. Open the new user → **Security credentials** tab → **Create access key** → **Application running outside AWS** → **Next** → **Create access key**.
   - Copy **Access key ID** → this is your **`S3_ACCESS_KEY_ID`**.
   - Copy **Secret access key** → this is your **`S3_SECRET_ACCESS_KEY`**.
   - Save both somewhere safe — you cannot view the secret again after this screen.

---

## 3. Generate a fresh `PAYLOAD_SECRET` (1 min)

In your terminal:
```bash
openssl rand -hex 32
```
Copy the 64-character output. This is your **`PAYLOAD_SECRET`**. Do **not** reuse the value in `.env.example`.

---

## 4. Push the latest code to GitHub (5 min)

The blog feature and S3 storage plugin live in this local repo but haven't been pushed yet.

```bash
cd "/Users/phanisimhaoruganti/Documents/Code Ethics/Website/codeethics-website"
git status
git add .
git commit -m "Add blog feature, S3 storage adapter, deployment runbook"
git push origin main
```

Verify on https://github.com/PhaniSimhaOV/CodeEthics that the latest commit shows the new files (`src/collections/Blogs.ts`, `src/app/(frontend)/(common)/blog/`, `DEPLOY.md`).

---

## 5. AWS Amplify Hosting — deploy the app (15 min)

1. AWS Console → confirm region is **ap-south-1 (Mumbai)** → open **AWS Amplify**.
2. Click **Create new app** → **Host web app** → **GitHub** → **Continue**.
3. Authorize AWS Amplify on GitHub. **Only grant access to the `CodeEthics` repo** (not all repos).
4. Pick repo `PhaniSimhaOV/CodeEthics`, branch `main`. **Next.**
5. Amplify auto-detects Next.js. App name: `codeethics-website`. Leave build settings as auto-generated. **Next.**
6. **Environment variables** — click "Advanced settings" → "Add environment variable". Add these:

   | Key | Value |
   |---|---|
   | `PAYLOAD_SECRET` | (the 64-char string from step 3) |
   | `DATABASE_URI` | (the Atlas SRV string from step 1, step 7) |
   | `NEXT_PUBLIC_API_URL` | `https://www.codeethics.in/api` |
   | `RESEND_API_KEY` | (create one at https://resend.com — free tier; or leave blank to skip contact form) |
   | `S3_BUCKET` | `codeethics-media-prod` |
   | `S3_REGION` | `ap-south-1` |
   | `S3_ACCESS_KEY_ID` | (from step 2, step 6) |
   | `S3_SECRET_ACCESS_KEY` | (from step 2, step 6) |

7. **Next** → review → **Save and deploy.**
8. First build takes ~5–8 minutes. When done, you'll have a URL like `https://main.dxxxxx.amplifyapp.com`.
9. Click that URL — verify the site loads. The `/blog` page should show "No posts published yet." (No content yet — we add the first admin user in step 7.)

---

## 6. Custom domain — point GoDaddy at Amplify (15 min)

1. In Amplify Console → your app → **Hosting → Custom domains** → **Add domain**.
2. Domain: `codeethics.in` (Amplify configures both `codeethics.in` and `www.codeethics.in` as one domain group).
3. Choose **"Use a third-party DNS provider"** when asked. Amplify will show you the DNS records to add.
4. Amplify gives you two records:
   - One **CNAME** for SSL verification (looks like `_xxxxxxx.codeethics.in → _yyyyy.acm-validations.aws`)
   - One **CNAME** for the actual site (`www.codeethics.in → dxxxxxx.cloudfront.net`)
   - And one **A** record for the apex (`codeethics.in → AWS Amplify's CloudFront IP`)
   *(Exact values depend on what Amplify generates — copy them from your console, don't guess.)*

5. Open **GoDaddy** → My Products → **codeethics.in** → **DNS**.
6. **Delete** the existing `A` record for `@` (it currently points to the old static site).
7. **Add** the records from step 4. The form looks like:
   - Type: `CNAME`, Name: `www`, Value: `dxxxxxx.cloudfront.net`, TTL: 600
   - Type: `CNAME`, Name: `_xxxxxxx`, Value: `_yyyyy.acm-validations.aws`, TTL: 600
   - Type: `A`, Name: `@`, Value: (Amplify's IP), TTL: 600
8. Save. DNS usually propagates in 5–30 minutes. Amplify will show "SSL configured" and "Domain active" once it sees the records.
9. After ~15 min, visit `https://www.codeethics.in` — should serve the new site with valid HTTPS.

---

## 7. Create the first admin user (2 min)

1. Visit `https://www.codeethics.in/admin` — Payload prompts to create the first admin.
2. Fill in:
   - Email: `ps@codeethics.in`
   - Password: pick a strong unique password, save it in your password manager.
   - Click **Create**.
3. You're now in the Payload CMS admin. From here you can:
   - **Blogs → Create New** — add a blog post (toggle "Published" before saving).
   - **Job Openings → Create New** — add active requirements that appear on `/careers`.
   - **Media** — upload images (they go to S3 automatically).
   - **Clients** — add client logos for the homepage carousel.

---

## 8. Post-launch checklist

- [ ] Verify a published blog post appears at `/blog` and its detail page renders correctly.
- [ ] Upload an image to a blog post and confirm it loads (proves S3 is wired correctly).
- [ ] Verify Google can crawl the new site: visit Google Search Console → add `codeethics.in` → submit sitemap.
- [ ] Set up **AWS billing alerts** — Billing console → Budgets → create a budget alert for $20/mo so you get notified before anything surprises you.
- [ ] Save all the credentials in your password manager:
  - MongoDB Atlas user password
  - AWS IAM access key + secret (the `codeethics-website-s3` user)
  - `PAYLOAD_SECRET` value
  - Payload admin email + password
- [ ] **Rotate the GoDaddy password** if you haven't already.

---

## Rollback plan (if something goes wrong)

- **DNS not resolving:** Most common cause is a typo in the CNAME values. Re-check against the Amplify Custom Domains screen. Wait up to 1 hour for propagation. If still broken, you can temporarily point `A @` back to your old hosting IP at GoDaddy.
- **Site loads but database errors:** Almost always `DATABASE_URI` typo or Atlas IP allowlist. In Amplify Console → Hosting → Environment variables, re-paste the Atlas SRV string. Trigger a redeploy.
- **Media not loading:** S3 bucket policy missing, or `S3_*` env vars not set. Re-check step 2 and step 5.

---

## Local dev (unchanged)

The S3 plugin only activates when `S3_BUCKET` is set in `.env`. Without it, Payload uses local-disk storage as before. Continue to run:

```bash
cd "/Users/phanisimhaoruganti/Documents/Code Ethics/Website/codeethics-website"
brew services start mongodb-community   # if not already running
pnpm dev                                  # http://localhost:3000
```

---

## Cost summary

| Service | Free tier | After free tier (low traffic) |
|---|---|---|
| AWS Amplify Hosting | 12 mo: 1,000 build min, 15 GB served, 5 GB stored | ~$2–8/mo |
| MongoDB Atlas M0 | Permanent: 512 MB, shared CPU | $0 (forever, unless you outgrow it) |
| AWS S3 | 12 mo: 5 GB, 20K GET, 2K PUT | ~$0.20/mo |
| ACM SSL | Permanent | $0 |
| GoDaddy DNS | (already paid in domain renewal) | $0 |
| Resend (email) | Permanent: 3K emails/mo | $0 |
| **Total Year 1** | | **$0** |
| **Total Year 2+** | | **~$3–10/mo** |
