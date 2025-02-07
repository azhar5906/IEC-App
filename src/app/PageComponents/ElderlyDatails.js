import { Button, VStack, Text, Box, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import { keyframes } from '@emotion/react'



export default function ElderlyDatails() {
  const ElderlyDatails = [
    {
      name: "Abdul Rashid Mansuri",
      phone: "+91 9930391551",
      email: "abdulrashid@gmail.com"
    },
    {
      name: "ParveenParveen Abdul Rashid Mansuri",
      phone: "+91 9930391551",
      email: "parveenarmansuri02912@gmail.com"
    },
    {
      name: "ParveenParveen Abdul Rashid Mansuri",
      phone: "+91 9930391551",
      email: "parveenarmansuri02912@gmail.com"


    }
  ]

  return (
    <>
      <VStack padding={"20px"} height={"887px"} width={"852px "} bgColor={"#F3F3F3"} >
        <Flex height="76px" direction="column" justifyContent="space-between" alignSelf={'start'} >
          <Text fontSize={16} color={"#333"} style={{ fontWeight: "600", height: "28px", lineHeight: "28px" }}>Elderly Detail</Text>
          <Text fontSize={12} color={"#666"} height={20} style={{ fontWeight: "500", height: "28px", }}>Saved Elderly</Text>
        </Flex>

        <VStack height={"100%"} >
          {ElderlyDatails.map((data, index) => (
            <VStack key={index} width="812px" padding="16px" bgColor=" #FFFFFF;" >
              <Flex width="771px " justifyContent="space-between" >
                <Box>
                  <Text fontWeight="700" fontSize="18px" color="#333333">{data.name}</Text>
                  <Text fontWeight="400" fontSize="14px" color="#666666">{data.phone}</Text>
                  <Text fontWeight="400" fontSize="14px" color="#666666">{data.email}</Text>
                </Box>

                <Flex h="59px" w="65px" border="solid 1px #EEEEEE" borderRadius="4px" direction="column" justifyContent="center" alignItems="center" >
                  <Text fontWeight="500" fontSize="28px" color="#333333">10</Text>
                  <Text fontWeight="400" fontSize="12px" color="#666666">Events</Text>
                </Flex>
              </Flex>
              <Box width="85px" display="flex" alignSelf="self-start" justifyContent="space-between" >
                <Button height={"20px"} fontSize="14px" fontWeight="400" color="#0A84FF" padding="0px" margin="0px" >Edit</Button>
                <Button height={"20px"} fontSize="14px" fontWeight="400" color="#0A84FF" padding="0px" margin="0px">Delete</Button>
              </Box>
            </VStack>

          ))}

          <HStack height={"100%"} width={"100%"} >
            <Box alignSelf={"flex-end"}>
              <Button height="40px" width="812px" border="1px solid #0A84FF" borderRadius="4px" color="#0A84FF" >
                <Box height="14px" width="125px" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" >
                  <Image src={"/Plus.png"} alt="plus" width={10} height={10} />
                  <Text height="14px" fontWeight="500" fontSize="16px" lineHeight="14px" color="#0A84FF"> Add New Elderly</Text>
                </Box>
              </Button>
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </>
  )
}
