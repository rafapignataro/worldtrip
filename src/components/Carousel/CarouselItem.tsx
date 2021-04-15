import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface CarouselItemProps {
  id: number
  image: string
  name: string
  subtitle: string
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  id,
  image,
  name,
  subtitle,
}) => {
  return (
    <Link href={`continent/${id}`} passHref>
      <Flex
        as="a"
        backgroundImage={`url(${image})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        cursor="pointer"
        w="100%"
        h={['250px', '450px']}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          w="100%"
        >
          <Text fontWeight="600" fontSize={['24px', '48px']}>
            {name}
          </Text>
          <Text fontWeight="500" fontSize={['14px', '24px']}>
            {subtitle}
          </Text>
        </Flex>
      </Flex>
    </Link>
  )
}
