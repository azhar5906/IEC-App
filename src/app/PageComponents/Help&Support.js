
import React from 'react'
import Image from 'next/image'
import { Stack, VStack, Text, Box, Flex } from '@chakra-ui/react'

export default function HelpSupport() {
    return (
        <>
            <VStack height={"887px"} width={"852px"} bgColor={" #F3F3F3"} padding={"20px"}>
                <Box alignSelf={"self-start"}>
                    <Text fontWeight={"600"} fontSize={"16px"}>Help & Supoort </Text>
                </Box>

                <Stack height={"306px"} paddingTop={"20px"} gap={1} >
                    <Flex height={"60px"} width={"812px"} alignSelf={"flex-start"} bgColor={"#fff"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} borderRadius={"4px"}>
                        <Text fontWeight="700" fontSize="18px" Color="#333333" >Recommended Topics</Text>
                        <Flex width={"68px"} justifyContent={"space-between"}>
                            <Text fontWeight="500" fontSize="14px" color="#0A84FF" >See all</Text>
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