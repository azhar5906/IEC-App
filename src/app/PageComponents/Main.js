import React from 'react'
import Image from 'next/image'
import { Avatar } from "@/components/ui/avatar"
import Sidecomponents from "./Sidecomponents"
import CardData from './Events.json'
import { Button} from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import PurchaseHis from "./PurchaseHis"
import SideComponent from "@/app/blogs/drawer"
import Popbox from "@/app/PageComponents/Popover"
import ConfirmDetailsPop from "@/app/PageComponents/ConfirmDetails-pop"
import Resend from "@/app/PageComponents/Resend"
import OrderSummary from "@/app/PageComponents/OrderSummarry"
import TicketDetail from "@/app/PageComponents/TicketDetail"





export default function Main(data,) {
    const index = { data }
    return (

        <main style={{ display: "flex", justifyContent: "center", backgroundColor: "#F3F3F3" }}>

            <div className='main-container' style={{ width: "1176px", height: "auto", backgroundColor: "white", marginTop: "21px", display: "flex", flexDirection: "row", }}>
                <div className='sidebar' style={{ width: "275px", height: "105px" }}>
                    <div className='person-info-box' style={{ backgroundColor: "#742f8b", display: "flex", alignItems: "center", justifyContent: "center" }}>

                        <div style={{ backgroundImage: "url('./person-info-bg.png')", width: "263.11px", height: "90.24px", }}>
                            <div className='info-image' style={{ display: "flex", }} >
                                <div style={{ marginTop: "21px", marginLeft: "20px", marginRight: "12px" }}>
                                    <Image alt='image' src="/head-icon.png" width={65} height={65} />
                                </div>

                                <div className='info-data' style={{ marginTop: "11px" }}>
                                    <li style={{ color: "#fff", fontSize: "18px", fontWeight: "700", lineHeight: "28px" }}>Hi Wasim!</li>
                                    <li style={{ color: "#fff", fontSize: "14px", fontWeight: "500", lineHeight: "14px", marginBottom: "11px" }}>+91 8108088722</li>
                                    <a href='#' style={{ color: "#fff", fontSize: "14px", fontWeight: "500", lineHeight: "14px", }}>Edit Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='sidebar-components' style={{ backgroundColor: "#fff", width: "276px", height: "528px", }}>
                        <div style={{ width: "276px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Avatar name="4" style={{ width: "32px", height: "32px", fontSize: "20px", fontWeight: "600", lineHeight: "15px", marginRight: "12px" }} />
                            <li style={{ fontSize: "12px", fontWeight: "400", lineHeight: "15px" }}> Your Bookings in the last year<br></br><b>Events</b></li>

                        </div>



                        {CardData.map((data, index) => (
                            <Sidecomponents key={index} data={data} />
                        ))}
                        <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "16px" }}>
                            <Button fontSize={11} fontWeight={400} color=" #666666" border={"1px solid #eeeeee"} width={"60px"} height={"18px"} >Share</Button>
                            <Button fontSize={11} fontWeight={400} color=" #666666" border={"1px solid #eeeeee"} width={"60px"} height={"18px"}>Rate us</Button>
                            <Button style={{ width: "60px", height: "18px", padding: "0px" }}>
                                <Image alt='image' src="/social-icon.png" width={60} height={18} />
                            </Button>
                        </div>
                        <Link href="#" fontSize={14} fontWeight={600} lineHeight={"16.94px"} color=" #0A84FF" marginLeft={"20px"} marginTop={"20px"}>Log Out</Link>
                    </div>

                </div>

                <div className='section2'>
                    <div>
                        <PurchaseHis />

                    </div>
                    <div style={{ marginTop: "24px", marginLeft: "24px", backgroundColor: " #F3F3F3", width: "852px", padding: "20px", height: "887px", }}>
                        <SideComponent />

                    </div>

                    {/* Regestration completed popover */}

                    <div className='popover'>
                        Regestration completed popover

                        <Popbox />
                    </div>

                    {/* Confirm Details  popover */}<br></br>

                    <div className='details-popover'>
                        <p>Confirm Details  popover</p>

                        <ConfirmDetailsPop />
                    </div>

                    {/* Resend  popover */}<br></br>

                    <div className='resend-pop'>
                        <Resend />

                    </div>
                    <br></br>
                    <br></br>


                    <div>

                        <OrderSummary />
                    </div>
                    <br></br>
                    <br></br>

                    <div>
                        <TicketDetail />
                    </div>




                </div>





            </div>

        </main>



    )
}