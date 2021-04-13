import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Header } from '../components/Header'
import { HomeItem } from '../components/HomeItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Carousel } from '../components/Carousel'
import { GetServerSideProps } from 'next'

SwiperCore.use([Navigation, Pagination])

type Continent = {
  id: number
  name: string
  description: string
  carrouselImage: string
}

interface HomeProps {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />
      <Box
        bgImage="url('/home_bg.png')"
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
      >
        <Box
          width="100%"
          maxWidth={1240}
          mx="auto"
          py={['10', '16']}
          px={['6', '6', '10']}
          pos="relative"
        >
          <Heading fontWeight="medium" mb="5" color="gray.100">
            5 Continents,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text fontSize={['md', 'xl']} color="gray.300">
            Chegou a hora de tirar do papel a viagem que você{' '}
            {isWideVersion && <br />} sempre sonhou.
          </Text>
          {isWideVersion && (
            <Image
              src="/airplane.png"
              alt="Airplane"
              pos="absolute"
              bottom="-10"
              right="0"
            />
          )}
        </Box>
      </Box>
      <Box py={['10', '16']} px={['6', '6', '10']} maxWidth={1240} mx="auto">
        <SimpleGrid
          minChildWidth="100px"
          justify="space-between"
          spacing={['6', '8']}
          w="100%"
        >
          <HomeItem
            isReduced={!isWideVersion}
            imgUrl="/homeItens/cocktail.svg"
            text="vida noturna"
          />
          <HomeItem
            isReduced={!isWideVersion}
            imgUrl="/homeItens/surf.svg"
            text="praia"
          />
          <HomeItem
            isReduced={!isWideVersion}
            imgUrl="/homeItens/building.svg"
            text="moderno"
          />
          <HomeItem
            isReduced={!isWideVersion}
            imgUrl="/homeItens/museum.svg"
            text="clássico"
          />
          <HomeItem
            isReduced={!isWideVersion}
            imgUrl="/homeItens/earth.svg"
            text="e mais..."
          />
        </SimpleGrid>
      </Box>
      <Divider
        w="20%"
        borderWidth="2px"
        borderColor="gray.500"
        bg="gray.500"
        mx="auto"
      />
      <Box mt={['8', '16']} mb={['4', '8']} maxWidth={1240} mx="auto">
        <Heading align="center" fontWeight="medium" color="gray.700">
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>
      </Box>
      <Box mb={['10']} px={['0', '0', '10']} maxWidth={1240} mx="auto">
        <Carousel continents={continents} />
      </Box>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const continents = [
    {
      id: 1,
      name: 'Europa',
      description: 'O continente mais antigo.',
      carrouselImage: '/continents/europe.png',
    },
    {
      id: 2,
      name: 'Europa',
      description: 'O continente mais antigo.',
      carrouselImage: '/continents/europe.png',
    },
    {
      id: 3,
      name: 'Europa',
      description: 'O continente mais antigo.',
      carrouselImage: '/continents/europe.png',
    },
    {
      id: 4,
      name: 'Europa',
      description: 'O continente mais antigo.',
      carrouselImage: '/continents/europe.png',
    },
  ]
  return {
    props: {
      continents,
    },
  }
}
