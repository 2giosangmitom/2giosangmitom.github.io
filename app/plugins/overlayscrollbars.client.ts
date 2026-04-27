import { OverlayScrollbars } from 'overlayscrollbars';

export default defineNuxtPlugin(() => {
  OverlayScrollbars(document.body, {
    scrollbars: {
      autoHide: 'leave',
      autoHideDelay: 500,
      autoHideSuspend: false
    }
  });
});
