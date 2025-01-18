import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@chakra-ui/react'
import Image from 'next/image'


export default function EmailLogin() {
  return (
    <>
    <div>
        <div style={{ marginTop:"100px",display:"flex", flexDirection:"row", backgroundColor:"#FFFFFF", }}>
      
            <div style={{marginLeft:"61px", width:"355px" , height:"227px", backgroundColor:"#FFFFFF", borderRadius:"5px", display:"flex", flexDirection:"column",}}>
     
                         <li style={{ marginTop:"23px", height:"19px", fontWeight:"700", fontSize:"16px", lineHeight:"19px", color:"#333333",}}>Login with I Elderly Care</li>
                        <li style={{ marginTop:"8px",height:"16px", fontWeight:"500", fontSize:"12px", lineHeight:"16px", color:"#666666",}}> This won’t take long!</li>
     
                <div style={{ marginTop:"28px",display:"flex", flexDirection:"column", alignItems:"Start"}}>
     
                        <Input style={{height:"19px", width:"165px", fontWeight:"400", fontSize:"14px", lineHeight:"19px",  border:"none" ,padding:"0px" }} placeholder="Continue with email" />
                        <div style={{height:"2px", width:"332px", backgroundColor:"#0A84FF", marginTop:"13px" }}></div>


                        
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
                         marginRight="37px"
                         />
                         <li style={{fontWeight:"700", fontSize:"12px", lineHeight:"15px",color:"#999999", marginLeft:"37px"}} >Continue with Google</li>
                        </Button>
     
                           <Button style={{ marginTop:"33px",height:"48px", width:"288px",border:"solid 1px #CCCCCC " , borderRadius:"4px ", display:"flex", flexDirection:"row", justifyContent:"start", alignItems:"center" , paddingLeft:"20px" }}>
                           <Image
                           src={"/Mobile-icon.png"}
                           alt="image"
                           height={17.51}
                           width={10}
                           marginLeft={"40px"}
                           />
                           <li style={{ fontWeight:"700", fontSize:"12px", lineHeight:"15px",color:"#999999", marginLeft:"40px"}} >Continue with Email</li>
                           </Button>
     
            </div>
     
        </div>
     
     </div>


     </> 

  )
}
