import axios from 'axios';
import React,{useState,useEffect} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { EmailOutlined } from '@material-ui/icons';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

export const Profile=()=>
{
    const initialFieldsValues = {
        Userid:'',
        Name: '',
        Email: '',
        Password:'',
        Mobile:'',
        Address:'',
        Type:'',

        
    }


    var [contactObjects,setContactObjects] = useState({})
    const Uid=sessionStorage.getItem('userId');
 

    useEffect(()=>
    { 
      axios.get('http://localhost:54929/api/Login/Getdetails?Userid='+Uid)
      .then(Response=>{
        setContactObjects({... Response.data} )
  
      })
    })
      



    return(
        <div>    

                        {    
                        Object.keys(contactObjects).map(id=>{

                            return <tr key={id}>
                        
                              <div style={{width:"250%",height:"auto",padding:"1%",borderBottom:"1px solid teal"}}> <tr><th><AccountBoxIcon/>UserId</th> :{contactObjects[0].Userid}</tr></div>
                               <br></br>
                               <div style={{width:"250%",height:"auto",padding:"1%",borderBottom:"1px solid teal"}}>     <tr><th><PersonOutlineIcon/>Name</th> :{contactObjects[0].Name}</tr></div>
                               <br></br>
                               <div style={{width:"250%",height:"auto",padding:"1%",borderBottom:"1px solid teal"}}>  <tr><th><EmailOutlined></EmailOutlined>Email</th> :{contactObjects[0].Email}</tr></div>
                               <br></br>
                               <div style={{width:"250%",height:"auto",padding:"1%",borderBottom:"1px solid teal"}}>  <tr><th><PhoneAndroidIcon/>Mobile</th> :{contactObjects[0].Mobile}</tr></div>
                               <br></br>
                               <div style={{width:"250%",height:"auto",padding:"1%",borderBottom:"1px solid teal"}}>  <tr><th><HomeIcon/> Address</th> :{contactObjects[0].Address}</tr></div>
                               <br></br>
                              
                                </tr>

                            })
                           }
                                    
                             
        </div>

    )

}