"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/popover"

// import { useRef } from "react"

export default function Popbox() {
// const ref = useRef<HTMLButtonElement>(null)

  return (
    <div style={{backgroundColor:"##FF6633" , }}>
    <div style={{backgroundColor:"#FFFFFF", }}>
    <PopoverRoot >
    <PopoverTrigger asChild  bgColor={"#FFFFFF"}>
      <Button size="sm" variant="outline" color={"black"}>
        Submit
      </Button>
    </PopoverTrigger>
    <PopoverContent color={"black"} bgColor={"#FFFFFF"}width={"376px"} height={"500px"} >
      <PopoverBody >
      <div style={{display:"flex", justifyContent:"center"}}>
        <img 
            src={"/Regestration-pop.png"}
            width={"296.67"}
            height={"205.81px"}
            /> 
        </div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"-40px"}}>
            <img 
                src={"/Regestration-check.png"}
                width={"80px"}
                height={"80px"}
            />  
            
        </div>  
        <div style={{display:"flex", justifyContent:"center", flexDirection:" column", alignItems:"center", marginTop:"28px" }}>
            <p style={{fontSize:"20px", fontWeight:"800", lineHeight:"24.2px"}}>  Registration Completed</p>
            <p style={{fontSize:"20px", fontWeight:"800",lineHeight:"24.2px"}}>
            Successfully</p>
        </div>
      
      </PopoverBody>
  <PopoverCloseTrigger  color={"blue"} marginRight={"-50px"} marginTop={"0px"} backgroundColor={"white"} borderRadius={"50%"} padding={"0px"}  _hover={{backgroundColor:"white"}}  />
 
      
      

    </PopoverContent>

  </PopoverRoot>


  </div>
  </div>

)
}

