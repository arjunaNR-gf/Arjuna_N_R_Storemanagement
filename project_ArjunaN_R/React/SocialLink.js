import React from 'react'
import "./NavBar1"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';


export default function Sociallink()
{
    return(
        <div>
            <div className="social-lnk">
                <div className="scl">
               <a href="http://www.facebook.com" target="_blank"><FacebookIcon/></a> 
                </div>
                <div className="scl">
                <a href="http://www.twitter.com" target="_blank"><TwitterIcon/></a>    
                </div>
                <div className="scl">
                <a href="http://www.youtube.com" target="_blank" className="scl-yt"><YouTubeIcon/></a>  
                </div>
                <div className="scl" >
                <a href="tel:9448427178"><PhoneForwardedIcon/></a>  
                </div>

            </div>
        </div>

    )
}