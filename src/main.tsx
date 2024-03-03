import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppRouter from './router/index.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { IconContext } from 'react-icons'

const router = createBrowserRouter(AppRouter)
const element = document.querySelector('#root') as HTMLDivElement

ReactDOM.createRoot(element).render(
  <>
    <Provider store={ store }>
      <IconContext.Provider value={{ size: '1.5rem' }}>
        <RouterProvider router={ router } />
      </IconContext.Provider>
    </Provider>
  </>,
)
