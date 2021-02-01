import React,{useState,useEffect,props} from 'react';
import { BrowserRouter as  Switch,Route,Link,Redirect } from "react-router-dom";
import "./Ilog.css";
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import firebaseDb from './firebasedata'
import { Router } from '@material-ui/icons';
import Inhome from "./Indusrtydata";

 



export default function Login()
{
    

   var [name,setname]=useState("");



  

    var [contactObjects,setContactObjects] = useState({})

    
useEffect(() => {
    firebaseDb.child('INDUTRYLOG').on('value', snapshot =>{
        if(snapshot.val()!=null)
        setContactObjects({
            ...snapshot.val()
            
        })
        
    })
},[])

var  Iid=[50];
var count=0;
Object.keys(contactObjects).map(id=>{
   Iid[count]= contactObjects[id].Did;
   count++;
   
});
 
var pass=[50];
var count=0;
Object.keys(contactObjects).map(id=>{
    pass[count]= contactObjects[id].password;
    count++;
    
 });

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

    if(!/^[a-zA-Z]+-[a-zA-Z0-9-]*$/.test(emailuser))
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
        else{
            document.getElementById("ppass").hidden=true; 
        }
    

}




const [display,setdisplay]=useState(false);

var count=0;    
    const Mydata=()=>
    {
        for(var i=0;i<Iid.length;i++)
        {
            if(Iid[i]==Values.Iid)
            {
                for(var j=0;j<Iid.length;j++)
                {
            
                        if(Iid[i]==Values.Iid && pass[j]==Values.pass )
                        {
                        
                            count++;
                            if(count>0)
                            {
                                setdisplay(true);
                                document.getElementById("ppass").hidden=true;
                                document.getElementById("ppass").innerHTML="password not matching"
                            }
                        
                        }
                        else
                        {
                           
                            document.getElementById("ppass").hidden=false;
                            document.getElementById("ppass").innerHTML="password not matching"
                        }
                }
                
                document.getElementById("pemail").hidden=true;
                document.getElementById("pemail").innerHTML="Invalid ID";
            
            }
        
        else
        {
                            
                            document.getElementById("pemail").hidden=false;
                            document.getElementById("pemail").innerHTML="Invalid ID";
                            document.getElementById("ppass").hidden=false;
                            document.getElementById("ppass").innerHTML="password not matching";
        }
    }
          
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
                <div className="dvv-link-menu">
                <Link className="l2" to="/alog">Admin</Link>
                <Link className="l3" to="/Ilogin">Industry</Link>
                <Link className="l3" to="/DLogin">Dealer</Link>
                
                
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
            </div>
            <div className="logdv2">
            <div className="login-outlayer">
            <div className="h4">SignIn</div>
           
                <div style={{display:"flex",marginLeft:"5%"}}> <div className="icons-menu"><PersonIcon/></div><input type="text" name="Iid" value={Values.Iid} className="form-control" placeholder="ENTER INDUSTIAL ID" required onKeyUpCapture={checkemail} onChange={inputhandle} required></input></div>
                <p id="pemail" className="pp1" hidden></p>
                <br></br>
            
                <div style={{display:"flex",marginLeft:"5%"}}> <div className="icons-menu"><LockIcon/></div>  <input type="text" name="pass" value={Values.pass} className="form-control" placeholder="ENTER PASSWORD" required  onChange={checkpass} onChange={inputhandle} required></input></div>
                <p id="ppass" className="pp1" hidden></p>
               
               {/*<Link to="/Industrydata" onClick={handle}><button className="bt"  >Login</button></Link>*/}

               <button onClick={Mydata} className="bt">Login</button>
              
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

<div className={display ?'menu-active':'menu-inactive'}>
<nav class="nv nv-container-fluid" >
<div className="dv-menu">
<label className="h3"><b className="bld">I</b>ndustry<b className="bld">H</b>ome</label>

<div className="dvvv-link-menu">
<Link className="l1" to="/mystock">MyStock</Link>
<Link className="l3" to="/myorder">MyOrder</Link>
<Link className="l3" to="/userlog">MyuserId</Link>
<Link className="l3" to="/Userdetails">MyUserDeatails</Link>
<Link className="l3" onClick={unchange}>SignOut</Link>
</div>
</div>
</nav> 


</div>
</div>
    )
}


