import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './industrydata.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export default function Adminhome()
{
    const [display,setdisplay]=useState(false)
    var Uemail=sessionStorage.getItem('userId');

    const handle=()=>setdisplay(true);
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
</div>
)
}