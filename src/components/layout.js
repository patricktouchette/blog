import React from "react"
import Header from "./header"
import Container from "./container"
import Footer from "./footer"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}

export default Layout
