import React from 'react'
import { Input, Stack, Textarea } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import {
  PopoverArrow,
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function ConfirmDetailsPop() {
  return (
    <PopoverRoot>
    <PopoverTrigger asChild >
      <Button size="sm" variant="outline">
        Continue
      </Button>
    </PopoverTrigger>
    <PopoverContent backgroundColor={"white"} width={408} height={420}>
      <PopoverBody>
        <h3 style={{fontSize:"18px", fontWeight:"600"}}>Confirm Details</h3>
        <Stack gap="4" marginTop={"20px"}>
          <Field label="Name" fontSize={"18px"} fontWeight={"600"}  borderBottom={"2px solid black" }  font _active={{backgroundColor:"transparent", }}>
            <Input type='text'fontSize={"16px"} fontWeight={"700"}  placeholder="Enter Name"  border={"none"} />
          </Field>
          <Field label="Email Address" fontSize={"18px"} fontWeight={"600"}  borderBottom={"2px solid black" }>
            <Input placeholder="Enter Email Address" border={"none"}/>
          </Field>
        
        </Stack>
        <div>
            <p style={{fontSize:"12px", fontweigtht:"500", color:"#666666", lineHeight:"28px", margin:"25px 0px 0px 238px", textDecorationLine:"underline"}}>Terms & Conditions</p>
        </div>
      </PopoverBody>
      <PopoverCloseTrigger />
      <Button size="sm" variant="outline">
        Next
      </Button>
    </PopoverContent>
  </PopoverRoot>

  )
}
