"use client"
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { DotButton, useDotButton } from '@/components/DotsCarousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '@/components/ButtonsCarousel'

export default function EmblaCarousel({ images }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },
        // [Autoplay({ delay: 4000 })]
    )
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla" >
            <div class="embla__viewport" ref={emblaRef}>
                <div class="embla__container">
                    {
                        images.map((image, index) => (
                            <div key={index} className="embla__slide">
                                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                    <Image
                                        src={image}
                                        alt="Slide"
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='embla__controls'>
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
        </div>
    )
}
