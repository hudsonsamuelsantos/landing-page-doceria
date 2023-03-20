import { useContext, useEffect, useState } from 'react'

import { ModalContext } from '@/context/ModalContext'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper"
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"

import axios from "axios"

export default function MenuCards() {

    const [products, setProducts] = useState(null)

    const { isModalOpen, setIsModalOpen } = useContext(ModalContext)

    useEffect(() => {
        async function fetch() {

            const response = await axios.get('api/products')

            const products = response.data.products

            setProducts(products)
        }

        fetch()
    }, [])

    return (
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

                                        <span onClick={() => {
                                            setIsModalOpen([true, index])

                                            document.body.style.overflow = "hidden"
                                        }} >
                                            Veja mais
                                        </span>
                                    </div>
                                </SwiperSlide>
                            </div>
                        )
                    })}
            </Swiper>
        </div>
    )
}