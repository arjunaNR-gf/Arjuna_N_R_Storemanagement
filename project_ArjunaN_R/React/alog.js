import React,{useState,useEffect,props} from 'react';
import { BrowserRouter as  Switch,Route,Link,Redirect, useHistory } from "react-router-dom";
import "./Ilog.css";
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { AddAlert, Router } from '@material-ui/icons';
import Inhome from "./Indusrtydata";
import axios from 'axios';
import Sociallink from './SocialLink';


 


export default function Login()
{
    
    sessionStorage.clear('userId');
    sessionStorage.clear('userEmail');



const userdata=
{
Userid:'',
Password:'',
Type:'',
Status:''
}
var [Logindata,setLogindata] = useState({})   


const emailpassword=
 {
     Iid:'',
     pass:'',
 }
 const [Values,setvalues]=useState(emailpassword);
 const inputhandle=e=>
 {
     const {name,value}=e.target
     setvalues({
         ...Values,
         [name]: value

     })
 }



   



    const checkemail=e=>
    {
   var  emailuser=e.target.value;
    if(emailuser==" ")
    {
        document.getElementById("pemail").hidden=false;
        document.getElementById("pemail").innerHTML="Enter Email";
     
    }
    else if(!/^[a-zA-Z]+-[a-zA-Z0-9-]*$/.test(emailuser))
    {
        document.getElementById("pemail").hidden=false;
        document.getElementById("pemail").innerHTML="Id format not correct";
    }
    else
    {
        document.getElementById("pemail").hidden=true;
    }
}



const checkpass=e=>
{
    var num=/[0-9]/
    var special=/[^%&*#$%]/
    var chu=/[A-z]/
    var chl=/[a-z]/
    var upass1=e.target.value
   
    upass1=e.target.value;


    if(upass1.length < 6)
        {
            document.getElementById("ppass").hidden=false;
            document.getElementById("ppass").innerHTML="password atleast contain 6 charector" 
        }
    else if(upass1==" ")
    {
        document.getElementById("ppass").hidden=false;
        document.getElementById("ppass").innerHTML="Please enter password" 
    }
        else
        {
            document.getElementById("ppass").hidden=true; 
        }
    

}




const [display,setdisplay]=useState(false);

var histry=new useHistory()

var msg="";    
    const Mydata=()=>
    {      
        axios.get('http://localhost:54929/api/Login/Get?Userid='+Values.Iid+'&Password='+Values.pass)
        .then(Response=>{
          setLogindata({... Response.data} ) 
     
          if(Response.data.Status=="SignIn")
          {
            axios.get('http://localhost:54929/api/Login/Get?Userid='+Values.Iid)
            .then(Response=>{
                
                sessionStorage.setItem('userId',Response.data[0].Userid)
                sessionStorage.setItem('userEmail',Response.data[0].Email)
              if(Response.data[0].Type=="admin")
              {
              histry.push("/adminhome");
              }
              else if(Response.data[0].Type=="industry")
              {
                histry.push("/Industrydata");
              }
              else if(Response.data[0].Type=="dealer")
              {
                
                histry.push("/dealerHome");
              }
            })
          }
          else if(Response.data.Status=="Invalid Password")
          {
            document.getElementById("ppass").hidden=false;
            document.getElementById("ppass").innerHTML="Invalid password"

          }
          else{
            document.getElementById("pemail").hidden=false;
            document.getElementById("pemail").innerHTML="Invalid userid"
            document.getElementById("ppass").hidden=false;
            document.getElementById("ppass").innerHTML="Invalid password"

          }
          
        }) 
        
     

    
}    

const log=()=>
{

    Object.keys(Logindata).map(id=>{
        if(Logindata[id].Type=='admin')
        {
            histry.push("/adminhome");
        }
       
})
}
         
    

 const unchange=()=>
 {
    setdisplay(false);
 }

    
   

   




      
   



    return(
        <div>
        <div div className={display ? "menu-inactive":"menu"}>
            <div className="menu-active">
            <nav class="nv nv-container-fluid" >
                <div className="dv-menu">
                <label className="h3"><b className="bld">S</b>tore<b className="bld">M</b>anagemen<b className="bld">t</b></label>
                </div>
               
    </nav>
 

</div>



            <div className="logdv">
            <div className="logdv1">
            <div className="img-grd">
                        <div className="img-sub">
                            <img src="https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"></img>
                        </div>
                        <div className="img-sub">
                            <img src="https://images.unsplash.com/photo-1541574823565-f1d660886187?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"></img>
                        </div>
        
                        <div className="img-sub">
                            <img src="https://images.unsplash.com/photo-1589793463308-658ed42e5dfe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hbnVmYWN0dXJpbmd8ZW58MHx8MHw%3D&auto=format&fit=crop&w=600&q=60"></img>
                        </div>
                        <div className="img-sub">
                            <img src="https://images.unsplash.com/photo-1584275142355-81519fbadd4b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnVmYWN0dXJpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"></img>
                        </div>
                </div>
                <div className="social-link">
                <Sociallink/>
                 </div>
            </div>
            <div className="logdv2">
            <div className="login-outlayer">
            <div className="h4" style={{color:"  rgb(12, 130, 137)" ,fontStyle:"italic"}}>Storemanagement</div>
           
                <div><div style={{display:"flex",marginLeft:"5%"}}> <div className="icons-menu"><PersonIcon/></div><input type="text" name="Iid" value={Values.Iid} className="form-control" placeholder="Enter your id" onKeyUpCapture={checkemail} onChange={inputhandle} required />
                </div>
                <p id="pemail" className="pp1" hidden></p>
                <br></br>
                </div>
            
                <div style={{display:"flex",marginLeft:"5%"}}> <div className="icons-menu"><LockIcon/></div>  <input type="text" name="pass" value={Values.pass} className="form-control" placeholder="Enter your Password"  onKeyUpCapture={checkpass} onChange={inputhandle} required /></div>
                <p id="ppass" className="pp1" hidden></p>
               
               {/*<Link to="/Industrydata" onClick={handle}><button className="bt"  >Login</button></Link>*/}

               <button onClick={Mydata} className="bt">Login</button>
               <div style={{display:"flex",marginTop:"2%",marginLeft:"30%"}}><p>Forget password?</p><Link  to="/Forgetpassword">Click</Link></div> 
               
            </div>
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

</div>
    )
}


