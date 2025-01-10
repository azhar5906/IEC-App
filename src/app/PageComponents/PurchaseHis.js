import React from 'react'
import TicketBox from "./TicketBox"


export default function PurchaseHis() {

  return (
    
    <div style={{marginTop:"24px", marginLeft:"24px", backgroundColor:" #F3F3F3", width:"852px", padding:"20px", height:"887px",  display:"grid", gridTemplateColumns:"auto auto"}}>
    <li className='ph' style={ { fontSize:"16px", fontWeight:"600", height:"28px"}}>Purchase History</li>

    <div style={{  }} >


    </div>
      

    <div className='ticket-holder' style={{display:"grid", gridTemplateColumns:"auto auto",columnGap:"20px", marginTop:"-60px" }}>
            <TicketBox />
            <TicketBox />
            <TicketBox />
            <TicketBox />
            <TicketBox />
            <TicketBox />
            <TicketBox />
            <TicketBox />
        </div>

        {/*

                <div className='ticket-box' style={{width:"398px", height:"160px", backgroundColor:"#FFFFFF", }}>
                    <div className='section1' style={{ display:"flex", flexDirection:"row"}}>
                        <div style={{padding:"12px"}}>
                            <Image
                            alt='image'
                            src='./ticket-img.png'
                            width={"60px"}
                            height={"80px"}
                            />
                        </div>

                        <div className='ticket-title'>
                            <li style={{fontSize:"14px", fontWeight:"600", lineHeight:"20px", color:"#333333", margin:"12px 0 0 0", height:"40px"}}>Yoga & Meditation : Theme Based<br></br>(35-80 years)</li>
                            <li style={{fontSize:"12px", fontWeight:"500", lineHeight:"20px", color:"#666666", margin:"8px 0 0 0" }}> 04:00PM</li>
                            <li style={{fontSize:"12px", fontWeight:"400", lineHeight:"20px", color:"#666666", }}>OneNest: Mumbai</li>
                        </div>
                
                    <div style={{width:"52px", margin:"12px 0px 0 30px"}}>
                            <li style={{fontSize:"12px", fontWeight:"500", lineHeight:"20px", color:"#666666", }}>M-ticket</li>
                    </div> 
                   </div>
                   <div style={{width:"366px", height:"1px", border:"1px solid #EEEEEE", margin:"0px 0px 0px 16px "}}></div>

                   <div className='section2' style={{display:"flex", justifyContent:"space-evenly" , width:"200px"}}> 
                    <div style={{margin:"0px 0px 0px 0px"}}>
                        <li style={{fontSize:"9px", fontWeight:"600", display:"inline", color:"#666666"}}>MON</li>
                        <li style={{fontSize:"16px", fontWeight:"600",  color:"#666666", margin:"-8px 0px -5px 0px "}}>09</li>
                        <li style={{fontSize:"9px", fontWeight:"600",  color:"#666666"}}>DEC</li>

                    </div>
                    <hr style={{width:"1px", height:"31px", backgroundColor:"#EEEEEE", marginTop:"12px" }}></hr>

                    <div>
                    <li style={{fontSize:"12px", fontWeight:"400", lineHeight:"20px", color:"#666666"}}>Seat</li>
                    <li style={{fontSize:"14px", fontWeight:"500", lineHeight:"20px", color:"#666666"}}> Silver, Class</li>

                    </div>
                    
                    </div>

                </div>


 */}

    </div>
  )
}

