import react from 'react'
import { BrowserRouter as  Router, Switch,Route,Link } from "react-router-dom";
import Login from "./Ilogin";
import Dlogin from "./dlogin";
import NavBar from "./NavBar1";
import Inhome from "./Indusrtydata";
import Mystock from "./mystock";
import MyOrder from "./myorder";
import Userlogin from "./userlog";
import Dealerhome from "./dealerHome";
import DMystock from "./Dmystock";
import DmakeOrder from "./dmakeorder";
import Payment from "./payment";
import Adminhome from "./adminhome";
import Alogin from "./alog";
import Fetchdealerdetails from "./FetchDealer";
import IndusrtyLogin from "./AddIndustry";
import FetchUserdetails from "./Userdetails";
import Forget from './Fogetpassword';

export default function Linkpage()
{

    return(
        <div>
    <Switch>
    {/*<Route  path="/" exact component={NavBar}/>*/}
    <Route path="/"  exact component={Alogin}/>
    <Route path="/alog"   component={Alogin}/>
    <Route  path="/Ilogin"  component={Login}/>
    <Route  path="/dlogin" component={Dlogin}/>
    <Route  path="/Industrydata" component={Inhome}/>
    <Route  path="/mystock" component={Mystock}/>
    <Route  path="/myorder" component={MyOrder}/>
    <Route  path="/userlog" component={Userlogin}/>
    <Route  path="/dealerHome" component={Dealerhome}/>
    <Route  path="/Dmystock" component={DMystock}/>
    <Route  path="/dmakeorder" component={DmakeOrder}/>
    <Route  path="/Payment" component={Payment}/>
    <Route path="/adminhome" component={Adminhome}/>
    <Route path="/FetchDealer" component={Fetchdealerdetails}/>
    <Route path="/AddIndustry" component={IndusrtyLogin}/>
    <Route path="/Userdetails" component={FetchUserdetails}/>
    <Route path="/Forgetpassword" component={Forget} />

    
  </Switch>

  </div>
  )
}