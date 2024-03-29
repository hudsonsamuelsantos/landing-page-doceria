import { useEffect, useRef, useState, useContext } from 'react'

import { ModalContext } from '@/context/ModalContext'

import Nav from '@/components/Nav'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import doces from '../../public/doces.jpg'
import aline from '../../public/aline.png'

import axios from "axios"
import MenuCards from '@/components/MenuCards'

export default function Home() {

  const [products, setProducts] = useState(null)

  const modal = useRef()
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext)

  const backToTopButton = useRef()
  const [backToTopButtonVisible, setBackToTopButtonVisible] = useState(false)

  useEffect(() => {
    async function fetch() {

      const response = await axios.get('api/products')

      const products = response.data.products

      setProducts(products)
    }

    fetch()
  }, [])

  const backToTop = () => {
    if (window.scrollY >= 560) {
      setBackToTopButtonVisible(true)
    } else {
      setBackToTopButtonVisible(false)
    }
  }

  const runScrollReveal = () => {
    const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 800,
      reset: true
    })

    scrollReveal.reveal(
      `#home .image, #home .text,
      #about .image, #about .text,
      #services header, #services .card,
      #menu, #menu header, #menu,
      #contact .text
      `,
      { interval: 100 }
    )
  }

  useEffect(() => {
    window.addEventListener('scroll', () => backToTop())
  })

  return (
    <>
      <Head>
        <title>Line Doceria Artesanal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="https://unpkg.com/phosphor-icons" />
      <Script
        src="https://unpkg.com/scrollreveal"
        onReady={runScrollReveal}
      />

      <Nav />

      <main>
        <section className="section" id="home">
          <div className="container grid">
            <div className="image">
              <Image src={doces} priority alt='Brigadeiros de chocolate' />
            </div>

            <div className="text">
              <h2 className="title">Experimente o melhor da confeitaria artesanal</h2>

              <p>Doces, Bolos, Brownies, Palhas Italianas, Trufas, e muito mais para adoçar momentos especiais!</p>

              <a className="button" href="#menu">Veja o Cardápio</a>
            </div>
          </div>
        </section>

        <div className="divider-1"></div>

        <section className="section" id="about">
          <div className="container grid">
            <div className="image">
              <Image src={aline} alt='Aline confeiteira da Line Doceria Artesanal' />
            </div>

            <div className="text">
              <h2 className="title">Sobre nós</h2>

              <p>
                Olá! Eu sou a Aline, a confeiteira por trás da <strong>Line Doceria Artesanal. ❤</strong>
              </p>

              <br />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                illum ratione impedit quae eum quis adipisci asperiores, est
                doloribus distinctio excepturi minima eius dolore! Perferendis
                laborum illo aspernatur repellendus ipsum.
              </p>

              <br />

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                exercitationem, illum sapiente quasi hic iusto odio maiores esse
                quaerat quis necessitatibus at odit, dolores dicta, officia ab
                quos. Provident, quae.
              </p>
            </div>
          </div>
        </section>

        <div className="divider-2"></div>

        <section className="section" id="services">
          <div className="container grid">
            <header>
              <h2 className="title">Nossos serviços</h2>

              <p className="subtitle">
                A <strong>Line Doceria Artesanal</strong> oferece os melhores serviços e os mais
                saborosos produtos de confeitaria, seja para o seu evento ou simplesmente para adoçar a sua rotina. ❤
              </p>
            </header>

            <div className="cards grid">
              <div className="card">
                <i className="ph-bag"></i>

                <h3 className="title">Pequenas e grandes quantidades</h3>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  distinctio neque blanditiis, dolorem aperiam nulla explicabo
                  asperiores
                </p>
              </div>

              <div className="card">
                <i className="ph-cake"></i>

                <h3 className="title">Produtos personalizados</h3>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  distinctio neque blanditiis, dolorem aperiam nulla explicabo
                  asperiores
                </p>
              </div>

              <div className="card">
                <i className="ph-bicycle"></i>

                <h3 className="title">Fazemos entregas</h3>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  distinctio neque blanditiis, dolorem aperiam nulla explicabo
                  asperiores
                </p>

              </div>
            </div>
          </div>
        </section>

        <div className="divider-1"></div>

        <section className="section" id="menu">
          <div className="container">
            <header>
              <h2 className="title">Nosso Cardápio</h2>

              <p className="subtitle">
                Conheça os produtos da <strong>Line Doceria Artesanal</strong>. <br />
                Arraste para o lado para ver mais. ❤
              </p>
            </header>

            <MenuCards />

          </div>

        </section>

        {isModalOpen[0] === true &&
          <div className="modal-overlay active" ref={modal}>

            {products != null &&
              products.map((product, index) => {

                if (isModalOpen[1] === index) {
                  return (
                    <div className="modal">
                      <div className="first-box">
                        <h3 className='title'>{product.name}</h3>

                        <Image
                          src={product.image}
                          alt={product.name}
                        />
                      </div>

                      <div className="second-box">
                        <div className='prices'>
                          {
                            product.prices.map(price => {
                              return (
                                <span>{price}</span>
                              )
                            })
                          }
                        </div>

                        <a href="" className="button">
                          Fazer pedido
                        </a>
                      </div>

                      <div
                        className="icon-close"
                        onClick={() => {
                          setIsModalOpen([])

                          document.body.style.overflow = "auto"
                        }}
                      ></div>
                    </div>
                  )
                }
              })
            }
          </div>
        }

        <div className="divider-2"></div>

        <section className="section" id="contact">
          <div className="container grid">
            <div className="text">
              <h2 className="title">Faça seu pedido com a gente!</h2>

              <p>
                Entre em contato para fazer pedidos, tirar suas dúvidas, ou fazer orçamentos!
              </p>

              <a
                href="https://api.whatsapp.com/send?phone=+5511998456754&text=Oi! Gostaria de fazer um pedido na Line Doceria Artesanal!"
                className="button"
                target="_blank"
              >
                <i className="icon-whatsapp"></i>
                Entrar em contato
              </a>
            </div>

            <div className="links">
              <ul className="grid">
                <li><i className="icon-phone"></i> 11 99845-6754</li>

                <li><i className="icon-map-pin"></i> Viçosa - MG</li>

                <li><i className="icon-mail"></i> contato@linedoceria.com</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="divider-1"></div>
      </main>

      <footer className="section">
        <div className="container grid">
          <div className="brand">
            <a className="logo logo-alt" href="#home">Line<span> Doceria Artesanal</span>.</a>

            <p>©2023 Line Doceria Artesanal.</p>

            <p>Todos os direitos reservados.</p>
          </div>

          <div className="social grid">
            <a href="https://instagram.com" target="_blank">
              <i className="icon-instagram"></i>
            </a>

            <a href="https://facebook.com" target="_blank">
              <i className="icon-facebook"></i
              ></a>

            <a href="https://youtube.com" target="_blank"
            ><i className="icon-youtube"></i
            ></a>
          </div>
        </div>
      </footer>

      <a href="#home" className={backToTopButtonVisible ? "back-to-top show" : "back-to-top"} ref={backToTopButton}>
        <i className="icon-arrow-up"></i>
      </a>

    </>
  )
}
