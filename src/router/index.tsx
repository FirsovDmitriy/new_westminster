import React from "react"
import { RouteObject } from "react-router-dom"
import routesPath from "./routesPath"
import Layout from "../components/Layout"
import HomePage from "../page/home"
import CatalogPage from "../page/catalog"
import DetailPage from "../page/catalog/Detail.page"
import DeliveryPage from "../page/Delivery.page"
import ContactPage from "../page/Contact.page"
import ProfilePage from "../page/Profile.page"
import AuthLayout from "../components/Layout/Auth.layout"
import AuthPage from "../page/Auth.page"
import RequiredAuth from "../hoc/RequiredAuth"
import Preloader from "../components/UI-Kit/Preloader"

const AppRouter: RouteObject[] = [
  {
    path: routesPath.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <React.Suspense fallback="Loading...">
          <HomePage />
        </React.Suspense>
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
            )
          }
        ]
      },
      {
        path: routesPath.CATALOG,
        element: <React.Suspense fallback={ <Preloader /> }>
          <CatalogPage />
        </React.Suspense>
      },
      {
        path: routesPath.DETAIL_PRODUCT,
        element: <React.Suspense fallback={ <Preloader /> }>
          <DetailPage />
        </React.Suspense>
      },
      {
        path: routesPath.DELIVERY,
        element: <React.Suspense fallback={ <Preloader /> }>
          <DeliveryPage />
        </React.Suspense>
      },
      {
        path: routesPath.CONTACT,
        element: <React.Suspense fallback={ <Preloader /> }>
          <ContactPage />
        </React.Suspense>
      }
    ]
  },
  {
    path: routesPath.AUTH,
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <React.Suspense fallback={ <Preloader /> }>
          <AuthPage />
        </React.Suspense>
      }
    ]
  }
]

export default AppRouter