import React from 'react'
import SwiperCore, { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
SwiperCore.use([Controller])

const ScheduleSwiper: React.FunctionComponent = ({ children }) => {
  const arr = React.Children.toArray(children)
  const [controlledSwiper, setControlledSwiper] = React.useState<SwiperCore>(
    null
  )

  return (
    <Swiper
      controller={{ control: controlledSwiper }}
      onSwiper={setControlledSwiper}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(e) => console.debug(e.activeIndex)}
    >
      {arr.map((e, ind) => (
        <SwiperSlide key={ind}> {e} </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ScheduleSwiper
