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
        root: 'rounded'
      }
    },
    blogPosts: {
      base: 'lg:gap-y-10'
    },
    colors: {
      primary: 'blue',
      secondary: 'green'
    }
  }
});
