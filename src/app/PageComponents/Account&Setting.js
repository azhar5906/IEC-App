import React from 'react'
import { Stack, VStack, Text, Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'

export default function AccountSetting() {
  return ( 
    <>
    <VStack height={"887px"} width={"852px"} bgColor={" #F3F3F3"} padding={"20px"}>
                <Box alignSelf={"self-start"}>
                    <Text fontWeight={"600"} fontSize={"16px"}>Account & Setting</Text>
                </Box>

                <Stack height={"306px"} paddingTop={"20px"} gap={1} >
                    <Flex height={"92px"} width={"812px"} alignSelf={"flex-start"} bgColor={"#fff"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} borderRadius={"4px"}>
                        <Box >
                            <Text fontWeight="700" fontSize="18px" Color="#333333" >My Location</Text>
                             <Text fontWeight={"400"} fontSize={"18px"} Color={"#333333"}>Mumbai:Western</Text>
                        </Box>
                        <Flex >
                            <Image src={"/RArrow.png"} alt="image" height={4} width={10} />
                        </Flex>
                    </Flex>

                    <Flex height={"60px"} width={"812px"} alignSelf={"flex-start"} bgColor={"#fff"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} borderRadius={"4px"}>
                        <Text fontWeight={"400"} fontSize={"18px"} Color={"#333333"} >Payment & Refunds</Text>
                        <Image src={"/RArrow.png"} alt="image" height={4} width={10} />
                    </Flex>

                    <Flex height={"60px"} width={"812px"} alignSelf={"flex-start"} bgColor={"#fff"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} borderRadius={"4px"}>
                        <Text fontWeight={"400"} fontSize={"18px"} Color={"#333333"} >Cancellation, Refund & Exchange Request</Text>
                        <Image src={"/RArrow.png"} alt="image" height={4} width={10} />
                    </Flex>

                    <Flex height={"60px"} width={"812px"} alignSelf={"flex-start"} bgColor={"#fff"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} borderRadius={"4px"}>
                        <Text fontWeight={"400"} fontSize={"18px"} Color={"#333333"} >Venue didn’t play the show</Text>
                        <Image src={"/RArrow.png"} alt="image" height={4} width={10} />
                    </Flex>

                    <Flex height={"60px"} width={"812px"} alignSelf={"flex-start"} bgColor={"#fff"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} borderRadius={"4px"}>
                        <Text fontWeight={"400"} fontSize={"18px"} Color={"#333333"} >Ticket booking queries</Text>
                        <Image src={"/RArrow.png"} alt="image" height={4} width={10} />
                    </Flex>
                </Stack>
            </VStack>
    </>
  )
}
