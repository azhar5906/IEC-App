"use client";

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
  FiStar
} from "react-icons/fi";
import Image from "next/image";

export default function Sidebar() {
  const menuItems = [
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
    <Box w="275px" bg="white" p="4" borderRadius="lg" padding={"0"} borderRightColor={"#EEEDFB"} borderRightWidth={"1px"}>
      {/* Profile Section */}
      <Group padding={"7px"} bgColor={"#742F8B"}>
        <VStack bgImage={"url('./person-info-bg.png')"}   width={"263.11px"} height={"90.24px"} alignItems={"center"} justifyContent={"center"} >
          <Flex alignSelf={"flex-start"} gap={"12px"} alignItems={"center"} justifyContent={"center"}>
            <Image src="/head-icon.png" alt="image" width={65} height={65} />
            <Box>
              <Text fontSize="18px" fontWeight="700" color={"#FFF"}>
                Hi Wasim!
              </Text>
              <Text fontSize="14px" fontWeight="500" color="#FFF">
                +91 8108088722
              </Text>
              <Button size="14" colorScheme="blue" color={"#FFF"} variant="link">
                Edit Profile
              </Button>
            </Box>          
          </Flex>
        </VStack>
      </Group>


      {/* Bookings Section */}
      <Flex width={"276px"} height={"56px"} gap={"12px"} padding={"16px"} alignItems={"center"}  alignSelf={"flex-start"}>
        <Text fontWeight="600" fontSize="20px"  color={"#FFF"} width={"32px"} height={"32px"} bgColor={"#4A4D5E"} borderRadius={"50%"} display={"flex"} alignItems={"center"} justifyContent={"center"} >
          4
        </Text>
        <Text fontSize="12px" fontWeight="400" color="gray.600">
          Your Bookings in the last year <br></br><b>Events</b>
        </Text>
      </Flex>

      {/* Menu Items */}
      <VStack spacing="4" align="stretch"  >
        {menuItems.map((item) => (
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
          </Flex>
        ))}
      </VStack>

      {/* Footer */}
      <Flex justify="space-between" align="center" mt="4" width={"236px"}>
        <Button fontSize="11px" color={"#666"} height={"18px"} border={"1px solid #EEE"}>
          Share
        </Button>
        <Button fontSize="11px" color={"#666"}height={"18px"} border={"1px solid #EEE"}>
          Rate us
        </Button>
        <Button height={"18px"}width={"60px"} border={"1px solid #EEE"} bgImage={"url('./social-icon.png')"} >
        </Button>  
      </Flex>

      {/* Logout */}
      <Button size="md" m={"20px"} color="#0A84FF" w="54px" h={"17px"} >
        Log Out
      </Button>
    </Box>
  );
}
