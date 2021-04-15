import Icon from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'

interface HomeItemProps {
  imgUrl: string
  text: string
  isReduced?: boolean
}

export const HomeItem: React.FC<HomeItemProps> = ({
  imgUrl,
  text,
  isReduced = false,
}) => {
  return (
    <Flex direction={isReduced ? 'row' : 'column'} align="center">
      {isReduced ? (
        <Icon as={RiCheckboxBlankCircleFill} color="primary.900" mr="2" />
      ) : (
        <Image src={imgUrl} w="100%" h={85} mb="6" />
      )}

      <Text
        fontWeight="semibold"
        whiteSpace="nowrap"
        fontSize="2xl"
        color="gray.700"
      >
        {text}
      </Text>
    </Flex>
  )
}
