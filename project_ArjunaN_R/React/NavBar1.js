import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import Inhome from './Indusrtydata';
import './NavBar1.css'



 

function NavBar() {

    const [display,setdisplay]=useState(false)

    const handle=()=>setdisplay(!display);

  return (    
 <div className="App">

     
{/*<div className="img-menu"><img src="https://img.yicaiglobal.com/cdn/news/china-belt-and-road-is-second-largest-trade-bloc-study-shows/top.jpg"></img></div>*/}

    

<div className="menu-active">
                <nav class="nv nv-container-lg" >
                <div className="dv-menu">
                <label className="h3"><b className="bld">S</b>tore<b className="bld">M</b>anagemen<b className="bld">t</b></label>
                </div>
                <div className="dvv-link-menu">
                <Link className="l2" to="/alog" onClick={handle}>SignIn</Link>
               
                </div>
                               
   
    </nav>
    </div>
    
    {/*<div class="jumbotron">
     <div className="jum-grd">
       <h6 className="h6">About Us</h6>
       <div className="sub-sbj">Store Management, is the organization connect between manifacture and dealer. We aspire to be the best retail software provider and Point of sales out there in the market. We are already the most preferred solution for fashion and lifestyle brands and in supermarkets</div>
     </div>
     <div className="jum-grd">
     <h6 className="h6">Admin</h6>
       <div className="sub-sbj">Store Management, is the organization connect between manifacture and dealer. We aspire to be the best retail software provider and Point of sales out there in the market. We are already the most preferred solution for fashion and lifestyle brands and in supermarkets</div>
     
     </div>
     <div className="jum-grd">
     <h6 className="h6">Industry</h6>
       <div className="sub-sbj">Store Management, is the organization connect between manifacture and dealer. We aspire to be the best retail software provider and Point of sales out there in the market. We are already the most preferred solution for fashion and lifestyle brands and in supermarkets</div>
     
     </div>
     <div className="jum-grd">
     <h6 className="h6">Dealer</h6>
       <div className="sub-sbj">is the organization connect between manifacture and dealer. We aspire to be the best retail software provider and Point of sales out there in the market. We are already the most preferred solution for fashion and lifestyle brands and in supermarkets</div>
     
     </div>
  </div>*/}

    </div>
  );
 
}

export default NavBar;
