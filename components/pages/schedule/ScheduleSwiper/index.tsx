import clsx from 'clsx'
import React, { useState } from 'react'
import SwiperCore, { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './style.module.scss'
SwiperCore.use([Controller])

const ScheduleSwiper: React.FunctionComponent = ({ children }) => {
  const arr = React.Children.toArray(children)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [controlledSwiper, setControlledSwiper] = React.useState<SwiperCore>(
    null
  )

  const slideSetter = (index: number) => {
    controlledSwiper.slideTo(index)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.baseContainer}>
        <div className={styles.r}>
          <h1> </h1>
          <div className={styles.t}>
            <div className={styles.headings}>
              <h2
                onClick={() => slideSetter(0)}
                className={clsx(styles.selector, {
                  [styles.active]: currentSlide === 0,
                })}
              >
                A
              </h2>
              <h2
                onClick={() => slideSetter(1)}
                className={clsx(styles.selector, {
                  [styles.active]: currentSlide === 1,
                })}
              >
                B
              </h2>
            </div>
          </div>
        </div>

        <Swiper
          controller={{ control: controlledSwiper }}
          onSwiper={setControlledSwiper}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(e) => setCurrentSlide(e.activeIndex)}
        >
          {arr.map((e, ind) => (
            <SwiperSlide key={ind}> {e} </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ScheduleSwiper
