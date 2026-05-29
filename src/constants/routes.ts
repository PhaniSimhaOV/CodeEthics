export const appRoute = Object.freeze({
  home: '/',
  about: '/about',
  services: '/services',
  faqs: '/faqs',
  careers: '/careers',
  blog: '/blog',
  contact: '/contact',
})

export const routeMap = Object.freeze({
  '/': 'Home',
  '/about': 'About Us',
  '/services': 'Services',
  '/faqs': 'FAQs',
  '/careers': 'Careers',
  '/blog': 'Blog',
  '/contact': 'Contact Us',
})

export const navigation = [
  { name: routeMap[appRoute.home], href: appRoute.home },
  { name: routeMap[appRoute.about], href: appRoute.about },
  { name: routeMap[appRoute.services], href: appRoute.services },
  { name: routeMap[appRoute.faqs], href: appRoute.faqs },
  { name: routeMap[appRoute.careers], href: appRoute.careers },
  { name: routeMap[appRoute.blog], href: appRoute.blog },
  { name: routeMap[appRoute.contact], href: appRoute.contact },
]
