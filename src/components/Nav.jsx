import { useEffect, useRef, useState } from "react"

export default function Nav() {

  const nav = useRef()
  const [isScroll, setIsScroll] = useState(false)

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
      <nav className="container" ref={nav}>
        <a className="logo" href="#">Line<span> Doceria Artesanal</span>.</a>

        <div className="menu">
          <ul className="grid">
            <li><a className="title" href="#home">Início</a></li>

            <li><a className="title" href="#about">Sobre</a></li>

            <li><a className="title" href="#services">Serviços</a></li>

            <li><a className="title" href="#menu">Cardápio</a></li>

            <li><a className="title" href="#contact">Contato</a></li>
          </ul>
        </div>

        <div className="toggle icon-menu"></div>

        <div className="toggle icon-close"></div>
      </nav>
    </header>
  )
}