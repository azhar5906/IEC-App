import React from 'react'
import TicketBox from "./TicketBox"


export default function PurchaseHis() {

  return (
    <>
    
    <div clallName="PurchaseHistory" style={{marginTop:"24px", marginLeft:"24px", backgroundColor:" #F3F3F3", width:"852px", padding:"20px", height:"887px",  display:"grid", gridTemplateColumns:"auto auto"}}>
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

      



    </div>
    </>

  )
}

