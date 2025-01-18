import React from 'react'
import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react"


export default function Sidecomponents(index) {
  
    const {data} = index
  
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
      />

    <Box   color=" #333333" >
      <Card.Body   >
        <Card.Title  fontSize="12px" fontWeight="600" >{data.title}</Card.Title>
        <Card.Description fontSize="10px" fontWeight="400"> {data.description}</Card.Description>
      </Card.Body>
    </Box>
  </Card.Root>
    <div style={{width:"236px", height:"1px", backgroundColor:"#f3f2ff", marginLeft:"20px"}}></div>
    </>
  )
}
