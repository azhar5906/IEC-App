import React from 'react'
import { Group } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import {
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Resend() {
  return (
        <PopoverRoot >
          <PopoverTrigger asChild>
            <Button size="sm" variant="outline" color={"black"}>
              Resend Pop
            </Button>
          </PopoverTrigger>
          <PopoverContent width={"304px"} height={"350px"} backgroundColor={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} border={"1px solid black"}>
            <PopoverHeader width={"64px"} height={"64px"} backgroundColor={"white"} borderRadius={"50%"} padding={"0px"} display={"flex"}  justifyContent={"center"}alignItems={"center"} marginTop={"-32px"} >
                
                    <div>
                        <img 
                           src={'/Regestration-check.png'}
                           width={"48px"}
                           height={"48px"}
                        />
                    </div>
            </PopoverHeader>
            <PopoverBody padding={"0px"} >
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img 
                           src={'/Resend-pop.png'}
                           width={"218px"}
                           height={"132px"}
                        />

                </div>

                <div style={{marginTop:"8px",  display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <h3 style={{fontSize:"20px", fontWeight:"700", lineHeight:"28PX" }}>
                        You have resend<br></br> confirmation succesfully
                    </h3>
                </div>

                <div style={{marginTop:"4px",display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <p style={{fontSize:"11px", fontWeight:"500", lineHeight:"16PX"  }}>Lorem ipsum dolor sit amet, consectetur adised<br></br> do eiusmod tempor incididunt ut labore et </p>

                </div>

            </PopoverBody>
            <Group>
                <PopoverCloseTrigger  color={"black"} marginTop={"-40px"}/>
            </Group>
          </PopoverContent>

        </PopoverRoot>  
        
    )
}
