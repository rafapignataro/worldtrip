import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';

type City = {
  id: number;
  name: string;
  country: string;
  image: string;
};

interface CardProps {
  city: City;
}

export const Card: React.FC<CardProps> = ({ city }) => {
  return (
    <Flex direction="column" borderRadius="md" overflow="hidden" bg="white">
      <Image src={city.image} objectFit="cover" w="100%" h={175} />
      <Flex p="8">
        <Box flex="1">
          <Text fontWeight="semibold" fontSize="xl" color="gray.500" mb="3">
            {city.name}
          </Text>
          <Text fontWeight="medium" fontSize="md" color="gray.300">
            {city.country}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
