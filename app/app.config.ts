export default defineAppConfig({
  ui: {
    icons: {
      light: 'lucide:sun',
      dark: 'lucide:moon'
    },
    prose: {
      li: {
        base: 'marker:text-primary'
      }
    },
    blogPost: {
      slots: {
        footer: 'inline-flex gap-x-2 justify-end mb-4 mr-4'
      }
    },
    blogPosts: {
      base: 'lg:gap-y-10'
    },
    colors: {
      primary: 'emerald',
      secondary: 'indigo',
      neutral: 'zinc',
      error: 'red',
      warning: 'yellow',
      success: 'green',
      info: 'blue'
    }
  }
});
