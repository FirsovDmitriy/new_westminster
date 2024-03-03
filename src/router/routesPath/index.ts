const routesPath = {
  HOME: '/',
  CATALOG: '/catalog',
  DETAIL_PRODUCT: '/product/:id',
  DELIVERY: '/delivery',
  CONTACT: '/contact',
  PROFILE: '/profile',
  AUTH: '/auth',
  NOT_FOUND: '*'
} as const

export default routesPath