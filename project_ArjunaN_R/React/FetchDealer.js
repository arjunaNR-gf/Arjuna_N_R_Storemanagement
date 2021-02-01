import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './industrydata.css'
import firebaseDb from './firebasedata'
import axios from 'axios'
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import vali from './validationerror'
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Fetchdealerdetails()
{
    
    var [currentId, setCurrentId] = useState('')
  //  var [contactObjects,setContactObjects] = useState({})
  var [Logindata,setLogindata] = useState({})
  var Uemail=sessionStorage.getItem('userId');
    
    useEffect(()=>
    { 
      axios.get('http://localhost:54929/api/Login/Getdetails?type=industry')
      .then(Response=>{
        setLogindata({... Response.data} )
  
      })
      .catch(function(error)
      {
        console.log(error);
      })
    })


    
//remove area
const[datafetch,setdatafetch]=useState('');


    const mydelete=obj=>
    {
       axios.delete('http://localhost:54929/api/Login/Delete?Userid='+obj)
       .then(JSON=>{
        if(JSON.data.Status == 'delete')
        {
          
           alert("Delete successfull");
        }
        else
        {
          alert("not success");
        }
     }) 
    }

    



    //update area


    const [display,setdisplay]=useState(false)
    const[userdetails,setuserdetails]=useState(false)
    const initialFieldsValues = {
        Userid:'',
        Name: '',
        Email: '',
        Password:'',
        Mobile:'',
        Address:'',
        Type:'industry'

        
    }



var [values, setValues] = useState(initialFieldsValues)
    const onUpdate=cid=>
    {

       values.Userid=Logindata[cid].Userid
       values.Name=Logindata[cid].Name
       values.Address=Logindata[cid].Address
       values.Email=Logindata[cid].Email
       values.Password=Logindata[cid].Password
       values.Mobile=Logindata[cid].Mobile

        setdisplay(!display)
        setuserdetails(!userdetails)

    }

    const Removeupdate=()=>
    {
        setdisplay(!display)
        setuserdetails(!userdetails)
    }
          
    
    
  const handleInputChange= (e) => {
    var {name, value} = e.target
    setValues({
        ...values,
        [name]: value
    })
  }
  
  


  const handleFormSubmit = (e) =>{
    e.preventDefault();
    axios.put('http://localhost:54929/api/Login/Put?Userid='+values.Userid,values)
    .then(Response=>
        {
            if(Response.data.Status="updated")
            {
                alert("Update successful")
            }
            else
            {
                alert("Update Unsuccessfull")
            }
        })

    
  }

    
  //validation area

  var num=/[0-9]/
  var special=/[^%&*#$%]/
  var chu=/[A-z]/
  var chl=/[a-z]/
    
  
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
      }         ButtonValidate();
  }
  
  
  const ButtonValidate=()=>
  {
      ///[6-9]{1}[0-9]{9}/.test(values.Mobile) && values.Mobile.length==10 && !/[0-9]/.test(values.Name) && values.name<=50 && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.Email) && values.Email<=50 && values.Adress<250 && /^[a-zA-Z]+-[a-zA-Z0-9-]*$/.test(values.Userid)
      if(/[6-9]{1}[0-9]{9}/.test(values.Mobile) && values.Mobile.length==10  && /[A-Za-z]{3}[A-Za-z0-9]/.test(values.Name) && values.Name.length <=50 && /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-]/.test(values.Email) && values.Email.length<=50)
      {
      document.getElementById("bt").disabled=false;
      }
      else
      {
          document.getElementById("bt").disabled=true;
         
       
      }
  }

    
        return (

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


        
<table border="1"  className={userdetails?"table1":"table"}>
                <tr className="tr-heading">
      <th scope="col">DEALER NAME</th>
      <th scope="col">DEALER EMAIL</th>
      <th scope="col">CONTACT NUMBER</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">DEALER ID</th>
      <th scope="col">STATUS</th>
     
      
      
    </tr>
                   
                <tbody>
                    {
                        Object.keys(Logindata).map(id=>{
                            return <tr key={id}>
                                <td>{Logindata[id].Name}</td>
                                <td>{Logindata[id].Email}</td>
                                <td>{Logindata[id].Mobile}</td>
                                <td>{Logindata[id].Address}</td>
                                <td>{Logindata[id].Userid}</td>
                                    
                              <td>  <a   onClick={() => {onUpdate([id])}}><i><EditIcon className="cls-delete" /></i>
                                    </a>
                                    <a   onClick={() => {mydelete(Logindata[id].Userid)}}><i><DeleteIcon className="cls-delete" /></i>
                                    </a>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
                </table>



<div className={display?"tablelog":"tab1"} >

<div className={"tr-heading"} style={{display:"flex"}}><h6 style={{marginLeft:"32%",fontFamily:"Time New Roman"}}>UPDATE REGISTRATION</h6> <button className="close" style={{marginLeft:"15%",fontFamily:"Time New Roman"}} onClick={Removeupdate}><CloseIcon/></button></div>



<form  autoComplete="off"  onSubmit={handleFormSubmit}>
<div style={{display:"flex"}}> <div className="icons-menu"><PersonIcon/></div><input  className="form-control" placeholder="Enter store name" id="name" name="Name"
            value={values.Name} onChange={handleInputChange} onKeyUpCapture={checkname} required/></div>
            <p id="pname" hidden></p>
            
            <div style={{display:"flex"}}> <div className="icons-menu"><MailOutlineIcon/></div>  <input  className="form-control" id="email" placeholder="Enter email" name="Email"
            value={values.Email} onChange={handleInputChange}  onKeyUpCapture={checkemail} required/></div>
            <p id="pemail" hidden></p>
            
            <div style={{display:"flex"}}> <div className="icons-menu"><PhoneIcon/></div><input  className="form-control" id="number"  placeholder="Enter mobile number" name="Mobile" 
            value={values.Mobile} onChange={handleInputChange} onKeyUpCapture={checknum} required/></div>
             

                <p id="pnum" hidden></p>
         
            <div style={{display:"flex"}}> <div className="icons-menu"><PersonIcon/></div>  <input  className="form-control" id="Add" placeholder="Enter adresss" name="Address"
            value={values.Address} onChange={handleInputChange} onKeyUpCapture={checkAdress}/></div>

            <p id="pAdd" hidden></p>
           
            <div style={{display:"flex"}}> <div className="icons-menu"><LockIcon/></div><input  className="form-control" id="idd" readOnly placeholder="Enter dealer id" name="Userid"
            value={values.Userid} onChange={handleInputChange} onKeyUpCapture={checkdealerid} required/></div>
            <p id="pdid" hidden></p>
            
            <input type="submit" id="bt" className="btn1" value="UPDATE" ></input>

</form>

</div>



            </div>
        
   
             
        );
    }

