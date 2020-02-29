import React from "react"
import { Link } from "gatsby"
import Container from "./container"
import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <Container>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
