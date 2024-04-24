"use client"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"
import styles from '@/styles/Carousel.module.css'
import {NextBtn, PrevBtn} from '@/components/Buttons'

const Carousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />
    }

    return (
        <div className={styles.carousel_container}>
        <Slider {...settings}>
            {
                images.map((image, index) => (
                    <div className={styles.img_container} key={index}>
                        <Image
                            src={image}
                            alt={`slide ${index}`}
                            width={800}
                            height={400}
                            layout="responsive"

                        />
                    </div>
                ))
            }
            </Slider>
            </div>
    )
}
export default Carousel