import React from 'react'
import { Stack, VStack, Text, Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'

export default function PaymentRefund() {
    return (
        <>
            <VStack height={"887px"} width={"852px"} bgColor={" #F3F3F3"} padding={"20px"}>
                <Box alignSelf={"self-start"}>
                    <Text fontWeight={"600"} fontSize={"16px"}>Payment & Refunds</Text>
                </Box>

                <Stack height={"306px"} paddingTop={"20px"} gap={1} >


                    <Flex height={"60px"} width={"812px"} alignSelf={"flex-start"} bgColor={"#fff"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} borderRadius={"4px"}>
                        <Text fontWeight={"400"} fontSize={"18px"} Color={"#333333"} >It’s more than 5 to 7 days, why haven’t I received my refund?</Text>
                        <Image src={"/RArrow.png"} alt="image" height={4} width={10} />
                    </Flex>


                    <Flex height={"60px"} width={"812px"} alignSelf={"flex-start"} bgColor={"#fff"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} borderRadius={"4px"}>
                        <Text fontWeight={"400"} fontSize={"18px"} Color={"#333333"} >My amount was charged, but I haven’t received the SMS/ Email confirmation</Text>
                        <Image src={"/RArrow.png"} alt="image" height={4} width={10} />
                    </Flex>

                    <Flex height={"60px"} width={"812px"} alignSelf={"flex-start"} bgColor={"#fff"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} borderRadius={"4px"}>
                        <Text fontWeight={"400"} fontSize={"18px"} Color={"#333333"} >Cancellation, Refund & Exchange Request</Text>
                        <Image src={"/RArrow.png"} alt="image" height={4} width={10} />
                    </Flex>

                    <Flex height={"60px"} width={"812px"} alignSelf={"flex-start"} bgColor={"#fff"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} borderRadius={"4px"}>
                        <Text fontWeight={"400"} fontSize={"18px"} Color={"#333333"} >Why is my payment not going through</Text>
                        <Image src={"/RArrow.png"} alt="image" height={4} width={10} />
                    </Flex>

                    <Flex height={"60px"} width={"812px"} alignSelf={"flex-start"} bgColor={"#fff"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} borderRadius={"4px"}>
                        <Text fontWeight={"400"} fontSize={"18px"} Color={"#333333"} >Why am I unable to see SIMPL on the app?</Text>
                        <Image src={"/RArrow.png"} alt="image" height={4} width={10} />
                    </Flex>
                    <Flex height={"60px"} width={"812px"} alignSelf={"flex-start"} bgColor={"#fff"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} borderRadius={"4px"}>
                        <Text fontWeight={"400"} fontSize={"18px"} Color={"#333333"} >How does LazyPay works</Text>
                        <Image src={"/RArrow.png"} alt="image" height={4} width={10} />
                    </Flex>
                    <Flex height={"60px"} width={"812px"} alignSelf={"flex-start"} bgColor={"#fff"} alignItems={"center"} justifyContent={"space-between"} padding={"20px"} borderRadius={"4px"}>
                        <Text fontWeight={"400"} fontSize={"18px"} Color={"#333333"} >Other Topics</Text>
                        <Image src={"/RArrow.png"} alt="image" height={4} width={10} />
                    </Flex>
                </Stack>


            </VStack>


        </>
    )
}
