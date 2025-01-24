import React from 'react'

import { VStack, Text, Image, HStack, Flex } from '@chakra-ui/react'



export default function TicketBox() {
    
    const TicketDetails = [
    
        {  
            id: 1,
            image: "./ticket-img.img",
            dates: "Mon, 01 Dec 2021",
            event: "Yoga & Meditation : Theme Based ",
            age: "(35-80 years)",
            time: "04:00PM",
            location: "OneNest: Mumbai",
            ticketType: "M-Ticket",
            day: "MON",
            date: "09",
            month: "DEC",
            seat:"seat",
            seatType: "Silver, Class"
        },
        {
            id: 2,
            image: "./ticket-img.img",
            dates: "Mon, 01 Dec 2021",
            event: "Yoga & Meditation : Theme Based ",
            age: "(35-80 years)",
            time: "04:00PM",
            location: "OneNest: Mumbai",
            ticketType: "M-Ticket",
            day: "MON",
            date: "09",
            month: "DEC",
            seat:"seat",
            seatType: "Silver, Class"
        },
        {
            id: 3,
            image: "./ticket-img.img",
            dates: "Mon, 01 Dec 2021",
            event: "Yoga & Meditation : Theme Based ",
            age: "(35-80 years)",
            time: "04:00PM",
            location: "OneNest: Mumbai",
            ticketType: "M-Ticket",
            day: "MON",
            date: "09",
            month: "DEC",
            seat:"seat",
            seatType: "Silver, Class"
        },
        {
            id: 4,
            image: "./ticket-img.img",
            dates: "Mon, 01 Dec 2021",
            event: "Yoga & Meditation : Theme Based ",
            age: "(35-80 years)",
            time: "04:00PM",
            location: "OneNest: Mumbai",
            ticketType: "M-Ticket",
            day: "MON",
            date: "09",
            month: "DEC",
            seat:"seat",
            seatType: "Silver, Class"
        },
      
        
       
       
    ]
    
    return (
        <>
            {TicketDetails.map((data, index)=>( 
            <VStack  key={data.id} gap={0} height={"184px"} width="398px" >
                <Text  fontSize="12px" fontWeight="500" color="#666666" alignSelf={"flex-start"}>{data.dates}</Text>
                <VStack width="398px" height="106px" bgColor=" #FFFFFF" padding={"12px 12px 0 12px"}  borderRadius={"4px"} >
                    <Flex height={"80px"} direction={"row"} alignSelf={"flex-start"} >
                        <Image src={data.image} alt="image" width={"60px"} hieght={"80px"} />
                             <VStack alignItems={"start"} gap={0} marginLeft={"12px"}>
                            <Text fontSize="14px" fontWeight="600" color="#333333" >{data.event}<br></br>{data.age}</Text>
                            <Text fontSize="12px" fontWeight="500" color="#666666" >{data.time}</Text>
                            <Text fontSize="12px" fontWeight="400" color="#666666" >{data.location}</Text>
                        </VStack>
                         <Text marginTop={"12px"} marginLeft={"22px"} fontSize="12px" fontWeight="400" color="#666666">{data.ticketType}</Text>
                    </Flex>
                </VStack>
                <HStack height={"55px"} width={"398px"}  color={"#666666"} bgColor=" #FFFFFF" padding={"0px 12px 0 31px"} alignContent={"center"}  borderRadius={"4px"}  >
                    <VStack gap={0} >
                        <Text fontSize="9px" fontWeight="600" marginBottom={"-5px"} >{data.day}</Text>
                        <Text fontSize="16px" fontWeight="600">{data.date}</Text>
                        <Text fontSize="9px" fontWeight="600"  marginTop={"-5px"}>{data.month}</Text>
                    </VStack>
                    <Flex>|</Flex>
                    <VStack  gap={0} alignItems={"self-start"} >
                        <Text fontSize="12px" fontWeight="400" >{data.seat}</Text>
                        <Text fontSize="14px" fontWeight="500"> {}</Text>
                    </VStack>
                </HStack>      
            </VStack>
            ))}
        </>

    )
}
