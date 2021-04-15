import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
  Tooltip,
} from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { HomeItem } from '../../components/HomeItem';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { GetServerSideProps } from 'next';
import { Card } from '../../components/Card';
import db from '../../../db';
import { RiInformationLine } from 'react-icons/ri';

SwiperCore.use([Navigation, Pagination]);

type Continent = {
  id: number;
  name: string;
  description: string;
  carouselImg: string;
  countries: number;
  languages: number;
  mostVisited: number;
  cities: {
    id: number;
    name: string;
    country: string;
    image: string;
  }[];
};

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Box
        bgImage={`url(${continent.carouselImg})`}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        h={[300, 300, 500]}
      >
        <Flex
          width="100%"
          height="100%"
          maxWidth={1240}
          mx="auto"
          py={['10', '16']}
          px={['6', '6', '10']}
          justify={['center', 'center', 'flex-start']}
          align={['center', 'center', 'flex-end']}
        >
          <Heading fontWeight="medium" fontSize="5xl" color="gray.50">
            {continent.name}
          </Heading>
        </Flex>
      </Box>
      <Flex
        mt={['8', '8', '10']}
        px={['6', '6', '10']}
        justify="space-between"
        align="center"
        maxWidth={1240}
        mx="auto"
        flexWrap="wrap"
      >
        <Box mb="10" w="100%">
          <Text color="gray.600" fontSize="xl" align="center">
            {continent.description}
          </Text>
        </Box>
        <Flex justify="center" align="center" w="100%">
          <Flex justify="space-between" align="center" w="50%">
            <Flex
              direction="column"
              align="center"
              justify="center"
              fontWeight="semibold"
            >
              <Text color="primary.900" fontSize="5xl">
                {continent.countries}
              </Text>
              <Text color="gray.800" fontSize="xl">
                países
              </Text>
            </Flex>
            <Flex
              direction="column"
              align="center"
              justify="center"
              fontWeight="semibold"
            >
              <Text color="primary.900" fontSize="5xl">
                {continent.languages}
              </Text>
              <Text color="gray.800" fontSize="xl">
                línguas
              </Text>
            </Flex>
            <Flex
              direction="column"
              align="center"
              justify="center"
              fontWeight="semibold"
            >
              <Text color="primary.900" fontSize="5xl">
                {continent.mostVisited}
              </Text>
              <Flex align="center">
                <Text color="gray.800" whiteSpace="nowrap" fontSize="xl">
                  cidades +50
                </Text>
                <Tooltip
                  label="Número de cidades dentre as 50 mais visitadas"
                  aria-label="Tooltip for most visited cities"
                >
                  <span>
                    <Icon
                      as={RiInformationLine}
                      color="gray.300"
                      fontSize="20"
                      ml="1"
                    />
                  </span>
                </Tooltip>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box
        py={['8', '8', '10']}
        px={['6', '6', '10']}
        maxWidth={1240}
        mx="auto"
      >
        <Heading fontWeight="medium" color="gray.600" mb="5">
          Cidades +50
        </Heading>
        <SimpleGrid
          minChildWidth="250px"
          justify="space-between"
          spacing={['6', '10']}
          w="100%"
        >
          {continent.cities.map(city => (
            <Card city={city} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { continents } = db;

  const { id } = params;

  const continent = continents.find(continent => continent.id === Number(id));

  if (!continent) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      continent,
    },
  };
};
