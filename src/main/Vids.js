import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

function Vids() {
  return (
    <section className="vids content-box">
      <h2>Video</h2>
      <Swiper
        direction={'horizontal'}
        slidesPerView={2}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="inner">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner">Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Vids
