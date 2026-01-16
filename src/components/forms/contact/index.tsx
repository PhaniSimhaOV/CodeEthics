'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { contactSchema, ContactSchema } from '@/components/forms/contact/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { toast } from 'sonner'

const ContactForm = () => {
  const [loader, setLoader] = useState(false)
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactSchema) => {
    try {
      setLoader(true)
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        const errorData = await response.json()
        console.error('Error sending email:', errorData)
        toast.error('Error sending email. Please try again later.')
      } else {
        const data = await response.json()
        console.log('Email sent successfully:', data)
        toast.success('Email sent successfully!')
        form.reset() // Reset the form after successful submission
      }
    } catch (error) {
      console.log('Error submitting form:', error)
      toast.error('Error submitting form. Please try again later.')
    } finally {
      setLoader(false)
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="First Name" {...field} className="border-none px-12 py-6" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Last Name" {...field} className="border-none px-12 py-6" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} className="border-none px-12 py-6" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Phone No." {...field} className="border-none px-12 py-6" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <Input placeholder="Subject" {...field} className="border-none px-12 py-6" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Write comments"
                    className="border-none px-12 py-6 resize-none h-35"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2 flex flex-col gap-4">
            <FormDescription>* Fill out the form to connect with us!</FormDescription>
            <div className="mt-4">
              <Button type="submit" className="cursor-pointer" disabled={loader}>
                {loader ? 'Sending Message...' : 'Send Message'}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm
