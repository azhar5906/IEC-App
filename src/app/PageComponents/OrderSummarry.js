"use client";

import { Text } from "@chakra-ui/react";
import Image from "next/image";
import { Alert } from "@/components/ui/alert"

export default function OrderSummary() {
  const orderDetails = {
    event: "Yoga & Meditation : Theme Based (35-80 Years)",
    date: "Sun, 24 Apr, 2022",
    time: "04:00 PM",
    location: "Online",
    platform: "Zoom",
    tickets: 3,
    subTotal: 450.0,
    convenienceFee: 20.0,
    totalAmount: 470.0,
    users: [
      {
        name: "mansuri.wasim@gmail.com",
        phone: "9930391551",
        state: "Maharashtra",
      },
      {
        name: "Abdul Rashid Mansuri",
        phone: "9930391551",
        state: "Maharashtra",
      },
      {
        name: "Parveen Mansuri",
        phone: "9930391551",
        state: "Maharashtra",
      },
    ],
  };

  return (
    <>
    <div style={{  width:"776px", height:"410px", borderRadius: "10px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",  display:"flex", justifyContent:"space-between"}}>
      {/* Order Summary Section */}

       
         <div style={{ border: "1px solid #e0e0e0", borderRadius: "10px",  margin: "0px 0px 0px 55px", width:"421px", height:"335px", }}>

                <h3 style={{ margin: "16px 0 0 12px",height:"22px",fontWeight:"600", fontSize: "14px"  }}>{orderDetails.event}</h3>
                
              <div style={{width:"42px", height:"40px",  display:"flex", flexDirection:"column", marginTop:"-20px", alignItems:"center", marginLeft:"363px", position:"absolute"}}>
                  <p style={{  fontWeight:"600", fontSize: "20px", lineHeight:"18px", color:"#333333"}}>{orderDetails.tickets}</p>
                  <p style={{ marginTop:"2px", fontWeight:"400", fontSize: "12px", lineHeight:"20px", color:"#666666"}}>Tickets</p>
              </div>
               
                <p style={{ margin: "8px 0 0 36px", color: "#777" }}>{orderDetails.date} | {orderDetails.time}</p>
                <Image 
                  src={"/date-time.png"}
                  width={18}
                  height={18}
                  alt="image"
                  style={{margin:"-20px 8px 0 12px"}}
                
                />
                <p style={{ margin: "12px 0 0 36px", color: "#777" }}>{orderDetails.location}</p>

                <Image 
                  src={"/online.png"}
                  width={18}
                  height={18}
                  alt="online"
                  style={{margin:"-20px 8px 0 12px"}}
                
                />
                <p style={{ margin: "12px 0 23px 36px", color: "#777" }}>{orderDetails.platform}</p>
                <Image 
                  src={"/zoom.png"}
                  width={18}
                  height={18}
                  alt="image"
                  style={{margin:"-45px 8px 23px 12px"}}
                
                
                />

                <hr style={{width:"393px", marginLeft:"12px", borderColor:"#EEEEEE"}}/>
                <p style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
                    <span style={{  fontWeight:"400", fontSize: "12px", lineHeight:"18px", color:"#333333", marginLeft:"12px"}}>Sub-total</span>
                    <span style={{  fontWeight:"600", fontSize: "13px", lineHeight:"20px", color:"#333333", marginRight:"16px"}}>₹{orderDetails.subTotal}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between", margin: "10px 0" }}>
                    <span style={{  fontWeight:"400", fontSize: "12px", lineHeight:"18px", color:"#333333", marginLeft:"12px"}}>Convenience Fee</span>
                    <span style={{  fontWeight:"600", fontSize: "13px", lineHeight:"20px", color:"#333333", marginRight:"16px"}}>₹{orderDetails.convenienceFee}</span>
                </p>
                <p style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "16px"}}>
                    <span style={{  fontWeight:"400", fontSize: "13px", lineHeight:"18px", color:"#333333", marginLeft:"12px"}}>Total Amount</span>
                    <span style={{  fontWeight:"600", fontSize: "13px", lineHeight:"20px", color:"#333333", marginRight:"16px"}}> ₹{orderDetails.totalAmount}</span>
                </p>
                <hr style={{width:"393px", marginLeft:"12px", borderColor:"#EEEEEE"}}/>

                <div className="promocode-container" style={{width:"393px", height:"52px", borderRadius:"8px", backgroundColor:" #DEFFFA", margin:"12px", padding:"12px", display:"flex",alignItems:"center", }}>
                 <Image
                  src={"/promocode-img.png"}
                  width={20}
                  height={20}
                  alt="image"

                 />
                  <p>
                    <Text fontWeight={"600"} fontSize={"12px"} lineHeight={"14.54px"} marginLeft="6px">Unlock offers or Apply Promocodes</Text>
                    <Text fontWeight={"400"} fontSize={"10px"} lineHeight={"20px"} marginLeft="6px">Lorem ipsum dolor sit amet, consectetur</Text>
                  </p>

                </div>
          </div>
          
      <div className="user-details" style={{  width:"270px", height:"337px"}}>
        
        <h3 style={{ color: "#333", margin:"10px 0 10px 10px" }}>Other Details</h3>
        {orderDetails.users.map((user, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p style={{ marginLeft: "10px",fontWeight:"400", fontSize: "12px", lineHeight:"20px", }}>{user.name}</p>
            <p style={{ marginLeft: "10px", color: "#777",fontWeight:"400", fontSize: "12px", lineHeight:"20px",  }}>{user.email || ""}</p>
            <p style={{ marginLeft: "10px", color: "#777", fontWeight:"400", fontSize: "12px", lineHeight:"20px", }}>
              {user.phone} | {user.state}
            </p>
            
            <button style={{width:"32px", height:"30px", color: "#007bff", background: "none", border: "none", cursor: "pointer", position:"absolute",marginLeft:"225px", marginTop:"-45px", fontWeight:"400", fontSize: "12px", lineHeight:"20px", }}>
              Edit
            </button>
            <hr style={{width:"250px", borderColor:"#EEEEEE", margin:"10px"}}></hr>
          </div>
        ))}
      <Alert status="info" fontSize={"11px"} fontWeight={"400"} marginLeft={"5px"} padding={0} backgroundColor={"white"} color={"#666666"} 
              title="By proceeding, I express my consent to
              compete this transaction" />

          <div style={{ textAlign: "right", marginTop: "20px", marginRight:"20px" }}>
            <button style={{ background: "#007bff",width:"259px",height:"36px", color: "#fff",  border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
              CONTINUE
            </button>
      </div>

      </div>
      </div> 



    
    </>

  );
}
