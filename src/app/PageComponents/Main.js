import React from 'react' 
import Image from 'next/image'
    import { Avatar } from "@/components/ui/avatar"
import Sidecomponents from "./Sidecomponents"
import CardData from './Events.json'
import { Button } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import PurchaseHis from "./PurchaseHis"
import items from "./PurchaseHis"
import HelpSupport from "./Help&Support"
import LoginRegister from "./Login&Register"
import EmailLogin from "./EmailLogin"
import NumberVerify from './NumberVerify'
import EmailVerify from './EmailVerify'


export default function Main(data,items) {
    const index={data}

  return (
    <>

    <main style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor: "#F3F3F3", height:"auto"}}>
    
        <div className='main-container' style={{ width:"1176px",height:"auto",marginTop:"21px", display:"flex", flexDirection:"row", backgroundColor:"#ffffff"}}>

                <div className='sidebar' style={{width:"275px",height:"105px"}}>
                    <div className='person-info-box' style={{backgroundColor:"#742f8b", display:"flex",alignItems:"center", justifyContent:"center" }}>

                    <div style={{backgroundImage:"url('./person-info-bg.png')", width:"263.11px", height:"90.24px",}}>
                            <div className='info-image'style={{ display:"flex", }} >
                                <div style={{ marginTop:"21px", marginLeft:"20px",marginRight:"12px"  }}>
                                    <Image alt='image' src="/head-icon.png" width={65} height={65}  />
                                </div>

                                <div className='info-data' style={{ marginTop:"11px"   }}>
                                    <li style={{ color:"#fff",fontSize:"18px", fontWeight:"700", lineHeight:"28px"}}>Hi Wasim!</li>
                                    <li style={{color:"#fff",fontSize:"14px", fontWeight:"500", lineHeight:"14px", marginBottom:"11px"}}>+91 8108088722</li>
                                    <a href='#' style={{color:"#fff",fontSize:"14px", fontWeight:"500", lineHeight:"14px", }}>Edit Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='sidebar-components' style={{backgroundColor:"#fff", width:"276px", height:"528px",}}>
                        <div style={{width:"276px", height:"56px",  display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <Avatar name="4"  style={{width:"32px", height:"32px", fontSize:"20px", fontWeight:"600", lineHeight:"15px", marginRight:"12px"}} />
                            <li style={{fontSize:"12px", fontWeight:"400", lineHeight:"15px"}}> Your Bookings in the last year<br></br><b>Events</b></li>

                        </div>

                    
                    
                        {CardData.map((data, index) => (
                        <Sidecomponents key={index} data={data} />
                    ))}  
                            <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"16px"}}>
                            <Button fontSize={11} fontWeight={400} color=" #666666" border={"1px solid #eeeeee"} width={"60px"} height={"18px"} >Share</Button>
                            <Button fontSize={11} fontWeight={400} color=" #666666" border={"1px solid #eeeeee"} width={"60px"} height={"18px"}>Rate us</Button>
                            <Button  style={{width:"60px", height:"18px", padding:"0px"}}>
                                <Image  alt='image' src="/social-icon.png" width={60} height={18}/>
                            </Button>
                            </div>
                            <Link href="#" fontSize={14} fontWeight={600}  lineHeight={"16.94px"} color=" #0A84FF"  marginLeft={"20px"} marginTop={"20px"}>Log Out</Link>
                    </div>
            
                </div>
                
                <div className='section2'>
                  <PurchaseHis/>
                  <HelpSupport/>

                 
                </div>
                    
        </div>
             {/* This a temporary div to display lonIn components */}
             <div style={{width:"100%", height:"100%",  display:"flex", flexDirection:"column",  justifyContent:"center", alignItems:"center"}} >

                <LoginRegister/>
                <NumberVerify/>
                <EmailLogin/>
                <EmailVerify/>

            </div>
    </main>    
    </>
  )
}
