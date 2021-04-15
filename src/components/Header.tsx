import { Box, Flex, Icon, Image } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'
import { RiArrowLeftSLine } from 'react-icons/ri'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const { asPath } = useRouter()

  return (
    <Flex
      as="header"
      px={['6', '6', '10']}
      maxWidth={1240}
      w="100%"
      h={[50, 100]}
      mx="auto"
      align="center"
      justify="center"
      position="relative"
    >
      {asPath !== '/' && (
        <Link href="/" passHref>
          <Icon
            as={RiArrowLeftSLine}
            fontSize="32"
            color="gray.700"
            position="absolute"
            left={['6', '6', '10']}
            cursor="pointer"
            _hover={{
              bg: 'gray.100',
            }}
            borderRadius="full"
          />
        </Link>
      )}
      <Image src="/logo.svg" alt="Worldtrip logo" w={[20, 40]} />
    </Flex>
  )
}
