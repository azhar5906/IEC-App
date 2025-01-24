import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import "./Navbar.css"
import { Button } from "@/components/ui/button"
import Link from "next/link";
 
import { MenuContent,  MenuItem,  MenuRoot,  MenuTrigger,} from "@/components/ui/menu"
import { DrawerActionTrigger, DrawerBackdrop, DrawerBody,DrawerCloseTrigger, 
         DrawerContent,  DrawerFooter,  DrawerHeader,  DrawerRoot,  DrawerTitle, DrawerTrigger} from "@/components/ui/drawer"



const ProfileData = [
    {
        "id":1,
        "name":"Wasim",
        "description":"20 CP",
    }
]

export default function Navbar(index) {
    const {data}= index 

    
  return (
    <>
<header style={{ width:"100%", height:"68px", display:"flex", justifyContent:"center"}}>
    <div className='nav-bar' style={{ width:"1180px", height:"68px", display:"flex",alignItems:"center"}}> 
        <div className='navbar-logo' style={{display:"flex",width:"140.28px", height:"36px", }}>
            <Image src='./iec-logo.png' />
        </div>

        <div className='navbar-links' style={{color:"#333333", width:"450px",  display:"flex",justifyContent:"space-between", marginLeft:"41.71px"}}>
      
            <Link href="/pages.js" className='nav-list' style={{fontSize:"16px",fontWeight:"500px"}} >Events</Link>
            <a  href="#"style={{fontSize:"16px",fontWeight:"500px", marginLeft:"24px" }}>Nursing</a>
            <a style={{fontSize:"16px",fontWeight:"500px", marginLeft:"24px" }}>Sr. Care Packages</a>
            <a style={{fontSize:"16px",fontWeight:"500px", marginLeft:"24px" }}>Celebrity</a>
        </div>


        <div className='navbar-action-button' style={{ width:"275px", height:"36px", display:"flex", alignItems:"center", marginLeft:"263px" }}>
            <div style={{marginRight:"7px"}}>
                <Image  className="search-icon" src='./search-icon.png' style={{marginLeft:"17px",}}/> 
                {/* <input className='search-input' type='search' placeholder='search...' style={{marginLeft:"10px", marginBottom:"20px",width:"37px", height:"11px", fontSize:"10px", backgroundColor:" #FFFFFF"}} /> */}
            </div>

            <span style={{backgroundColor: "#DBDBDB", width:"1px", height:"28px"}}></span>

            <div className='menu-dropdown'>

                <MenuRoot  style={{ backgroundColor:"#333333" , }} >
                    <MenuTrigger asChild>
                        <li variant="outline" size="sm" border={"none"} style={{display:"Flex" , alignItems:"center",margin:"16px", color:" #666666", fontSize:"16px", fontWeight:"600px"}}>
                            Mumbai 
                            <Image src='./dropdown-menu.png' style={{width:"7px", height:"5px", marginLeft:"6px"}}/>
                        </li>
                    </MenuTrigger>
                    <MenuContent>
                        <MenuItem value="new-txt">Hyderabad</MenuItem>
                        <MenuItem value="new-file">Bangalore</MenuItem>
                        <MenuItem value="new-win">Delhi</MenuItem>
                        <MenuItem value="open-file">Noida</MenuItem>
                        <MenuItem value="export">Pune</MenuItem>
                    </MenuContent>
                </MenuRoot>

            </div>

            <span style={{backgroundColor: "#DBDBDB", width:"1px", height:"28px"}}></span>

            <div style={{display:"Flex"}}>
                <Image src='./profile-icon.png'style={{width:"39px",height:"36px", marginLeft:"16px", marginRight:"4px"}} />
                <div>
                    {ProfileData.map((data,id)=>
                    (
                    <ul key={id}>
                        <li style={{fontSize:"14px",fontWeight:"600",color:"#666666"}}>{data.name}</li>
                        <li style={{fontSize:"11px",fontWeight:"400",color:"#666666"}}>{data.description}</li>
                    </ul>
                    )
                    )}
                  
                </div>
            </div>

            <span style={{backgroundColor: "#DBDBDB", width:"1px", height:"28px", marginLeft:"16px"}}></span>
        </div>

        <div className='side-drawer'>

        <DrawerRoot >
            <DrawerBackdrop />
            <DrawerTrigger asChild>
            <Image src='./drawer-icon.png' style={{width:"18px", height:"16px", marginLeft:"16px"}}/>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                <DrawerTitle style={{color:"white"}}>Drawer Title</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                <p>
                   
                </p>
                </DrawerBody>
                <DrawerFooter>
                <DrawerActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                </DrawerActionTrigger>
                <Button>Save</Button>
                </DrawerFooter>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
        </div>
    </div>

 </header>
    <div><Image src='./navbar-end-line.png' width={"100%"}/></div>
    </>

)
}
