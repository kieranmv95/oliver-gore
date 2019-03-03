import React from "react"

const Layout = ({ children }) => (
  <>
    <div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </div>
  </>
)

export default Layout
