import { FC } from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

const DefaultLayout: FC = () => {
  return (
    <>
      <Header />
      <main className="page__content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout
