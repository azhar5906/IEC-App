"use client";

import React from 'react'
import {
    Box,
    Text,
    VStack,
    Flex,
    Icon,
    Button,
    Link,
    Group,
    // Divider 
} from "@chakra-ui/react";

import {
    FiBookmark,
    FiChevronRight,
    FiSettings,
    FiHelpCircle,
    FiUser,
    FiHeart,
    FiStar,
    FiLock
} from "react-icons/fi";
import { Avatar } from "@/components/ui/avatar"
import Image from 'next/image';

export default function Sidebar2() {
    const items = [
        {
            id: 1,
            title: "Purchase History",
            subtitle: "View all your bookings & purchases",
            icon: FiBookmark,
        },
        {
            id: 2,
            title: "Elderly Detail",
            subtitle: "View all your bookings & purchases",
            icon: FiUser,
        },
        {
            id: 3,
            title: "Help & Support",
            subtitle: "View all your bookings & purchases",
            icon: FiHelpCircle,
        },
        {
            id: 4,
            title: "Accounts & Settings",
            subtitle: "View all your bookings & purchases",
            icon: FiSettings,
        },
        {
            id: 5,
            title: "Care Points",
            subtitle: "View all your bookings & purchases",
            icon: FiStar,
        },
        {
            id: 6,
            title: "Review",
            subtitle: "View all your bookings & purchases",
            icon: FiBookmark,
        },
        {
            id: 7,
            title: "Host Your Events",
            subtitle: "View all your bookings & purchases",
            icon: FiBookmark,
        },
    ];

    return (
        <Box w="360px"  h={"100%"} bg="white"  borderRadius="lg" padding={"0"} borderRightColor={"#EEEDFB"} borderRightWidth={"1px"}>
            {/* Profile Section */}
            <Group padding={"7px"} bgColor={"#16C1F3"}  >
                <VStack bgImage={"url('./navbar-top.png')"} width={"348.11px"} height={"72.69px"}   >
                    <Flex justify="space-between" width={"100%"} height={"100%"} alignItems={"end"} padding={"5px"}>
                        <Button size="14" colorScheme="blue" color={"#FFF"} variant="link">
                            HEY!
                        </Button>
                        <Avatar bgColor={"#FFF"} color={"#0A84FF"} />
                    </Flex>
                </VStack>
            </Group>


            {/* Bookings Section */}
            <Flex width={"360px"} height={"56px"} gap={"12px"} padding={"16px"} alignItems={"center"}  justifyContent={"space-between"}  borderRadius={"10px"}>
               <Flex w={"32px"} h={"32px"} bgColor={"#4A4D5E"} borderRadius={"50%"} alignItems={"center"} justifyContent={"center"}>
                    <Image src="/Vector.png" width={18} height={18} alt='image' />
               </Flex>
                <Text fontSize="12px" fontWeight="400" color="gray.600">
                    Unlock special offers & <br></br>great benefits
                </Text>
                <Button border={"1px solid #0A84FF"} color={"#0A84FF"} widows={"120px"} >Login / Register</Button>

            </Flex>

            {/* Menu Items */}
            <VStack spacing="4" align="stretch"  >
                {items.map((item) => (
                    <Flex
                        key={item.id}
                        align="center"
                        justify="space-between"
                        cursor="pointer"
                        p="2"
                        borderRadius="md"
                        _hover={{ bg: "gray.100" }}
                    >
                        <Flex align="center" gap="3">
                            <Icon as={item.icon} width={"22px"} height={"14.02px"} color="gray.500" />
                            <Box>
                                <Link fontWeight="600" fontSize="12px" color={"#333"}>{item.title}</Link>
                                <Text fontWeight="400" fontSize="10px" color="#666">
                                    {item.subtitle}
                                </Text>
                            </Box>
                        </Flex>
                        <Icon as={FiChevronRight} boxSize="5" color="gray.500" />
                        {/* <Icon as={FiLock} boxSize="4" color="gray.500" /> */}
                    </Flex>
                ))}
            </VStack>

            {/* Footer */}
            <Flex  justifyContent={"space-between"} alignItems={"center"}  mt="4" width={"256px"}>
                <Button fontSize="11px" color={"#666"} height={"18px"} border={"1px solid #EEE"}>
                    Share
                </Button>
                <Button fontSize="11px" color={"#666"} height={"18px"} border={"1px solid #EEE"}>
                    Rate us
                </Button>
                <Button height={"18px"} width={"60px"} border={"1px solid #EEE"} bgImage={"url('./social-icon.png')"} >
                </Button>
            </Flex>

            {/* Logout */}
            <Button size="md" m={"20px"} color="#0A84FF" w="54px" h={"17px"} >
                Log Out
            </Button>
        </Box>
    );
}
