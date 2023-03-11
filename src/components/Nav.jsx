import { useEffect, useRef, useState } from "react"

export default function Nav() {

  const nav = useRef()
  const [isScroll, setIsScroll] = useState(false)
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)

  function activateMenuAtCurrentSection() {
    const sections = document.querySelectorAll('main section[id]')

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')

      const checkpointStart = checkpoint >= sectionTop
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight

      if (checkpointStart && checkpointEnd) {
        document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.add('active')
      } else {
        document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.remove('active')
      }
    }
  }

  const toggleMobileNav = () => {
    setIsOpenMobileNav(!isOpenMobileNav)
  }

  const closeMobileNav = () => {
    setIsOpenMobileNav(false)
  }

  function changeHeaderWhenScroll() {

    const navHeight = nav.current.clientHeight

    if (window.scrollY >= navHeight) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => changeHeaderWhenScroll())
    window.addEventListener('scroll', () => activateMenuAtCurrentSection())
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