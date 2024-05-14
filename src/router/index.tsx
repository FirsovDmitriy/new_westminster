import React from 'react'
import { RouteObject } from 'react-router-dom'
import routesPath from './routesPath'
import DefaultLayout from '@/components/Layout/Default.layout'
import HomePage from '@/pages/Home'
import CatalogPage from '@/pages/Catalog'
import ShowGoods from '@/pages/ShowGoods'
import ProfilePage from '@/pages/Profile'
import AuthLayout from '@/components/Layout/Auth.layout'
import RequiredAuth from '@/hoc/RequiredAuth'
// import Preloader from '@/components/UI-Kit/Preloader'
import EditProfile from '@/pages/EditProfile'
import SignIn from '@/pages/SignIn'
import Registration from '@/pages/Registration'
import ErrorRouteElement from '@/components/ErrorRouteElement'

const AppRouter: RouteObject[] = [
  {
    path: routesPath.HOME,
    element: <DefaultLayout />,
    errorElement: <ErrorRouteElement />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense>
            <HomePage />
          </React.Suspense>
        ),
      },
      {
        element: <RequiredAuth />,
        children: [
          {
            path: routesPath.PROFILE,
            element: (
              <React.Suspense>
                <ProfilePage />
              </React.Suspense>
            ),
          },
          {
            path: routesPath.EDIT_PROFILE,
            element: (
              <React.Suspense>
                <EditProfile />
              </React.Suspense>
            ),
          },
        ],
      },
      {
        path: routesPath.CATALOG,
        element: (
          <React.Suspense>
            <CatalogPage />
          </React.Suspense>
        ),
      },
      {
        path: routesPath.SHOW_GOODS,
        element: (
          <React.Suspense>
            <ShowGoods />
          </React.Suspense>
        ),
      }
    ],
  },
  {
    path: routesPath.HOME,
    element: <AuthLayout />,
    children: [
      {
        path: routesPath.REGISTRATION,
        element: <React.Suspense>
          <Registration />
        </React.Suspense>,
      },
      {
        path: routesPath.SIGN_IN,
        element: <React.Suspense>
          <SignIn />
        </React.Suspense>
      }
    ],
  },
]

export default AppRouter
