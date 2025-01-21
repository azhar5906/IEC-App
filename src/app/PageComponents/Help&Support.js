
import React from 'react'
import Image from 'next/image'

export default function HelpSupport() {
  return (
   <>
    <div style={{ marginTop:"24px",marginLeft:"24px", backgroundColor:" #F3F3F3", width:"852px", padding:"20px", height:"887px",}}>
        <li className='hs' style={ { fontSize:"16px", fontWeight:"600", height:"28px", lineHeight:"28px" ,color:"#333333"}}>Help & Support</li>
   

        <div className="HelpSupport-Container" style={{ marginTop:"20px", height:"308px",width:"812px", backgroundColor:"#F3F3F3" }}> 

            <div className='HelpSupport-Box1' style={{height:"60px", width:"812px", borderRadius:"5px", display:"flex", flexDirection:"row", alignItems:"center" , backgroundColor:"#FFFFFF" }}>
                        <li  style={{ marginLeft:"20px", height:"22px", width:"196px", fontSize:"18px", fontWeight:"700", lineHeight:"21px" }}>Recommended Topics</li>
                        <li style={{ marginLeft:"508px", height:"17px",  fontSize:"14px", fontWeight:"500",  lineHeight:"16px" ,color:"#0A84FF" }}>See All</li>
                    <div style={{marginLeft:"17px"}} >
                        <Image
                        src={"/RightArrow.png"}
                        alt="image"
                        width={10}
                        height={4}
                    />
                    </div>
                    
            </div>

            <div className='HelpSupport-Box2' style={{height:"60px",marginTop:"2px", width:"812px", borderRadius:"5px", display:"flex", flexDirection:"row", alignItems:"center" , justifyContent:"space-between",  backgroundColor:"#FFFFFF" }}>
                   <li  style={{ marginLeft:"20px", height:"22px",  fontSize:"18px", fontWeight:"400", lineHeight:"21px" , color:"#333333" }}>Payment & Refunds</li>
                <div style={{ marginRight:"18px"}} >
                    <Image
                    src={"/RightArrow.png"}
                    alt="image"
                    width={10}
                    height={4}
                    />
                </div>       
            </div>

            <div className='HelpSupport-Box3' style={{height:"60px", marginTop:"2px", width:"812px", borderRadius:"5px", display:"flex", flexDirection:"row", alignItems:"center" , justifyContent:"space-between",  backgroundColor:"#FFFFFF" }}>
                   <li  style={{ marginLeft:"20px", height:"22px",  fontSize:"18px", fontWeight:"400", lineHeight:"21px" , color:"#333333" }}>Cancellation, Refund & Exchange Request</li>
                <div style={{ marginRight:"18px"}} >
                    <Image
                    src={"/RightArrow.png"}
                    alt="image"
                    width={10}
                    height={4}
                    />
                </div>       
            </div>

            <div className='HelpSupport-Box4' style={{height:"60px", marginTop:"2px", width:"812px", borderRadius:"5px", display:"flex", flexDirection:"row", alignItems:"center" , justifyContent:"space-between",  backgroundColor:"#FFFFFF" }}>
                   <li  style={{ marginLeft:"20px", height:"22px",  fontSize:"18px", fontWeight:"400", lineHeight:"21px" , color:"#333333" }}>Venue didn’t play the show</li>
                <div style={{ marginRight:"18px"}} >
                    <Image
                    src={"/RightArrow.png"}
                    alt="image"
                    width={10}
                    height={4}
                    />
                </div>       
            </div>

            <div className='HelpSupport-Box5' style={{height:"60px", marginTop:"2px", width:"812px", borderRadius:"5px", display:"flex", flexDirection:"row", alignItems:"center" , justifyContent:"space-between",  backgroundColor:"#FFFFFF" }}>
                   <li  style={{ marginLeft:"20px", height:"22px",  fontSize:"18px", fontWeight:"400", lineHeight:"21px" , color:"#333333" }}>Ticket booking queries   </li>
                <div style={{ marginRight:"18px"}} >
                    <Image
                    src={"/RightArrow.png"}
                    alt="image"
                    width={10}
                    height={4}
                    />
                </div>       
            </div>


            
            
            

            


        </div>
    </div>
    </>

  )
}