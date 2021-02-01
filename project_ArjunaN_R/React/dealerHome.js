import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './industrydata.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import { Profile } from './Profile';


export default function Dealerhome()
{
    const [display,setdisplay]=useState(false)
    
    const Uemail=sessionStorage.getItem('userEmail');
    const Uid=sessionStorage.getItem('userId');
    const [Profiledisplay,setProfiledisplay]=useState(false)
   const myprofile=()=>setProfiledisplay(!Profiledisplay);
   


    return(
        <div>
            <div className={display ? 'menu-inactive':'menu-active'}>
                <nav class="nv nv-container-fluid" >
                <div className="dv-menu">
                <label className="h3"><b className="bld">D</b>ealer<b className="bld">H</b>ome</label>
                <div style={{marginLeft:"70%",display:"flex",fontSize:"17px",marginTop:"2%",fontFamily:"Time New Roman"}} onClick={myprofile}> <Link to="#"><AccountCircleIcon/>{Uemail}</Link></div>
               
                <div className="dv-link-menu">
                <Link className="l1" to="/Dmystock">StockDetails</Link>
                <Link className="l3" to="/dmakeorder">MakeOrder</Link>
                <Link className="l3" to="/Payment">Payment</Link>
                <Link className="l3" to="/alog">SignOut</Link>
                </div>
                </div>
                </nav> 
            </div>

            <div className={Profiledisplay?"profile-home":"pp"} id="my-propile">
                <div class="pageprofile">
                <div style={{width:"100%",height:"auto",backgroundColor:"teal"}}><button className="close" style={{marginLeft:"9%"}} onClick={myprofile}><CloseIcon/></button></div>
               <br></br>
               <Profile/>
               </div>
            </div>

            
            <div style={{marginTop:"29%"}}></div>
<div className={Profiledisplay?"profile-home":"pp"} id="my-propile">
                <div class="pageprofile">
                <div style={{width:"100%",height:"auto",backgroundColor:"teal"}}><button className="close" style={{marginLeft:"9%"}} onClick={myprofile}><CloseIcon/></button></div>
               <br></br>
               <Profile/>
               </div>
            </div>

            <div className="footer-bottom">
                <div class="jumbo">
                        <div className="grd">
                        <h6 className="sub" style={{color:"white"}}>Get to Know Us</h6> 
                        <ul className="hd">
                            
                            <li>About Us</li> 
                            <li>Careers</li> 
                            <li>Press Releases</li> 
                            <li>Storemanagement Cares</li> 
                           <li> Gift a Smile </li> 
                        </ul> 

                        </div>
                        <div className="grd" >
                        <h6 className="sub"> Connect with Us</h6>
                        <ul className="hd" > 
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        </ul>
                        </div>
                        <div className="grd">
                       <h6 className="sub"> Policy</h6>
                       <ul className="hd">
                            <li>Return Policy</li>
                            <li>Terms Of Use</li>
                            <li> Security</li>
                            <li>Privacy</li>
                            <li>Sitemap</li>
                            <li>EPR Compliance</li>
                        </ul>
                        </div>
                        <div className="grd">
                            <img src="https://images.unsplash.com/photo-1560574188-6a6774965120?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"></img>
                        </div>
    
                </div>
                </div>
    
</div>
)
}