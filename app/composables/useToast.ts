import { ref } from 'vue';

interface ToastOptions {
  title?: string;
  content?: string;
}

const toasts = ref<ToastOptions[]>([]);

export function useToast() {
  function push(toast: ToastOptions) {
    toasts.value.push(toast);

    // Auto-remove after 5s
    setTimeout(() => {
      toasts.value.shift();
    }, 5000);
  }

  return { toasts, push };
}
