import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Flex
      as="header"
      maxWidth={1480}
      w="100%"
      h={[50, 100]}
      mx="auto"
      align="center"
      justify="center"
    >
      <Image src="/logo.svg" alt="Worldtrip logo" w={[20, 40]} />
    </Flex>
  )
}
