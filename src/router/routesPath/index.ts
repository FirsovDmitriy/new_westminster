const routesPath = {
  HOME: '/',
  CATALOG: '/catalog',
  SHOW_GOODS: '/goods/:id',
  CHECKOUT: '/checkout',
  PROFILE: '/profile',
  EDIT_PROFILE: '/profile/edit',
  SIGN_IN: '/sign_in',
  REGISTRATION: '/registration',
  NOT_FOUND: '*'
} as const

export default routesPath