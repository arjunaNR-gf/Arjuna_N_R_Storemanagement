
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './industrydata.css';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import { Profile } from './Profile';

export default function  Payment()
{
    const [display,setdisplay]=useState(false)
    const [disp,setdisp]=useState(false)
    const handle=()=>setdisplay(true);
   
    const handlecancel=()=>setdisp(false);
    var [contactObjects,setContactObjects] = useState({})


    const [Profiledisplay,setProfiledisplay]=useState(false)
   const myprofile=()=>setProfiledisplay(!Profiledisplay);

    const Uemail=sessionStorage.getItem('userEmail');
    const Uid=sessionStorage.getItem('userId');
 

    useEffect(()=>{ 
  axios.get('http://localhost:54929/api/Myorder/Get?Userid='+Uid)
  .then(Response=>{
    setContactObjects({... Response.data} )
    })

  })
      
const DealerProduct = {
    Oid:'',
    CompanyName:'',
    Userid:'',
    TUserid:'',
    Pname:'',
    Pcount:'',
    Pquality:'',
    Date:'',
    Payment:'',


  
}

var [values, setValues] =useState(DealerProduct);




const handlelInput= (e) => {
  var {name, value} = e.target
  setValues({
      ...values,
      [name]: value
  })
}

const addInfo =e=> {

    alert("hi");
  axios.post('http://localhost:54929/api/Myorder',{CompanyName:values.CompanyName,Userid:values.Userid,TUserid:values.TUserid,Pname:values.Pname,Pcount:values.Pcount,Pquality:values.Pquality,Date:values.Date,Payment:values.Payment})
  .then(Response=>{
    if(Response.data.Status == 'added')
    {
      
       alert("successfull");
    }
    else
    {
      console.log("not success");
    }
 }) 

}

const handlel=id=>{

    values.CompanyName=contactObjects[id].CompanyName
    values.Pname=contactObjects[id].Pname
    values.Userid=contactObjects[id].TUserid
    values.TUserid=contactObjects[id].Userid
    values.Pcount=contactObjects[id].Pcount
   
setdisp(true)
}



const mydelete=id=>
  {
   
     axios.delete('http://localhost:54929/api/Myorder/Delete?Oid='+id)
     .then(Response=>{
         
      if(Response.data.Status == 'delete')
      {
        
         alert("Delete successfull");
      }
      else
      {
        alert("not success");
      }
   }) 
  }

  const Storepay=id=>
  {
   alert("you are paying"+contactObjects[id].Payment+"rs")
     axios.delete('http://localhost:54929/api/Myorder/Delete?Oid='+contactObjects[id].Oid)
     .then(Response=>{
         
      if(Response.data.Status == 'delete')
      {
        
         alert("Payment successfull!!");
      }
      else
      {
        alert("not success");
      }
   }) 
  }

var myretForm =()=>
{

    setValues({
        ...DealerProduct
    })
}



const checkid1=e=>
{
    var idd=e.target.value;

    if(!/^[a-zA-Z]+-[a-zA-Z0-9-]*$/.test(idd))
    {
        document.getElementById("pid1").hidden=false;
        document.getElementById("pid1").innerHTML="Invalid format of id";
    }
    else
    {
        document.getElementById("pid1").hidden=true; 
    }
   
}
  
const checkid2=e=>
{
    var idd=e.target.value;

    if(!/^[a-zA-Z]+-[a-zA-Z0-9-]*$/.test(idd))
    {
        document.getElementById("pid2").hidden=false;
        document.getElementById("pid2").innerHTML="Invalid format of id";
    }
    else
    {
        document.getElementById("pid2").hidden=true; 
    }
   
}
const checkid3=e=>
{
    var idd=e.target.value;

    if(!/^[a-zA-Z]+-[a-zA-Z0-9-]*$/.test(idd))
    {
        document.getElementById("pid3").hidden=false;
        document.getElementById("pid3").innerHTML="Invalid format of id";
    }
    else
    {
        document.getElementById("pid3").hidden=true; 
    }
   
}
  
const checkname=e=>
{
    var idd=e.target.value;

    if(/[0-9]/.test(idd))
    {
        document.getElementById("cname").hidden=false;
        document.getElementById("cname").innerHTML="Number are not allowed";
    }
    else
    {
        document.getElementById("cname").hidden=true; 
    }   
}

const checkpname=e=>
{
  var idd=e.target.value;

    if(/[0-9]/.test(idd))
    {
        document.getElementById("pname").hidden=false;
        document.getElementById("pname").innerHTML="Number are not allowed";
    }
    else
    {
        document.getElementById("pname").hidden=true; 
    }   

}


const checkquality=e=>
{
  var idd=e.target.value;

    if(!/[0-9]/.test(idd))
    {
        document.getElementById("pqt").hidden=false;
        document.getElementById("pqt").innerHTML="Invalid type";
    }
    else
    {
        document.getElementById("pqt").hidden=true; 
    }   

}

const checkquantity=e=>
{
  var idd=e.target.value;

    if(!/[0-9]/.test(idd))
    {
        document.getElementById("pql").hidden=false;
        document.getElementById("pql").innerHTML="Invalid type";
    }
    else
    {
        document.getElementById("pql").hidden=true; 
    }   

}

const checkIid=e=>
{
    var idd=e.target.value;

    if(!/^[a-zA-Z]+-[a-zA-Z0-9-]*$/.test(idd))
    {
        document.getElementById("Iid").hidden=false;
        document.getElementById("Iid").innerHTML="Invalid format of id";
    }
    else
    {
        document.getElementById("Iid").hidden=true; 
    }
   
}


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
                <Link className="l3" to="/payment">Payment</Link>
                <Link className="l3" to="/alog">SignOut</Link>
                </div>
                </div>
                </nav> 
                </div>
                <table border="1" class="table">
  <thead>
    <tr className="tr-heading">
      <th scope="col">INDUSTRY ID</th>
      <th scope="col">PRODUCT NAME</th>
      <th scope="col">QUANTITY</th>
      <th scope="col"> TOTAL ITEM</th>
      <th scope="col">SHIPPING DATE</th>
      <th scope="col">AMOUNT</th>
      <th scope="col">STATUS</th>
      
      
    </tr>
  </thead>
  <tbody>
      
 
                 {
                        Object.keys(contactObjects).map(id=>{

                            return <tr key={id}>
                                <td>{contactObjects[id].TUserid}</td>
                                <td>{contactObjects[id].Pname}</td>
                                <td>{contactObjects[id].Pquality}</td>
                                <td>{contactObjects[id].Pcount}</td>
                                <td>{contactObjects[id].Date}</td>
                                <td>{contactObjects[id].Payment}</td>
                                
                                <td style={{display:"flex"}}><button className="btn" onClick={()=>Storepay(id)}>Pay</button>
                                <a   onClick={() => {mydelete(contactObjects[id].Oid)}}><i><DeleteIcon className="cls-delete" /></i>
                                </a>
                                </td>
                               
                            </tr>
                        })
                    }
                </tbody>

     

      
</table>
<div>
 <div className={disp?"tabb1":"tab1"}>
<div className="tr-heading" style={{display:"flex"}}><h6 style={{marginLeft:"1%",fontFamily:"Time New Roman"}}>RecieveOrder</h6><button className="close" style={{marginLeft:"90%"}} onClick={handlecancel}><CloseIcon/></button></div>
          <div className="input-grid">
          <div className="grd-input"><input type="text" name="Userid" readOnly   value={values.Userid}   placeholder="ENTER DEALER ID" onChange={handlelInput} onKeyUpCapture={checkid1} required/>
        <p id="pid1"></p>
        </div>

        <div className="grd-input"><input type="text" name="TUserid" readOnly  value={values.TUserid}      placeholder="ENETER INDUSTRY ID" onChange={handlelInput} onKeyUpCapture={checkid2}  required/>
        <p id="pid2"></p>
        </div>
          <div className="grd-input"><input type="text" name="Pname"     value={values.Pname}      placeholder="PRODUCT NAME" onChange={handlelInput} onKeyUpCapture={checkname}  required/>
        <p id="cname"></p>
        </div>
       
       
        <div className="grd-input"><input type="text" name="Pcount"     value={values.Pcount}      placeholder="ENETER PRODUCT QUANTITY" onChange={handlelInput} onKeyUpCapture={checkquantity}  required/>
        <p id="pname"></p>
        </div>

        <div className="grd-input"><input type="text" name="Pquality"     value={values.Pquality}   placeholder="ENTER PRODUCT QUALITY" onChange={handlelInput} onKeyUpCapture={checkquantity} required/>
        <p id="pql"></p>
        </div>
       

        <div className="grd-input"><input type="DATE" name="Date"   value={values.Date}      placeholder="ENETER SHIPPING DATE" onChange={handlelInput}required/>
        <p id="pqt"></p>
        </div>
        <div className="grd-input"><input type="text" name="Payment"     value={values.Payment}   placeholder="ENTER TOTAL AMOUNT" onChange={handlelInput} onKeyUpCapture={checkquantity} required/>
        <p id="pql"></p>
        </div>

        </div>
        <button  className="btn4" OnClick={addInfo}>CONFIRM</button>
        



</div>

</div>
<div className={Profiledisplay?"profile-home":"pp"} id="my-propile">
                <div class="pageprofile">
                <div style={{width:"100%",height:"auto",backgroundColor:"teal"}}><button className="close" style={{marginLeft:"9%"}} onClick={myprofile}><CloseIcon/></button></div>
               <br></br>
               <Profile/>
               </div>
            </div>
</div>
        
    )
}
