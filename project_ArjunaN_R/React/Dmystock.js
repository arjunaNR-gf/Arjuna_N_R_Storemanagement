import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './industrydata.css'
import RefreshIcon from '@material-ui/icons/Refresh';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Profile } from './Profile';


export default function DMystock()
{


    const [display,setdisplay]=useState(false);

    const [contactObjects,setContactObjects] = useState({})
    
    const [Profiledisplay,setProfiledisplay]=useState(false)
   const myprofile=()=>setProfiledisplay(!Profiledisplay);
    
    const Uemail=sessionStorage.getItem('userEmail');
    const Uid=sessionStorage.getItem('userId');
    useEffect(()=>
    { 
      axios.get('http://localhost:54929/api/Mystock/Get?Userid='+Uid)
      .then(Response=>{
        setContactObjects({... Response.data} )
        })
    
      })
    
           
          
    const DealerProduct = {
      Userid:Uid,
      Pname:'',
      Pcount:'',
      Pquality:'',
      Edate:'',
      Mdate:'',
      Price:'',
    }
    
    var [values, setValues] =useState(DealerProduct);
    var count=0;
    
    
    
    const handlelInput= (e) => {
      var {name, value} = e.target
      setValues({
          ...values,
          [name]: value
      })
    }
    
    const addOrEdit = (e) => {
        e.preventDefault();
      axios.post('http://localhost:54929/api/Mystock/',values)
    }
    
    const handleFormSubmit = e =>{
      e.preventDefault();
      addOrEdit(values);    
    }
    
    
    //remove items
    const RemoveProduct = {
     
      PID:'',
    }
    
    
    var [valuesRemove, setValuesvaluesRemove] =useState(RemoveProduct);
    const RemoveInput= (e) => {
      var {name, value} = e.target
      setValuesvaluesRemove({
          ...valuesRemove,
          [name]: value
      })
    }
    const updatemyretForm=()=>
    {
      setValues({
        ...DealerProduct
      })
    }
    
    
    
    
      const mydelete=id=>
      {
       
         axios.delete('http://localhost:54929/api/Mystock/Delete?PId='+id)
         .then(Response=>{
          if(Response.data.Status == 'deleted')
          {
            
             alert("Delete successfull");
          }
          else
          {
            alert("not success");
          }
       }) 
      }
    
       //validation part
       var PId=0;
       
    
        var remove=()=>
        {
            document.getElementById("updateitem").hidden=true;
            document.getElementById("additem").hidden=true;
            
    
        }
    
        var additem=()=>{
    
            document.getElementById("updateitem").hidden=true;
            document.getElementById("additem").hidden=false;
        }
    
        const handle=()=>setdisplay(true);
    
    
        //additeem validation
const checkpname=e=>
{
  var idd=e.target.value;


    if(!/[A-Za-z]{2}[A-Za-z0-9]/.test(idd))
    {
        document.getElementById("apname").hidden=false;
        document.getElementById("apname").innerHTML="Name should have atlest 3 charrector";
      
    }
    else if(idd.length>50)
    {
        document.getElementById("apname").hidden=false;
        document.getElementById("apname").innerHTML="only 50 charrector allowed";
       
    }
    else if(idd==" ")
    {
        document.getElementById("apname").hidden=true; 
      
    }
    else 
    {
        document.getElementById("apname").hidden=true; 
        
    } 
    ButtonValidate();  

}


const checkquality=e=>
{
  var idd=e.target.value;
  if(idd==' ')
  {
      document.getElementById("apql").hidden=true;  
  }
  else if(!/[0-9]{3}[%]{1}/.test(idd))
    {
        document.getElementById("apql").hidden=false;
        document.getElementById("apql").innerHTML="Format should be XXX%";
        
    }
    else if(idd.length>4)
    {
        document.getElementById("apql").hidden=false;
        document.getElementById("apql").innerHTML="Format should be XXX%";
        
    }

    else
    {
        document.getElementById("apql").hidden=true; 
        
    }   
    ButtonValidate();

}

const checkquantity=e=>
{
  var idd=e.target.value;
  
  if(!/[0-9]/.test(idd))
  {
      document.getElementById("apqt").hidden=false;
      document.getElementById("apqt").innerHTML="Invalid type";
  }
  else if(idd>200000)
  {
    document.getElementById("apqt").hidden=false;
    document.getElementById("apqt").innerHTML="more than 200000 is not allowed"; 
  }
  else if(idd==" ")
  {
      document.getElementById("pqt").hidden=true; 
  }
  
    else
    {
        document.getElementById("apqt").hidden=true; 
     
    } 
    ButtonValidate();  

}

const checkPrice=e=>
{
    var idd=e.target.value;

    if(idd=='')
    {
        document.getElementById("aprice").hidden=true; 
        
    }
    else if(idd>10000000)
    {
        document.getElementById("aprice").hidden=false;
        document.getElementById("aprice").innerHTML="Price values not allow";
       
    }
    else if(!/[0-9]/.test(idd))
    {
        document.getElementById("aprice").hidden=false;
        document.getElementById("aprice").innerHTML="Invalid Price";
       
    }
    else
    {
        document.getElementById("aprice").hidden=true; 
        
    }
    ButtonValidate();
   
}
var cou_num1=0;
  const checkMDate=e=>
  {
      var num=sessionStorage.getItem("Mdate")
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
          document.getElementById("mdate").hidden=false;
          document.getElementById("mdate").innerHTML="Invalid date format";
      }
     
      else if(udt>31)
      {
        document.getElementById("mdate").hidden=false;
        document.getElementById("mdate").innerHTML="Invalid date";
   
      }
      else if(umm>12)
      {
        document.getElementById("mdate").hidden=false;
        document.getElementById("mdate").innerHTML="Invalid month";
   
      }
      else if(uyy>yy)
      {
        document.getElementById("mdate").hidden=false;
        document.getElementById("mdate").innerHTML="Invalid Year";
   
      }
      else if(uyy<2015)
      {
        document.getElementById("mdate").hidden=false;
        document.getElementById("mdate").innerHTML="bellow 2015 product are not allowed";
   
      }
      else if(umm==4 || umm==6  || umm==9 || umm==11)
      {
          if(udt>30)
          {
              document.getElementById("mdate").hidden=false;
              document.getElementById("mdate").innerHTML="Invalid date";
          }
  
      }
      else if(umm==2)
      {
        
          if(udt>29)
          {
              document.getElementById("mdate").hidden=false;
              document.getElementById("mdate").innerHTML="Invalid date";
        
          }
          else
          {
             var rem=uyy%4
             
             if(rem==0)
             {
                 if(udt>29)
                 {
  
                  document.getElementById("mdate").hidden=false;
                  document.getElementById("mdate").innerHTML="Invalid date";
                 }
                 else
                 {
                     document.getElementById("mdate").hidden=true; 
                     cou_num1=1;   
                     sessionStorage.setItem("Mdate",cou_num1) 
                 }
  
                 
             }
             else
                 {
                     if(udt>28)
                     {
                      document.getElementById("mdate").hidden=false;
                      document.getElementById("mdate").innerHTML="Invalid date";
                     
                     }
                     else
                     {
                         document.getElementById("mdate").hidden=true; 
                         cou_num1=1;
                         sessionStorage.setItem("Mdate",cou_num1)   
                     }
  
                 }
          }
      }
   
      else if(idd=="")
      {
          document.getElementById("mdate").hidden=true; 
      }
      else if(/[0-9]+-[0-9]+-[0-9]{4}/.test(idd))
      {
          document.getElementById("mdate").hidden=true; 
          cou_num1=1; 
          sessionStorage.setItem("Mdate",cou_num1)   
      }
   
      ButtonValidate();
  }
  

  var cou_num2=0;
  const checkEDate=e=>
  {

    var num=sessionStorage.getItem("Edate")
      if(num != null)
      {
        sessionStorage.setItem("Edate",0);
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
          document.getElementById("edate").hidden=false;
          document.getElementById("edate").innerHTML="Invalid date format";
      }
     
      else if(udt>31)
      {
        document.getElementById("edate").hidden=false;
        document.getElementById("edate").innerHTML="Invalid date";
   
      }
      else if(umm>12)
      {
        document.getElementById("edate").hidden=false;
        document.getElementById("edate").innerHTML="Invalid month";
   
      }
      else if(uyy<yy)
      {
        document.getElementById("edate").hidden=false;
        document.getElementById("edate").innerHTML="less than current Year not allow";
   
      }
      else if(umm==4 || umm==6  || umm==9 || umm==11)
      {
          if(udt>30)
          {
              document.getElementById("edate").hidden=false;
              document.getElementById("edate").innerHTML="Invalid date";
          }
  
      }
      else if(umm==2)
      {
        
          if(udt>29)
          {
              document.getElementById("edate").hidden=false;
              document.getElementById("edate").innerHTML="Invalid date";
        
          }
          else
          {
             var rem=uyy%4
             
             if(rem==0)
             {
                 if(udt>29)
                 {
  
                  document.getElementById("edate").hidden=false;
                  document.getElementById("edate").innerHTML="Invalid date";
                 }
                 else
                 {
                     document.getElementById("edate").hidden=true; 
                     cou_num2=1;
                     sessionStorage.setItem("edate",cou_num2)    
                 }
  
                 
             }
             else
                 {
                     if(udt>28)
                     {
                      document.getElementById("edate").hidden=false;
                      document.getElementById("edate").innerHTML="Invalid date";
                     
                     }
                     else
                     {
                         document.getElementById("edate").hidden=true; 
                         cou_num2=1;  
                         sessionStorage.setItem("Edate",cou_num2)  
                     }
  
                 }
          }
      }
   
      else if(idd=="")
      {
          document.getElementById("edate").hidden=true; 
      }
      else if(/[0-9]+-[0-9]+-[0-9]{4}/.test(idd))
      {
          document.getElementById("edate").hidden=true; 
          cou_num2=1;  
          sessionStorage.setItem("Edate",cou_num2)  
      }
   
      ButtonValidate();
  }


const ButtonValidate=()=>
{
    //&& /[0-9]/.test(values.PNAME) && /[0-9]/.test(values.PRICE) && /[0-9]/.test(values.PQUANTY)  && /[0-9]+[%]{1}/.test(values.PQULITY)
   if(/[A-Za-z]{2}[A-Za-z0-9]/.test(values.Pname) && values.Pname.length<50 && /[0-9]{3}[%]{1}/.test(values.Pquality) && /[0-9]/.test(values.Pcount) && values.Pcount <=200000 && /[0-9]/.test(values.Price) && values.Price <= 10000000 && sessionStorage.getItem("Mdate")==1 && sessionStorage.getItem("Edate")==1)
   {
        document.getElementById("bt").disabled=false;
    }
    else
    {
    document.getElementById("bt").disabled=true;
    }
}




    
    
    //upadate item
    
    const updateProduct = {
        PId:'',
      Userid:Uid,
      Pname:'',
      Pcount:'',
      Pquality:'',
      Edate:'',
      Mdate:'',
      Price:'',
      }
    
      const[updatevalue,setupdatevalue]=useState(updateProduct);
    
      const handlelUpdate= (e) => {
          var {name, value} = e.target
          setupdatevalue({
              ...updatevalue,
              [name]: value
          })
        }
    
    
    
    const update=cid=>{
       
        updatevalue.PId=contactObjects[cid].PId;
        updatevalue.Userid=contactObjects[cid].Userid;
        updatevalue.Pname=contactObjects[cid].Pname;
        updatevalue.Pcount=contactObjects[cid].Pcount;
        updatevalue.Pquality=contactObjects[cid].Pquality;
        updatevalue.Price=contactObjects[cid].Price;
        updatevalue.Mdate=contactObjects[cid].Mdate;
         updatevalue.Edate=contactObjects[cid].Edate;
    
        document.getElementById("updateitem").hidden=false;
        document.getElementById("additem").hidden=true;   
    }
    
    const myinfoupdate=e=>
    {
        e.preventDefault();
        axios.put('http://localhost:54929/api/Mystock/Put?PId='+updatevalue.PId,updatevalue)
    }
    
    const Addcheckname=e=>
  {
      var idd=e.target.value;
  
      if(!/[A-Za-z]{2}[A-Za-z0-9]/.test(idd))
      {
          document.getElementById("upname").hidden=false;
          document.getElementById("upname").innerHTML="Name should have 3 charrector";
      }
      else if(idd.length>50)
      {
          document.getElementById("upname").hidden=false;
          document.getElementById("upname").innerHTML="Name should have only 50 charrector";
      }
      else if(idd=="")
      {
          document.getElementById("upname").hidden=true; 
      }
      else 
      {
          document.getElementById("upname").hidden=true; 
      }   
      ButtonVali();
  }
  
  
  
  
  const Addcheckquality=e=>
  {
    var idd=e.target.value;
  
      if(!/[0-9]{3}[%]{1}/.test(idd))
      {
          document.getElementById("upqt").hidden=false;
          document.getElementById("upqt").innerHTML="Invalid type format should be xxx%";
      }
      else if(idd=="")
      {
          document.getElementById("upqt").hidden=true; 
      }
      else
      {
          document.getElementById("upqt").hidden=true; 
      }
      ButtonVali();   
  
  }
  
  const Addcheckquantity=e=>
  {
    var idd=e.target.value;
  
      if(!/[0-9]/.test(idd))
      {
          document.getElementById("upql").hidden=false;
          document.getElementById("upql").innerHTML="Invalid type";
      }
     else if(idd>200000)
      {
          document.getElementById("upql").hidden=false;
          document.getElementById("upql").innerHTML="More than 200000 not allowed";
      }

      else if(idd=="")
      {
          document.getElementById("upql").hidden=true; 
      }
      else
      {
          document.getElementById("upql").hidden=true; 
      }
      ButtonVali(); 
  
  }
  
  const AddcheckPrice=e=>
  {
      var idd=e.target.value;
  
      if(!/[0-9]/.test(idd))
      {
          document.getElementById("uprice").hidden=false;
          document.getElementById("uprice").innerHTML="Invalid Price";
      }
      else if(idd >10000000)
      {
          document.getElementById("uprice").hidden=false;
          document.getElementById("uprice").innerHTML="only less than 10m is allow";
      }
      else if(idd=="")
      {
          document.getElementById("uprice").hidden=true; 
      }
      else
      {
          document.getElementById("uprice").hidden=true; 
      }
      ButtonVali();
     
  }
  var cou_num1=0;
  const AddcheckMDate=e=>
  {
      var num=sessionStorage.getItem("Mdate")
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
   
     ButtonVali();
  }
  

  var cou_num2=0;
  const AddcheckEDate=e=>
  {

    var num=sessionStorage.getItem("Edate")
      if(num != null)
      {
        sessionStorage.setItem("Edate",0);
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
          document.getElementById("upedt").hidden=false;
          document.getElementById("upedt").innerHTML="Invalid date format";
      }
     
      else if(udt>31)
      {
        document.getElementById("upedt").hidden=false;
        document.getElementById("upedt").innerHTML="Invalid date";
   
      }
      else if(umm>12)
      {
        document.getElementById("upedt").hidden=false;
        document.getElementById("upmdt").innerHTML="Invalid month";
   
      }
      else if(uyy<yy)
      {
        document.getElementById("upedt").hidden=false;
        document.getElementById("upedt").innerHTML="less than current Year not allow";
   
      }
      else if(umm==4 || umm==6  || umm==9 || umm==11)
      {
          if(udt>30)
          {
              document.getElementById("upedt").hidden=false;
              document.getElementById("upedt").innerHTML="Invalid date";
          }
  
      }
      else if(umm==2)
      {
        
          if(udt>29)
          {
              document.getElementById("upedt").hidden=false;
              document.getElementById("upedt").innerHTML="Invalid date";
        
          }
          else
          {
             var rem=uyy%4
             
             if(rem==0)
             {
                 if(udt>29)
                 {
  
                  document.getElementById("upedt").hidden=false;
                  document.getElementById("upedt").innerHTML="Invalid date";
                 }
                 else
                 {
                     document.getElementById("upedt").hidden=true; 
                     cou_num2=1;
                     sessionStorage.setItem("Edate",cou_num2)    
                 }
  
                 
             }
             else
                 {
                     if(udt>28)
                     {
                      document.getElementById("upedt").hidden=false;
                      document.getElementById("upedt").innerHTML="Invalid date";
                     
                     }
                     else
                     {
                         document.getElementById("upmdt").hidden=true; 
                         cou_num2=1;  
                         sessionStorage.setItem("Edate",cou_num2)  
                     }
  
                 }
          }
      }
   
      else if(idd=="")
      {
          document.getElementById("upedt").hidden=true; 
      }
      else if(/[0-9]+-[0-9]+-[0-9]{4}/.test(idd))
      {
          document.getElementById("upedt").hidden=true; 
          cou_num2=1;  
          sessionStorage.setItem("Edate",cou_num2)  
      }
   
     ButtonVali();
  }
  
  const ButtonVali=()=>
  {
      
      // && !/[0-9]/.test(values.PNAME) &&  /[0-9]/.test(values.PRICE) && /[0-9]/.test(values.PQUANTY)  && /[0-9]+[%]{1}/.test(values.PQULITY) && count==1 
     if(/[A-Za-z]{2}[A-Za-z0-9]/.test(updatevalue.Pname) && updatevalue.Pname.length<50 && /[0-9]{3}[%]{1}/.test(updatevalue.Pquality) && /[0-9]/.test(updatevalue.Pcount) && updatevalue.Pcount <=200000 && /[0-9]/.test(updatevalue.Price) && updatevalue.Price <= 10000000 && sessionStorage.getItem("Mdate")==1 && sessionStorage.getItem("Edate")==1)
     {
          document.getElementById("btt").disabled=false;
     }
     else
     {
      document.getElementById("btt").disabled=true;
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
                

                <table border="1" class="table">
  <thead>
    <tr className="tr-heading">
      <th scope="col">PRODUCT NAME</th>
      <th scope="col">PRODUCT AVAILABILTY</th>

      <th scope="col">QUALITY</th>
      <th scope="col">PRODUCT PRICE</th>
      <th scope="col">MANIFACTURE-DATE</th>
      <th scope="col">EXSPIRE-DATE</th>
      <th scope="col">ACTIONS</th>
    
      </tr>
  </thead>
    
    <tbody>
                 {
                        Object.keys(contactObjects).map(id=>{

                            return <tr key={id}>
                                <td>{contactObjects[id].Pname}</td>
                                <td>{contactObjects[id].Pcount}</td>
                                <td>{contactObjects[id].Pquality}</td>
                                <td>{contactObjects[id].Price}</td>
                                <td>{contactObjects[id].Mdate}</td>
                                <td>{contactObjects[id].Edate}</td>
                                <td>
                                <a   onClick={() => {update([id])}}><i><EditIcon className="cls-delete" /></i>
                                    </a>
                                    <a   onClick={() => {mydelete(contactObjects[id].PId)}}><i><DeleteIcon className="cls-delete" /></i>
                                    </a>
                                   </td>  
                               
                            </tr>
                        })
                    }
                </tbody>
  
</table>
<div className="mybtn"><button className="btn" onClick={additem}>AddItem</button></div>

 
<div  className="tabb1" id="additem" hidden={true}>
<div className="tr-heading" style={{display:"flex"}}><h6 style={{marginLeft:"1%",fontFamily:"Time New Roman"}}>ADDITEM</h6> <button className="close" style={{marginLeft:"89%"}} onClick={updatemyretForm} ><RefreshIcon/></button><button className="close" style={{marginLeft:"1%"}} onClick={remove}><CloseIcon/></button></div>
<form  onSubmit={handleFormSubmit}>
<div className="input-grid">
         <div className="grd-input"><input type="text" name="Pname"     value={values.Pname}      placeholder="ENETER PRODUCT NAME" onChange={handlelInput} onKeyUpCapture={checkpname} required/>
         <p id="apname"></p>
         </div>
         <div className="grd-input"><input type="text" name="Pcount"     value={values.Pcount}      placeholder="ENTER YOUR PRODUCT COUNT" onChange={handlelInput} onKeyUpCapture={checkquantity} required/>
         <p id="apqt"></p>
         </div>
        <div className="grd-input"><input type="text" name="Pquality"   value={values.Pquality}      placeholder="ENETER PRODUCT QUALITY" onChange={handlelInput} onKeyUpCapture={checkquality} required/>
        <p id="apql"></p>
        </div>
        <div className="grd-input"><input type="text" name="Price"     value={values.Price}   placeholder="ENTER PRODUCT PRICE/KG/Kl/-" onChange={handlelInput} onKeyUpCapture={checkPrice} required />
        <p id="aprice"></p>
        </div>
        <div className="grd-input"><input type="text" name="Mdate"     value={values.Mdate}   placeholder="ENTER MANIFACTURE DATE" onChange={handlelInput} onKeyUpCapture={checkMDate} required/>
        <p id="mdate"></p>
        </div>
        <div className="grd-input"><input type="text" name="Edate"     value={values.Edate}   placeholder="ENTER EXSPIREDATE" onChange={handlelInput} onKeyUpCapture={checkEDate} required/>
        <p id="edate"></p>
        </div>
   
        </div>
        <button  className="btn4" id="bt" onClick={addOrEdit}>ADD</button>
        

</form>

</div>





<div  id="updateitem" hidden={true}>

<div  className="tabb1">
<div className="tr-heading" style={{display:"flex"}}><h6 style={{marginLeft:"1%",fontFamily:"Time New Roman"}}>UPDATEITEM</h6> <button className="close" style={{marginLeft:"89%"}} onClick={remove}><CloseIcon/></button></div>
<form  autoComplete="off"  onSubmit={myinfoupdate}>
          <div className="input-grid">
         <div className="grd-input"><input type="text" name="Pname"     value={updatevalue.Pname}      placeholder="ENETER PRODUCT NAME" onChange={handlelUpdate} onKeyUpCapture={Addcheckname}  required/>
         <p id="upname"></p>
         </div>
        <div className="grd-input"><input type="text" name="Pcount"   value={updatevalue.Pcount}      placeholder="ENETER PODUCT QUALITY" onChange={handlelUpdate} onKeyUpCapture={Addcheckquantity} required/>
        <p id="upql"></p>
        </div>
        <div className="grd-input"><input type="text" name="Pquality"     value={updatevalue.Pquality}   placeholder="ENTER PRODUCT QUANTITY" onChange={handlelUpdate} onKeyUpCapture={Addcheckquality}  required/>
        <p id="upqt"></p>
        </div>
        <div className="grd-input"><input type="text" name="Price"     value={updatevalue.Price}   placeholder="ENTER PRODUCT PRICE/KG/Kl/-" onChange={handlelUpdate} onKeyUpCapture={AddcheckPrice}  required/>
        <p id="uprice"></p>
        </div>
        <div className="grd-input"><input type="text" name="Mdate"     value={updatevalue.Mdate}   placeholder="ENTER MANIFACTURE DATE" onChange={handlelUpdate} onKeyUpCapture={AddcheckMDate}  required/> <p id="upmdt"></p></div>
       
        
        <div className="grd-input"><input type="text" name="Edate"     value={updatevalue.Edate}   placeholder="ENTER MANIFACTURE DATE" onChange={handlelUpdate} onKeyUpCapture={AddcheckEDate}  required/> <p id="upedt"></p></div>
       
        </div>
        
        <input type="submit" id="btt" className="btn1" value="UPDATE" ></input>
        </form>
        


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



