import React from 'react'
import TicketBox from './TicketBox'
import { VStack, Flex, Text, Image, HStack, Box , Grid } from '@chakra-ui/react'


export default function PurchaseHis() {

  return (
    <>
       <VStack height="887px" width="852px" bgColor="#F3F3F3" justifyContent="flex-start" alignItems="start" marginLeft={"20px"} marginTop={"24px"} >

            <Flex  marginLeft={"20px"} height={"28px"} direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                <Text fontSize={"16px"} fontWeight={"600"}>Purchase History</Text>
            </Flex>

            <Box  marginLeft={"20px"} marginTop={"24px"}>
              <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                  <TicketBox/>
              </Grid>
            </Box>
        </VStack>
    </>

  )
}

