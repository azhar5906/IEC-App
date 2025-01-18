import React from 'react'
import { PinInput } from "@/components/ui/pin-input"
import { Button } from "@/components/ui/button"

export default function EmailVerify() {
  return (
    <>
    <div className='NumberVerifyContainer'  style={{ marginTop:"100px",height:"220px", width:"353px",  backgroundColor:"#ffffff", mariginBottom:"50px", }}>

<li style={{ marginTop:"23px", height:"19px", fontWeight:"600", fontSize:"18px", lineHeight:"21px", color:"#333333",}}>
Verify your Email Id</li>
<li style={{ marginTop:"7px",height:"16px", fontWeight:"500", fontSize:"12px", lineHeight:"16px", color:"#666666",}}> 
Enter OTP sent to mansuri.wasim@gmail.com</li>

<PinInput style={{marginTop:"12px", border:"none"}}/>

<li style={{ marginTop:"16px",height:"16px", fontWeight:"500", fontSize:"12px", lineHeight:"16px", color:"#666666",}}> 
    Expect OTP in 21 seconds</li>

<Button style={{ marginTop:"8px",height:"40px", width:"332px",backgroundColor:"#EEEEEE", border:"none", }}><li style={{fontWeight:"700", fontSize:"12px", lineHeight:"15px",color:"#999999"}} >CONTINUE</li></Button>

<a href="#" style={{ marginLeft:"145px", marginTop:"8px",height:"20px", fontWeight:"500", fontSize:"12px", lineHeight:"20px", color:"#0A84FF",}}>BACK</a>

    


</div>
    </>
  )
}
