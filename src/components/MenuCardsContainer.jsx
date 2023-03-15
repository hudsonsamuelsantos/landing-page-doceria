import { useEffect, useState, useRef } from 'react'

import Image from 'next/image'

import axios from "axios"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper"
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function MenuCardsContainer() {

    const modal = useRef()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [products, setProducts] = useState(null)

    useEffect(() => {
        async function fetch() {

            const response = await axios.get('api/products')

            const products = response.data.products

            setProducts(products)
        }

        fetch()
    }, [])

    useEffect(() => console.log(isModalOpen), [isModalOpen])

    return (
        <>

            <div className="menu swiper-container">

                <Swiper
                    className="swiper-wrapper mySwiper"
                    slidesPerView={1}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    mousewheel={true}
                    keyboard={true}
                    breakpoints={{
                        767: {
                            slidesPerView: 2,
                            setWrapperSize: true
                        }
                    }}
                >

                    {products != null &&
                        products.map((product, index) => {
                            return (
                                <div>

                                    <SwiperSlide className="swiper-slide" key={product.name}>

                                        <div className='menu-card'>

                                            <h3 className='title'>{product.name}</h3>

                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                            />

                                            <span onClick={() => setIsModalOpen(index)} >
                                                Veja mais
                                            </span>
                                            <span onClick={() => setIsModalOpen(index)} >
                                                Veja mais
                                            </span>
                                            <span onClick={() => setIsModalOpen(index)} >
                                                Veja mais
                                            </span>
                                            <span onClick={() => setIsModalOpen(index)} >
                                                Veja mais
                                            </span>

                                        </div>

                                        <div className={isModalOpen === index ? "modal-overlay active" : "modal-overlay"} ref={modal}>
                                            <div className="modal">
                                                <p onClick={() => setIsModalOpen(false)} >Fechar meu modal</p>
                                            </div>
                                        </div>

                                    </SwiperSlide>



                                </div>


                            )
                        })}

                </Swiper>

            </div>

        </>

    )
}