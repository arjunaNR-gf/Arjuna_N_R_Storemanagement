import React,{useState,useEffect,props} from 'react';
import { BrowserRouter as  Switch,Route,Link,Redirect, useHistory } from "react-router-dom";
import "./Ilog.css";
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { AddAlert, Router } from '@material-ui/icons';
import Inhome from "./Indusrtydata";
import axios from 'axios';
import Sociallink from './SocialLink';


 


export default function Forget()
{
const userdata=
{
        Userid:'',
        Name: '',
        Email: '',
        Password:'',
        Mobile:'',
        Address:'',
        Type:'',
}
var [Logindata,setLogindata] = useState({})   



 const [Values,setvalues]=useState(userdata);
 const inputhandle=e=>
 {
     const {name,value}=e.target
     setvalues({
         ...Values,
         [name]: value

     })
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
        axios.get('http://localhost:54929/api/Login/Get?Userid='+Values.Userid)
        .then(Response=>{
         
           if(Response.data.length != 0)
           {
              Values.Userid=Response.data[0].Userid;
              Values.Name=Response.data[0].Name;
              Values.Email=Response.data[0].Email;
              Values.Mobile=Response.data[0].Mobile;
              Values.Address=Response.data[0].Address;
              Values.Type=Response.data[0].Type;
              axios.put('http://localhost:54929/api/Login/Put?Userid='+Values.Userid,Values)
              .then(Response=>
                  {
                      if(Response.data.Status="updated")
                      {
                          alert("New Password updated successfully")
                      }
                      else
                      {
                          alert("Update Unsuccessfull")
                      }
                  })
              
           }
           else
           {
            document.getElementById("myid").hidden=false;
            document.getElementById("myid").innerHTML="Invalid Id"
           }
        } ) 
    }  


 const unchange=()=>
 {
    setdisplay(false);
 }

 const checkpass1=e=>
 {
     var upass1=e.target.value
    
      if(!/[A-Z]/.test(upass1))
     {
         document.getElementById("ppass1").hidden=false;
         document.getElementById("ppass1").innerHTML="Password atleast contain one uppercase letter"
     }
    else if(!/[a-z]/.test(upass1))
     {
         document.getElementById("ppass1").hidden=false;
         document.getElementById("ppass1").innerHTML="Password atleast contain one lowercase letter"
     }
  
     else if(!/[%&*@#$%]/.test(upass1))
         {
             document.getElementById("ppass1").hidden=false;
             document.getElementById("ppass1").innerHTML="Password atleast contain one Special charector"
         }
 
      else if(upass1.length < 6)
         {
             document.getElementById("ppass1").innerHTML="password atleast contain 6 charector" 
         }
         else{
             document.getElementById("ppass1").hidden=true; 
         }
         ButtonValidate();
     
 
 }

 const checkpass2=e=>
 {
     var pass2=e.target.value
 
     if(Values.Password != pass2)
     {
         document.getElementById("ppass2").hidden=false;
         document.getElementById("ppass2").innerHTML="password not matching";
     }
     else
     {
         document.getElementById("ppass2").hidden=true; 
     }
    
      ButtonValidate();
 }
 
 
 
 
 const ButtonValidate=()=>
 {
     //var mynumber=document.getElementById("number").value;
     var Repass=document.getElementById("pass1").value;
   

     if(Repass===Values.Password)
     {
     document.getElementById("bt").disabled=false;
     }
     else
     {
         document.getElementById("bt").disabled=true;
        
      
     }
 }  
   

   




      
   



    return(
        <div>
        <div div className={display ? "menu-inactive":"menu"}>
            <div className="menu-active">
            <nav class="nv nv-container-fluid" >
                <div className="dv-menu">
                <label className="h3"><b className="bld">S</b>tore<b className="bld">M</b>anagemen<b className="bld">t</b></label>
                </div>
                <div style={{marginLeft:"60%",marginTop:"1%"}}>
                <Link className="l2" to="/alog">SignIn</Link>
                  
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
            <div className="h4" style={{color:" rgb(11, 180, 180)" ,fontStyle:"italic"}}>Storemanagement</div>
           
                <div><div style={{display:"flex",marginLeft:"5%"}}> <div className="icons-menu"><PersonIcon/></div><input type="text" name="Userid" value={Values.Userid} className="form-control" placeholder="Enter your id" onChange={inputhandle} required />
                </div>
                <p id="myid" className="pp1" hidden></p>
               
                <div style={{display:"flex",marginLeft:"5%"}}> <div className="icons-menu"><LockIcon/></div><input type="text" name="Password" value={Values.Password} className="form-control" placeholder="Enter your new password" onKeyUpCapture={checkpass1} onChange={inputhandle} required />
                </div>
                <p id="ppass1" className="pp1" hidden></p>
                
                <div style={{display:"flex",marginLeft:"5%"}}> <div className="icons-menu"><LockIcon/></div><input type="text" name="pass1" id="pass1" className="form-control" placeholder="confirm password" onKeyUpCapture={checkpass2} onChange={inputhandle} required/>
                </div>
                <p id="ppass2" className="pp1" hidden></p>
                <br></br>
                </div>
               
            
               <button onClick={Mydata} id="bt" className="bt" >changepassword</button>
               
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
                            <li>Amazon Cares</li> 
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


