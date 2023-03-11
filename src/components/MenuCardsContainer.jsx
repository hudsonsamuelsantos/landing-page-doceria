import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper"
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"

import brigadeiro from '../../public/brigadeiro.jpeg'

export default function MenuCardsContainer() {

    const Products = [
        {
            name: "Brigadeiros",
            flavors: [
                "Tradicional",
                "Churros",
                "Coco",
                "Amendoin",
                "Ninho",
                "Mesclado",
            ],
            prices: [
                "25 unidades - R$ 38,00",
                "50 unidades - R$ 68,00",
                "100 unidades - R$ 118,00",
                "Mais de 100 unidades - A combinar"
            ]
        },

        {
            name: "Brigadeiros",
            flavors: [
                "Tradicional",
                "Churros",
                "Coco",
                "Amendoin",
                "Ninho",
                "Mesclado",
            ],
            prices: [
                "25 unidades - R$ 38,00",
                "50 unidades - R$ 68,00",
                "100 unidades - R$ 118,00",
                "Mais de 100 unidades - A combinar"
            ]
        },

        {
            name: "Brigadeiros",
            flavors: [
                "Tradicional",
                "Churros",
                "Coco",
                "Amendoin",
                "Ninho",
                "Mesclado",
            ],
            prices: [
                "25 unidades - R$ 38,00",
                "50 unidades - R$ 68,00",
                "100 unidades - R$ 118,00",
                "Mais de 100 unidades - A combinar"
            ]
        },
    ]

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

                {Products.map(product => {
                    return (
                        <SwiperSlide className="swiper-slide">

                            <div className='menu-card'>

                                <h3 className='title'>{product.name}</h3>

                                <Image
                                    src={brigadeiro}
                                    alt={product.name}
                                />

                                <a href="">Veja mais</a>

                            </div>

                        </SwiperSlide>
                    )
                })}

            </Swiper>

        </div>
    )
}