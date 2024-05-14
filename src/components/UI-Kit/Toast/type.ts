export interface PrivateToastOptions {
  id: string
}

export interface PublicToastOptions {
  title: string
  /**
   * @default 'default'
   */
  status?: 'default' | 'success' | 'error'
  isClosable?: boolean
}

export interface ToastOptions extends PrivateToastOptions, PublicToastOptions {}

export interface ToastProps {
  toast: ToastOptions
}