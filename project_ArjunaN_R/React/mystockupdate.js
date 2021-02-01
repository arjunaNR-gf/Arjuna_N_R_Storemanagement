import React,{useState,useEffect} from 'react'
import RefreshIcon from '@material-ui/icons/Refresh';

function Updatefarm(props)
{
    const updateProduct = {
        Pname:'',
        PId:'',
        Pcount:'',
        Pquality:'',
        Price:'',
        Mdate:'',
        Edate:''
      };
     
      const[updatevalue,setupdatevalue]=useState(updateProduct);

     
        const handlelInput= (e) => {
            var {name, value} = e.target
            setupdatevalue({
                ...updatevalue,
                [name]: value
            })
          }
    useEffect(()=>{
        
            setupdatevalue({
                ...props.contactObjects[props.currentId]
            })
            
        },[props.currentId,props.contactObjects])
          

      const myretForm=()=>
      {
        setupdatevalue({
         ...updateProduct
        })
      }

     
      const handlelUpdate= (e) => {
          var {name, value} = e.target
          /*setupdatevalue({
              ...updatevalue,
              [name]: value
          })*/
        }


        const Addcheckid=e=>
        {
            var idd=e.target.value;
        
            if(!/^[a-zA-Z]+-[a-zA-Z0-9]*$/.test(idd))
            {
                document.getElementById("upid").hidden=false;
                document.getElementById("upid").innerHTML="Invalid format of id";
            }
            else if(idd==="")
            {
                document.getElementById("upid").hidden=true; 
            }
            else
            {
                document.getElementById("upid").hidden=true; 
            }
            ButtonVali();
           
        }
          
        const Addcheckname=e=>
        {
            var idd=e.target.value;
        
            if(/[0-9]/.test(idd))
            {
                document.getElementById("upname").hidden=false;
                document.getElementById("upname").innerHTML="Number are not allowed";
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
        
            if(!/[0-9]+[%]{1}/.test(idd))
            {
                document.getElementById("upqt").hidden=false;
                document.getElementById("upqt").innerHTML="Invalid type";
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
        var cou_num=0;
        const AddcheckDate=e=>
        {
            var idd=e.target.value;
            var datefun=new Date();
             var dt=datefun.getDate();
             var mm=datefun.getMonth();
             var yy=datefun.getFullYear();
             var curentdate=dt+'-'+mm+'-'+yy;
             cou_num=0;
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
                           cou_num=1;   
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
                               cou_num=1;   
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
                cou_num=1;   
            }
         
           ButtonVali();
        }
        
        const ButtonVali=()=>
        {
            // && !/[0-9]/.test(values.PNAME) &&  /[0-9]/.test(values.PRICE) && /[0-9]/.test(values.PQUANTY)  && /[0-9]+[%]{1}/.test(values.PQULITY) && count==1 
          /* if(/^[a-zA-Z]+-[a-zA-Z0-9]*$/.test(values.PID)  && !/[0-9]/.test(values.PNAME) && /[0-9]+[%]{1}/.test(values.PQULITY) &&  /[0-9]/.test(values.PRICE) && /[0-9]/.test(values.PQUANTY) && cou_num==1   )
           {
                document.getElementById("btt").disabled=false;
           }
           else
           {
            document.getElementById("btt").disabled=true;
           }*/
        }
        
      






     



      return (
            <div>
        <div  className="tabb1">
        <div className="tr-heading" style={{display:"flex"}}><h6 style={{marginLeft:"1%",fontFamily:"Time New Roman"}}>UPDATEITEM</h6> <button className="close" style={{marginLeft:"89%"}} onClick={myretForm}><RefreshIcon/></button></div>
                  <div className="input-grid">
                 <div className="grd-input"><input type="text" name="Pname"     value={updatevalue.Pname}      placeholder="ENETER PRODUCT NAME" onChange={handlelInput} onKeyUpCapture={Addcheckname}  required/>
                 <p id="upname"></p>
                 </div>
                 
                <div className="grd-input"><input type="text" name="Pcount"   value={updatevalue.Pcount}      placeholder="ENETER PODUCT QUALITY" onChange={handlelInput} onKeyUpCapture={Addcheckquality}  required/>
                <p id="upqt"></p>
                </div>
                <div className="grd-input"><input type="text" name="Pquality"     value={updatevalue.Pquality}   placeholder="ENTER PRODUCT QUANTITY" onChange={handlelInput} onKeyUpCapture={Addcheckquantity}  required/>
                <p id="upql"></p>
                </div>
                <div className="grd-input"><input type="text" name="Price"     value={updatevalue.Price}   placeholder="ENTER PRODUCT PRICE/KG/Kl/-" onChange={handlelInput} onKeyUpCapture={AddcheckPrice}  required/>
                <p id="uprice"></p>
                </div>
                <div className="grd-input"><input type="text" name="Mdate"     value={updatevalue.Mdate}   placeholder="ENTER MANIFACTURE DATE" onChange={handlelInput} onKeyUpCapture={AddcheckDate}  required/> <p id="upmdt"></p></div>
               
                
                <div className="grd-input"><input type="text" name="Edate"     value={updatevalue.Edate}   placeholder="ENTER MANIFACTURE DATE" onChange={handlelInput} onKeyUpCapture={AddcheckDate}  required/> <p id="upmdt"></p></div>
               
                </div>
                
                <button id="btt" className="btn4">UPDATE</button>
        </div>
        </div>
      )


}

export default Updatefarm;
