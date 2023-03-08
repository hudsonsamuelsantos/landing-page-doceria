import { useEffect, useRef, useState } from "react"

export default function Nav() {

  const nav = useRef()
  const link = useRef()
  const [isScroll, setIsScroll] = useState(false)
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)

  const toggleMobileNav = () => {
    setIsOpenMobileNav(!isOpenMobileNav)
  }

  const closeMobileNav = () => {
    setIsOpenMobileNav(false)
  }

  function changeHeaderWhenScroll() {

    const navHeight = nav.current.offsetHeight

    if (window.scrollY >= navHeight) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => changeHeaderWhenScroll())
  })

  return (
    <header id="header" className={isScroll ? "scroll" : ""}>
      <nav className={isOpenMobileNav ? "container show" : "container"} ref={nav}>
        <a className="logo" href="#">Line<span> Doceria Artesanal</span>.</a>

        <div className="menu">
          <ul className="grid">
            <li><a className="title" href="#home" onClick={closeMobileNav}>Início</a></li>

            <li><a className="title" href="#about" onClick={closeMobileNav}>Sobre</a></li>

            <li><a className="title" href="#services" onClick={closeMobileNav}>Serviços</a></li>

            <li><a className="title" href="#menu" onClick={closeMobileNav}>Cardápio</a></li>

            <li><a className="title" href="#contact" onClick={closeMobileNav}>Contato</a></li>
          </ul>
        </div>

        <div className="toggle icon-menu" onClick={toggleMobileNav}></div>

        <div className="toggle icon-close" onClick={toggleMobileNav}></div>
      </nav>
    </header>
  )
}