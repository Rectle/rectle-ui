export default {
    titleTemplate: (title: string) => `${title} - ${process.env.APP_NAME}`,
    meta: {
        description: { name: 'description', content: 'Rectle page' },
        keywords: { name: 'keywords', content: 'Rectle' },
        equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
        ogTitle:  {
          property: 'og:title',
          template (ogTitle: string) {
            return `${ogTitle} - ${process.env.APP_NAME}`
          }
        }
    },
    noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)'
    }
}