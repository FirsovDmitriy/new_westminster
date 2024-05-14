import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import AppRouter from './router/index.tsx'
import './styles/index.scss'
import ThemeColor from './hoc/ThemeColor.tsx'
import Toaster from './components/UI-Kit/Toast/Toaster'

const router = createBrowserRouter(AppRouter)
const element = document.querySelector('#root') as HTMLDivElement

ReactDOM.createRoot(element).render(
  <>
    <Provider store={ store }>

      <ThemeColor>
        <RouterProvider router={ router } />

        <Toaster />
        
      </ThemeColor>

    </Provider>
  </>,
)
