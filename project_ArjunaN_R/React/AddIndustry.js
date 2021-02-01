import React,{useState,useEffect,setState,props} from 'react';
import { Link } from 'react-router-dom';
import './industrydata.css';
import axios from 'axios';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import vali from './validationerror'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export default function IndusrtyLogin()
{
    
    var [Logindata,setLogindata] = useState({})

   
const [display,setdisplay]=useState(false)

var Uemail=sessionStorage.getItem('userId');

const handlel=()=>setdisplay(true);

const initialFieldsValues = {
    Userid:'',
    Name: '',
    Email: '',
    Mobile:'',
    Adress:'',
    Type:'industry',
    Password:'',
    
}



/*const uname=document.getElementById("name").value;
var uemail=document.getElementById("email").value;
var umob=document.getElementById("number").value;
var uad=document.getElementById("Add").value;
var udid=document.getElementById("idd").value;
var upass1=document.getElementById("pass1").value;
var upass2=document.getElementById("pass2").value;*/

var [values, setValues] = useState(initialFieldsValues)


const handleInputChange = (e) => {

    var {name, value} = e.target

    setValues({
        ...values,
        [name]: value
    })

    

}

    
    var num=/[0-9]/
    var special=/[^%&*#$%]/
    var chu=/[A-z]/
    var chl=/[a-z]/





const handleFormSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:54929/api/Login',{Userid:values.Userid,Name:values.Name,Email:values.Email,Password:values.Password, Address:values.Address,Mobile:values.Mobile,Type:values.Type})
    .then(JSON=>{
        if(JSON.data.Status == 'added')
        {
          console.log(JSON.data.Status);
           alert("successs");
        }
        else
        {
          alert("not succes");
        }  
      })
    }  


    const checkname=e=>
    {
       
       var  name=e.target.value
        if(!/[A-Za-z]{3}[A-Za-z0-9]/.test(name))
        {
            document.getElementById("pname").hidden=false;
            document.getElementById("pname").innerHTML="give proper name";
        }
    
        else if(name.length>50)
        {
            document.getElementById("pname").hidden=false;
            document.getElementById("pname").innerHTML="only 50 charrector are allow";
        }
        else
        {
            document.getElementById("pname").hidden=true;
        }
        ButtonValidate();
    }
    
    
    const checkemail=e=>
    {
        var num=/[0-9]/
       var  email=e.target.value
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
        {
            document.getElementById("pemail").hidden=false;
            document.getElementById("pemail").innerHTML="Invalid Email";
        }
    
        else if(email.length>50)
        {
            document.getElementById("pemail").hidden=false;
            document.getElementById("pemail").innerHTML="Invalid Email";
        }
        else
        {
            document.getElementById("pemail").hidden=true;
        }
        ButtonValidate();
    }
    
    const checknumber=e=>
    {
        var num=/[0-9]/
       var  numberr=e.target.value
       if(!num.test(numberr) || numberr.length<9  || numberr.length>11)
       {
        document.getElementById("pnum").hidden=false;
           document.getElementById("pnum").innerHTML="Invalid number"   
       }
       else
       {
        document.getElementById("pnum").hidden=true;    
       }
       ButtonValidate();
    }
    
    const checkAdress=e=>
    {
        var  Adrs=e.target.value
        if(Adrs==="")
       {
        document.getElementById("pAdd").hidden=false;
           document.getElementById("pAdd").innerHTML="Invalid Adress"   
       }
       else if(Adrs.length>250)
       {
        document.getElementById("pAdd").hidden=false;
        document.getElementById("pAdd").innerHTML="charrector not allow"   
       }
       else
       {
        document.getElementById("pAdd").hidden=true;    
       } 
       ButtonValidate();
    }
    
    const checkdealerid=e=>
    {
        var idd=e.target.value;
     


        if(!/^[a-zA-Z]+-[a-zA-Z0-9-]*$/.test(idd))
        {
            document.getElementById("pdid").hidden=false;
            document.getElementById("pdid").innerHTML="Invalid";
        }
        else if(idd.length>8)
        {
            document.getElementById("pdid").hidden=false;
            document.getElementById("pdid").innerHTML="Invalid";
        }
        else
        {
            document.getElementById("pdid").hidden=true; 
        }
        ButtonValidate();
       
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
            else if(upass1.length > 15)
            {
                document.getElementById("ppass1").innerHTML="maximum password charector only 15 " 
            }
            else{
                document.getElementById("ppass1").hidden=true; 
                document.getElementById("pass2").disabled=false;
            }
            ButtonValidate();
        
    
    }
    
    const checkpass2=e=>
    {
        var passs1=document.getElementById("pass1").value;
        var pass2=e.target.value
    
        if(passs1 != pass2)
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
    
    const checknum=e=>
    {
        var mynumber=document.getElementById("number").value;
    
    
        if(!/[6-9]{1}[0-9]{9}/.test(mynumber))
        {
            document.getElementById("pnum").hidden=false;
            document.getElementById("pnum").innerHTML="Enter valid number";
        }
        else if(mynumber.length>10)
        {
            document.getElementById("pnum").hidden=false;
            document.getElementById("pnum").innerHTML="length should be 10 digit";
        }
        else
        {
            document.getElementById("pnum").hidden=true; 
        }
           ButtonValidate();
    }
    
    
    const ButtonValidate=()=>
    {
        //var mynumber=document.getElementById("number").value;
        var Repass=document.getElementById("pass2").value;
      
        ///[6-9]{1}[0-9]{9}/.test(values.Mobile) && values.Mobile.length==10 && !/[0-9]/.test(values.Name) && values.name<=50 && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.Email) && values.Email<=50 && values.Adress<250 && /^[a-zA-Z]+-[a-zA-Z0-9-]*$/.test(values.Userid)
        if(/[6-9]{1}[0-9]{9}/.test(values.Mobile) && values.Mobile.length==10  && /[A-Za-z]{3}[A-Za-z0-9]/.test(values.Name) && values.Name.length <=50 && /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-]/.test(values.Email) && values.Email.length<=50 && values.Adress<250 && /^[a-zA-Z]+-[a-zA-Z0-9-]*$/.test(values.Userid) && values.Userid.length<=8 && values.Password==Repass)
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
            <div className={display ? 'menu-inactive':'menu-active'}>
            <nav class="nv nv-container-fluid" >
            <div className="dv-menu">
            <label className="h3"><b className="bld">A</b>dmin<b className="bld">H</b>ome</label>
            <div style={{marginLeft:"70%",display:"flex",fontSize:"17px",marginTop:"7%",fontFamily:"Time New Roman"}}><AccountCircleIcon/>Admin@gmail.com</div>
            <div className="dv-link-menu">
            <Link className="l1" to="/AddIndustry">CreacteIndustryId</Link>
                <Link className="l3" to="/FetchDealer">IndustryIdetails</Link>
                <Link className="l3" to="/alog">SignOut</Link>
            </div>
            </div>
            </nav> 


</div>

<div className="tablelog"  >
<div className="trr-heading">Generate Industrial Id </div>

            <form   onSubmit={handleFormSubmit}>

            <div style={{display:"flex"}}> <div className="icons-menu"><PersonIcon/></div><input  className="form-control" placeholder="Enter full name" id="name" name="Name"
            value={values.Name} onChange={handleInputChange} onKeyUpCapture={checkname} required/></div>
            <p id="pname" hidden></p>
            
            <div style={{display:"flex"}}> <div className="icons-menu"><MailOutlineIcon/></div>  <input  className="form-control" id="email" placeholder="Enter email" name="Email"
            value={values.Email} onChange={handleInputChange}  onKeyUpCapture={checkemail} required/></div>
            <p id="pemail" hidden></p>
            
            <div style={{display:"flex"}}> <div className="icons-menu"><PhoneIcon/></div><input  className="form-control" id="number"  placeholder="Enter mobile number" name="Mobile" onKeyUpCapture={checknumber}
            value={values.Mobile} onChange={handleInputChange} onKeyUpCapture={checknum} required/></div>
             

                <p id="pnum" hidden></p>
         
            <div style={{display:"flex"}}> <div className="icons-menu"><PersonIcon/></div>  <textarea  className="form-control" id="Add" placeholder="Enter adresss" name="Address"
            value={values.Address} onChange={handleInputChange} onKeyUpCapture={checkAdress}/></div>

            <p id="pAdd" hidden></p>
           
            <div style={{display:"flex"}}> <div className="icons-menu"><LockIcon/></div><input  className="form-control" id="idd" placeholder="Enter dealer id" name="Userid"
            value={values.Userid} onChange={handleInputChange} onKeyUpCapture={checkdealerid} required/></div>

            <p id="pdid" hidden></p>
            
            <div style={{display:"flex"}}> <div className="icons-menu"><LockIcon/></div>  <input   className="form-control"  id="pass1" placeholder="Set password" name="Password"
            value={values.Password} onChange={handleInputChange}  onKeyUpCapture={checkpass1} required /></div>
             <p id="ppass1" hidden></p>

            <div style={{display:"flex"}}> <div className="icons-menu"><LockIcon/></div><input  className="form-control"   id="pass2" placeholder="Re-Enter password again" required onChange={checkpass2} disabled/> </div>              
            <p id="ppass2" hidden></p>
            <input type="submit" id="bt" className="btn1" value="CREATE ID" disabled></input>
</form>
</div>
</div>

    )
}


       
   

