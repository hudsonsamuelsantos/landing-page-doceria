export default function Nav() {
    return (
        <nav className="container">
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
    )
}