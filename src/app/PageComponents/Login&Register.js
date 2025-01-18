import React from 'react'
import {
    NativeSelectField,
    NativeSelectRoot,
  } from "@/components/ui/native-select"
  import { Button } from "@/components/ui/button"
  import { Input } from "@chakra-ui/react"
  import Image from "next/image"    




export default function LoginRegister() {
  return (
    <>
    <div className='LoginContainer'  style={{height:"411px", width:"776px",  backgroundColor:"#FFFFFF", }}>

        <div className='LoginBox1' style={{display:"flex", flexDirection:"row", height:"60px", borderRadius:"5px", backgroundColor:"#FFFFFF"}}>

          <div style={{ display:"flex",flexDirection:"row", alignItems:"center", justifyContent:"center", margin:"16px 0px 0px 16px ",height:"28px", width:"28px", border:"solid 1px #EEEEEE", borderRadius:"50%"}}>
               <li style={{ margin:"0px  0px 4px 1px   ", alignSelf:"center",height:"20px", width:"8px"}}>1 </li>
          </div> 
          <li style={{height:"20px", fontWeight:"500", fontSize:"16px", lineHeight:"20px", color:"#000000",marginLeft:"26px", marginTop:"20px"}}>Login/ Register</li>
        </div>

        <div style={{height:"1px", width:"743px", backgroundColor:"#EEEEEE",  marginLeft:"16px" }}></div>

        {/* new */}
        <div style={{display:"flex", flexDirection:"row", backgroundColor:"#FFFFFF", }}>
 
          <div style={{marginLeft:"61px", width:"355px" , height:"227px", backgroundColor:"#FFFFFF", borderRadius:"5px", display:"flex", flexDirection:"column",}}>

                 <li style={{ marginTop:"23px", height:"19px", fontWeight:"700", fontSize:"16px", lineHeight:"19px", color:"#333333",}}>Login with I Elderly Care</li>
                 <li style={{ marginTop:"8px",height:"16px", fontWeight:"500", fontSize:"12px", lineHeight:"16px", color:"#666666",}}> This won’t take long!</li>

                    <div style={{  marginTop:"28px  ",display:"flex", flexDirection:"row", alignItems:"center"}}>

                        <NativeSelectRoot style={{width:"85px" , border:"none",}}>
                        <NativeSelectField style={{border:"none", }}>
                        <option value="1">91+</option>  
                        <option value="2">91+</option>
                        </NativeSelectField>
                        </NativeSelectRoot> 

                        <Input style={{height:"16px", fontWeight:"400", fontSize:"14px", lineHeight:"19px", border:"none", }} placeholder="Continue with mobile number" />

                    </div>
                           <div style={{height:"1px", width:"250px", backgroundColor:"#EEEEEE",  marginLeft:"16px" }}></div>
                    <Button style={{ marginTop:"33px",height:"40px", width:"332px",backgroundColor:"#EEEEEE", border:"none", }}><li style={{fontWeight:"700", fontSize:"12px", lineHeight:"15px",color:"#999999"}} >CONTINUE</li></Button>
            </div>

            <div style={{height:"158px", width:"1px", backgroundColor:"#EEEEEE", alignSelf:"center"}}></div>


            <div className='G-Button' style={{  marginLeft:"30px    ",display:"flex", flexDirection:"column", alignSelf:"center"   }}>
                <Button style={{ marginTop:"33px",height:"48px", width:"288px", border:"solid 1px #CCCCCC " , borderRadius:"4px ", display:"flex", flexDirection:"row", justifyContent:"start", alignItems:"center" }}>
                    <Image
                    src={"/google-icon.png"}
                    alt="image"
                    height={18}
                    width={18}
                    marginRight={"37px"}
                    />
                    <li style={{fontWeight:"700", fontSize:"12px", lineHeight:"15px",color:"#999999", marginLeft:"37px"}} >Continue with Google</li>
                      </Button>

                      <Button style={{ marginTop:"33px",height:"48px", width:"288px",border:"solid 1px #CCCCCC " , borderRadius:"4px ", display:"flex", flexDirection:"row", justifyContent:"start", alignItems:"center"  }}>
                      <Image
                      src={"/email_icon.png"}
                      alt="image"
                      height={18}
                      width={18}
                      />
                      <li style={{ fontWeight:"700", fontSize:"12px", lineHeight:"15px",color:"#999999", marginLeft:"37px"}} >Continue with Email</li>
                      </Button>

               </div>

        </div>

       


    </div>

    <div className='LoginBox1' style={{ width:"776px",marginTop:"2px",display:"flex", flexDirection:"row",  alignItems:"center", height:"60px", borderRadius:"12px", backgroundColor:"#FFFFFF"}}>

          <div style={{ display:"flex",flexDirection:"row", alignItems:"center", justifyContent:"center", margin:"0px 0px 0px 16px ",height:"28px", width:"28px", border:"solid 1px #EEEEEE", borderRadius:"50%"}}>
               <li style={{ margin:"0px  0px 4px 1px   ", alignSelf:"center",height:"20px", width:"8px"}}>2</li>
          </div>
       <li style={{height:"20px", fontWeight:"500", fontSize:"16px", lineHeight:"20px", color:"#000000",marginLeft:"26px",}}>Order Summary</li>

        <div style={{display:"flex", color:"#999999 ", marginLeft:"384px" }}>
          <li >Items: 4</li>
          <div style={{margin:"0px 10px 0px 12px",  alignSelf:"center"}}><Image
                src={"/Ellipse-icon.png"}
                alt="image"
                width={8}
                height={8}
            /></div>
          <li>Total:<sup>₹</sup>470.00</li>
        </div>
      
    </div>

  <div className='LoginBox1' style={{ width:"776px",marginTop:"2px", display:"flex", flexDirection:"row", height:"60px", borderRadius:"12px", backgroundColor:"#FFFFFF"}}>
     <div style={{ display:"flex",flexDirection:"row", alignItems:"center", justifyContent:"center", margin:"16px 0px 0px 16px ",height:"28px", width:"28px", border:"solid 1px #EEEEEE", borderRadius:"50%"}}>
               <li style={{ margin:"0px  0px 4px 1px   ", alignSelf:"center",height:"20px", width:"8px"}}>3</li>
          </div>
          <li style={{height:"20px", fontWeight:"500", fontSize:"16px", lineHeight:"20px", color:"#000000",marginLeft:"26px", marginTop:"20px"}}>Ticket Details</li>
   </div>

   </>

  )
}
