import { useEffect, useState } from 'react'

import Image from 'next/image'

import axios from "axios"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper"
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"

import brigadeiro from '../../public/brigadeiro.jpeg'

export default function MenuCardsContainer() {

    const [products, setProducts] = useState(null)

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
                    products.map(product => {
                        return (
                            <SwiperSlide className="swiper-slide" key={product.name}>

                                <div className='menu-card'>

                                    <h3 className='title'>{product.name}</h3>

                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                    />

                                    <span>Veja mais</span>

                                </div>

                            </SwiperSlide>
                        )
                    })}

            </Swiper>

        </div>
    )
}