import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './industrydata.css'
import RefreshIcon from '@material-ui/icons/Refresh';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Profile } from './Profile';


export default function  DmakeOrder()
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
  axios.get('http://localhost:54929/api/Myorder/Getorder?TUserid='+Uid)
  .then(Response=>{
    setContactObjects({... Response.data} )
    })

  })
      
const DealerProduct = {
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

const addOrEdit = e => {
    axios.post('http://localhost:54929/api/Myorder',values)
    .then(Response=>
        {
            if(Response.data.Status=="added")
            {
                alert("success")
            }
            else
            {
                alert("not success")
            }
        })

       
  }
  
  const handleFormSubmit = (e) =>{
    e.preventDefault();
    addOrEdit(values);    
  }



const handlel=id=>{
  
    values.TUserid=Uid;
    values.Payment=0;
document.getElementById("additem").hidden=false;
}
const remove=id=>{
    setValues({
        ...DealerProduct
    })
   document.getElementById("additem").hidden=true;
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

var myretForm =()=>
{
   
 
}


//validation part
//_____________________
  
const checkname=e=>
{
    var idd=e.target.value;

    if(!/[A-Za-z]{2}[A-Za-z0-9]/.test(idd))
    {
        document.getElementById("pname").hidden=false;
        document.getElementById("pname").innerHTML="Name atleast conatin three letter";
    }
    else if(idd.length>50)
    {
        document.getElementById("pname").hidden=false;
        document.getElementById("pname").innerHTML="Only 50 charrector allowed";
    }
    else
    {
        document.getElementById("pname").hidden=true; 
    }
    Buttonvalidation();   
}

const checkid1=e=>
{
  var idd=e.target.value;

    if(!/^[a-zA-Z]+-[a-zA-Z0-9-]*$/.test(idd))
    {
        document.getElementById("pid1").hidden=false;
        document.getElementById("pid1").innerHTML="Invalid value";
    }
    else if(idd.length>10)
    {
        document.getElementById("pid1").hidden=false;
        document.getElementById("pid1").innerHTML="More than 10 charrector not allow";   
    }
    else
    {
        document.getElementById("pid1").hidden=true; 
    }   
    Buttonvalidation();

}
const checkid2=e=>
{
  var idd=e.target.value;

    if(!/^[a-zA-Z]+-[a-zA-Z0-9-]*$/.test(idd))
    {
        document.getElementById("pid2").hidden=false;
        document.getElementById("pid2").innerHTML="Invalid type";
    }
    else if(idd.length>10)
    {
        document.getElementById("pid2").hidden=false;
        document.getElementById("pid2").innerHTML="More than 10 charrector not allow";   
    }
    else
    {
        document.getElementById("pqt").hidden=true; 
    }   
    Buttonvalidation();

}

const checkpname=e=>
{
  var idd=e.target.value;

    if(/[0-9]/.test(idd))
    {
        document.getElementById("pname").hidden=false;
        document.getElementById("pname").innerHTML="Number are not allowed";
    }
    else if(idd.length>50)
    {
        document.getElementById("pname").hidden=false;
        document.getElementById("pname").innerHTML="Only 50 charrector allowed";
    }


    else
    {
        document.getElementById("pname").hidden=true; 
    }   

    Buttonvalidation();

}


const checkquality=e=>
{
  var idd=e.target.value;

    if(!/[0-9]{3}[%]{1}/.test(idd))
    {
        document.getElementById("pql").hidden=false;
        document.getElementById("pql").innerHTML="Invalid value format should be xxx%";
    }
   else if(idd.length>4)
    {
        document.getElementById("pql").hidden=false;
        document.getElementById("pql").innerHTML="Invalid value format should be xxx%";
    }
    else
    {
        document.getElementById("pql").hidden=true; 
    }   
    Buttonvalidation();

}

const checkquantity=e=>
{
  var idd=e.target.value;

    if(!/[0-9]/.test(idd))
    {
        document.getElementById("pqt").hidden=false;
        document.getElementById("pqt").innerHTML="Invalid value";
    }
    else if(idd>200000)
    {
        document.getElementById("pqt").hidden=false;
        document.getElementById("pqt").innerHTML="more than 200000 is not allow";
    }
    else
    {
        document.getElementById("pqt").hidden=true; 
    }   

    Buttonvalidation();
}

var cou_num1=0;
  const checkDate=e=>
  {
    var num=sessionStorage.getItem("Mdate");
    if(num != null)
    {
    sessionStorage.setItem("Mdate",0);
    }
    
    var idd=e.target.value;
    var datefun=new Date();
     var dt=datefun.getDate();
     var mm=datefun.getMonth();
     var yy=datefun.getFullYear();
     var curentdate=dt+'-'+mm+'-'+yy;
    var udt=idd[0];
   var umm=idd[2];
   var uyy=idd[4]


      if(idd[1] != '-')
      {
          udt =udt+idd[1]; 
          umm=idd[3];
          if(idd[4] != '-')
          {
              umm=umm+idd[4];
              uyy=idd[6]+idd[7]+idd[8]+idd[9];
              
          }
          else
          {
           uyy=idd[5]+idd[6]+idd[7]+idd[8]
          

          }
      }
      else
      {
        
        umm=idd[2];
        if(idd[3] != '-')
        {
            umm=umm+idd[3];
            uyy=idd[5]+idd[6]+idd[7]+idd[8]
            
        }
        else
        {
          
         uyy=idd[4]+idd[5]+idd[6]+idd[7]
      

        }

      }

     
      
     
     
     
    if(!/[0-9]+-[0-9]+-[0-9]{4}/.test(idd))
    {
        document.getElementById("upmdt").hidden=false;
        document.getElementById("upmdt").innerHTML="Invalid date format";
    }
   
    else if(udt>31)
    {
      document.getElementById("upmdt").hidden=false;
      document.getElementById("upmdt").innerHTML="Invalid date";
 
    }
    else if(umm>12)
    {
      document.getElementById("upmdt").hidden=false;
      document.getElementById("upmdt").innerHTML="Invalid month";
 
    }
    else if(uyy>yy)
    {
      document.getElementById("upmdt").hidden=false;
      document.getElementById("upmdt").innerHTML="Invalid Year";
 
    }
    else if(uyy<2015)
    {
      document.getElementById("upmdt").hidden=false;
      document.getElementById("upmdt").innerHTML="bellow 2015 product are not allowed";
 
    }
    else if(umm==4 || umm==6  || umm==9 || umm==11)
    {
        if(udt>30)
        {
            document.getElementById("upmdt").hidden=false;
            document.getElementById("upmdt").innerHTML="Invalid date";
        }

    }
    else if(umm==2)
    {
      
        if(udt>29)
        {
            document.getElementById("upmdt").hidden=false;
            document.getElementById("upmdt").innerHTML="Invalid date";
      
        }
        else
        {
           var rem=uyy%4
           
           if(rem==0)
           {
               if(udt>29)
               {

                document.getElementById("upmdt").hidden=false;
                document.getElementById("upmdt").innerHTML="Invalid date";
               }
               else
               {
                   document.getElementById("upmdt").hidden=true; 
                   cou_num1=1;   
                   sessionStorage.setItem("Mdate",cou_num1) 
               }

               
           }
           else
               {
                   if(udt>28)
                   {
                    document.getElementById("upmdt").hidden=false;
                    document.getElementById("upmdt").innerHTML="Invalid date";
                   
                   }
                   else
                   {
                       document.getElementById("upmdt").hidden=true; 
                       cou_num1=1;
                       sessionStorage.setItem("Mdate",cou_num1)   
                   }

               }
        }
    }
 
    else if(idd=="")
    {
        document.getElementById("upmdt").hidden=true; 
    }
    else if(/[0-9]+-[0-9]+-[0-9]{4}/.test(idd))
    {
        document.getElementById("upmdt").hidden=true; 
        cou_num1=1; 
        sessionStorage.setItem("Mdate",cou_num1)   
    }
 
   Buttonvalidation();
}



const Buttonvalidation=()=>
{
    if(/[0-9]{3}[%]{1}/.test(values.Pquality) && values.Pquality.length<=4 && /[A-Za-z]{2}[A-Za-z0-9]/.test(values.Pname) && values.Pname.length<50  && /[0-9]/.test(values.Pcount)  && values.Pcount<=200000  && sessionStorage.getItem("Mdate")==1)
    {
         document.getElementById("bt").disabled=false;
    }
    else
    {
        document.getElementById("bt").disabled=true;
    }
}




    return(
        <div className="bd">
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

<div>

                
    </div>



<div>  <table border="1" class="table">
  <thead>
    <tr className="tr-heading">
      <th scope="col">INDUSTRY ID</th>
      <th scope="col">PRODUCT NAME</th>
      <th scope="col">QUANTITY</th>
      <th scope="col">REQUIRED NUMBER</th>
      <th scope="col">REQUIRE DATE</th>
      <th scope="col">STATUS</th>
      
      
    </tr>
  </thead>
  <tbody>
      
 
                 {
                        Object.keys(contactObjects).map(id=>{

                            return <tr key={id}>
                               
                                <td>{contactObjects[id].Userid}</td>
                                <td>{contactObjects[id].Pname}</td>
                                <td>{contactObjects[id].Pquality}</td>
                                <td>{contactObjects[id].Pcount}</td>
                                <td>{contactObjects[id].Date}</td>
                                
                                 <td>
                                <a   onClick={() => {mydelete(contactObjects[id].Oid)}}><i><DeleteIcon className="cls-delete" /></i>
                                </a>
                                </td>
                               
                            </tr>
                        })
                    }
                </tbody>
     

      
</table>


    </div>

    <div className="mybtn"><button className="btn" onClick={handlel}>MakeOrder</button></div>

    <div  className="tabb1" id="additem" hidden>
<div className="tr-heading" style={{display:"flex"}}><h6 style={{marginLeft:"1%",fontFamily:"Time New Roman"}}>MAKEORDER</h6> <button className="close" style={{marginLeft:"89%"}} onClick={remove}><CloseIcon/></button></div>
<form  onSubmit={handleFormSubmit}>
          <div className="input-grid">
          <div className="grd-input"><input type="text" name="Userid"   value={values.Userid}   placeholder="ENTER INDUSTRY ID" onChange={handlelInput} onKeyUpCapture={checkid1} required/>
        <p id="pid1"></p>
        </div>

        <div className="grd-input"><input type="text" name="TUserid" readOnly  value={values.TUserid}      placeholder="ENETER DEALER ID" onChange={handlelInput} onKeyUpCapture={checkid2}  required/>
        <p id="pid2"></p>
        </div>
          <div className="grd-input"><input type="text" name="Pname"     value={values.Pname}      placeholder="PRODUCT NAME" onChange={handlelInput} onKeyUpCapture={checkname}  required/>
        <p id="pname"></p>
        </div>
       
       
        <div className="grd-input"><input type="text" name="Pcount"     value={values.Pcount}      placeholder="ENETER PRODUCT QUANTITY" onChange={handlelInput} onKeyUpCapture={checkquantity}  required/>
        <p id="pqt"></p>
        </div>

        <div className="grd-input"><input type="text" name="Pquality"     value={values.Pquality}   placeholder="ENTER PRODUCT QUALITY" onChange={handlelInput} onKeyUpCapture={checkquality} required/>
        <p id="pql"></p>
        </div>

        <div className="grd-input"><input type="text" name="Date"   value={values.Date}      placeholder="ENETER REQUIRED DATE" onChange={handlelInput} onKeyUpCapture={checkDate}  required/>
        <p id="upmdt"></p>
        </div>
        
        </div>
        
        <button  className="btn4" id="bt" onClick={addOrEdit} disabled>ADD</button>
        

</form>

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