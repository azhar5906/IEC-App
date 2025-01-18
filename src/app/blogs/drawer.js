import React from 'react'
import { Avatar } from "@/components/ui/avatar"
import Image from 'next/image'
import { Button } from '@chakra-ui/react'
import CardData from '@/app/PageComponents/Events.json'

import Sidecomponents from '../PageComponents/Sidecomponents'


export default function drawer(index) {
  const {data} = index

  return (
    <div className='' style={{display:"flex", justifyContent:"flex-end   "}}>
    <div className='side-container' style={{  width:"360px", height:"644px", backgroundColor:"#FFFFFF" }}>

      <div className='top-box' style={{width:"360px", height:"89px", backgroundColor:" #16C1F3 ", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div className='bg-image' style={{backgroundImage:"url('./navbar-top.png')", width:"364px", height:"72.69px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div className='hey' style={{color:"#ffffff", fontSize:"18px", fontWeight:"600", lineHeight:"28px"}}>
                <h5 style={{margin:"35px 0px 9.69px 10px"}}>Hey!</h5>
            </div>

            <div>
                  <Avatar  bgColor={"#FFFFFF"} color={"black"} margin={"34px 10px 2.69px 0px"} />
            </div>
        </div>

      </div>


      <div className='login-register' style={{ width:"360px", height:"64px",  display:"flex", justifyContent:"space-between", alignItems:"center" }} >
           
          <div className='image'style={{width:"32px", height:"32px", backgroundColor:"#4A4D5E", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center", margin:"16px 0px 16px 16px"}}>
            <div> <Image src={"/Vector.png"} width={18} height={18} alt='image' /></div>
          </div>
          <div>
            <p style={{fontSize:"12px", fontWeight:"400", lineHeight:"15px", color:"#333333", marginRight:"20px"}}>Unlock special offers &<br></br>great benefits</p>
          </div>
          <div>
            <Button borderColor={"  #0A84FF"} color={"#0A84FF"} marginRight={"16px"}>Login/Register</Button>
          </div>
      </div>  

        <div className="side-components" style={{width:"360px", height:"64px", }}>
       
          {CardData.map((data, index) => (
          
                  <Sidecomponents key={index} data={data}   />
                ))} 

                 <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"21px"}}>
                            <Button fontSize={11} fontWeight={400} color=" #666666" border={"1px solid #eeeeee"} width={"60px"} height={"18px"} >Share</Button>
                            <Button fontSize={11} fontWeight={400} color=" #666666" border={"1px solid #eeeeee"} width={"60px"} height={"18px"}>Rate us</Button>
                            <Button  style={{width:"60px", height:"18px", padding:"0px"}}>
                                <Image  alt='image' src="/social-icon.png" width={60} height={18}/>
                            </Button>
                          </div>
             
        </div>

       
        
    </div>
    </div>
  
  )
}
