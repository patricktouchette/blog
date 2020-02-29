import React from "react"
import Container from "./container"
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <p>
          © 2018-2020 Patrick Touchette. Built in{" "}
          <span role="img" aria-label="mountain">
            🗻
          </span>{" "}
          Bromont, Quebec, Canada.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
