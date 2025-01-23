import { Fieldset, Input, Stack, HStack,VStack, Text, Flex,Box } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"
import {
    NativeSelectField,
    NativeSelectRoot,
} from "@/components/ui/native-select"
import { Button } from "@/components/ui/button"

export default function TicketDetail() {
    return (
        <>
        <HStack width={"776px"} height={"316px"} justifyContent={"space-around"} flexDirection={"row"} >
            <Fieldset.Root size="lg" maxW="md" >
                <Flex paddingLeft={"5px"}>
                    <Avatar  name=""  bgColor={"#FFF"} color={"#000"} width={"28px"} height={"28px"} border={"1px solid  #EEE"}>3</Avatar>
                    <Fieldset.Legend color={"#000"} fontSize={"16px"} fontWeight={"600"} >Ticket details</Fieldset.Legend>
                </Flex>

                <Fieldset.Content paddingLeft={"50px"}>
                    <Field label="Name" fontSize={"12px"} color={"#333"} gap={"0px"}>
                        <Input name="name" width={"328px"} border={"none"} borderBottom={"1px solid black"} borderRadius={"none"} padding={"0px"} fontSize={"16px"} fontWeight={700} />
                    </Field>

                    <Flex gap={"20px"}>
                        <NativeSelectRoot size="sm" width="69px"  padding={0} >
                            <NativeSelectField placeholder="" border={"none"} height={"40px"}  borderBottom={"1px solid #CCC"} borderRadius={"none"} >
                                <option value="react">91+</option>
                                <option value="vue">92+</option>
                                <option value="angular">93+</option>
                                <option value="svelte">94+</option>
                            </NativeSelectField>
                        </NativeSelectRoot>
                            <Input name="number" border={"none"} width={"239px"} borderBottom={"1px solid black"} borderRadius={"none"} padding={"0px"} fontSize={"16px"} fontWeight={700} />
                    </Flex>

                    <Field label="Email address" fontSize={"12px"}  >
                        <Input name="email" type="email" width={"328px"}  border={"none"} borderBottom={"1px solid black"} borderRadius={"none"} padding={"0px"} fontSize={"16px"} fontWeight={700} />
                    </Field>
                        <Text fontSize={"14px"}>This email address will receive the e-tickets</Text>
                </Fieldset.Content>
            </Fieldset.Root>

            <VStack  width={"265px"} alignSelf={"flex-end"}  padding={"10px"} >
               <Box >
                <Checkbox>I accept and have read the<br></br> 
                    terms and conidtions</Checkbox>
                    <Button bgColor={" #0A84FF"} color={"white"} width={"250px"}>CONTINUE</Button> 
                   
               </Box>
            </VStack>
        </HStack>
        <br></br>
        <br></br>
        <br></br>
        hello
        </>
    )
}
