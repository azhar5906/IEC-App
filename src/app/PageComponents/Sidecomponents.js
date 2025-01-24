import React from 'react'
import { Box, Card, Image } from "@chakra-ui/react"


export default function Sidecomponents(index) {

  const { data } = index

  return (
    <>
      <Card.Root flexDirection="row" overflow="hidden" alignItems="center"
        justifyContent="center" backgroundColor="#fff" height="56px" border="none" borderRadius="none">
        <Image
          backgroundColor="#fff"
          objectFit="cover"
          maxW="22px"
          maxH="14.20px"
          src={data.image}
          alt="Caffe Latte"
          marginLeft={"12px"}

        />

        <Box color=" #333333" >
          <Card.Body   >
            <Card.Title fontSize="12px" fontWeight="600" ><a href='#'>{data.title}</a></Card.Title>
            <Card.Description fontSize="10px" fontWeight="400"> {data.description}</Card.Description>

          </Card.Body>

        </Box>
        <Image
          maxW="7px"
          maxH="12px"
          src={data.arrow}
          alt="arrow"
          marginRight={"16px"}
        />
      </Card.Root>
    </>
  )
}
