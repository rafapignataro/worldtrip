import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Flex } from '@chakra-ui/react'
import { CarouselItem } from './CarouselItem'

SwiperCore.use([Navigation, Pagination])

interface Continent {
  id: number
  name: string
  description: string
  carrouselImage: string
}

interface CarouselProps {
  continents: Continent[]
}

export const Carousel: React.FC<CarouselProps> = ({ continents }) => {
  return (
    <Flex w="100%" justifyContent="center" alignItems="center" mb="8">
      <Swiper
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay
      >
        {continents.map(continent => (
          <SwiperSlide key={`slide-${continent.id}`}>
            <CarouselItem
              id={continent.id}
              name={continent.name}
              image={continent.carrouselImage}
              description={continent.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}
