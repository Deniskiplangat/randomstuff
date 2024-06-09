
import React, { Component } from 'react';
import {  BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, FormGroup, Navbar,  NavbarHeader, FormControl, Formcounter } from 'react-bootstrap';

import { withRouter } from 'react-router';

import './navbar.css';

import logo from './images/logo.png';




import axios from 'axios';
// export const history = createHashHistory()


class Navbarr extends Component {

constructor(props){
  super(props);
  this.searchBlood = this.searchBlood.bind(this);

}
// componentDidMount(){
//   history.push('/donorInformation');
// }

searchBlood =(e)=>{
  e.preventDefault();

  let bloodNeed = e.target.elements.bloodNeed.value.trim();
  let areaNeed = e.target.elements.areaNeed.value.trim();

  let needDonor= {
        bloodNeed,
        areaNeed
  }
  console.log(needDonor);
  
axios.post('/bloodRequired/data',needDonor ) .then((response) => {
  // console.log(response.data);

  
  if (response.data) {
    localStorage.setItem("donorInfo",   JSON.stringify({user:response.data}));
      
      console.log(response.data);

         this.props.history.push('/donorInformation');


      
  }





}).catch(function (err) {
  console.log(err);
})





}



  
    render() {
        return (
            <div className ="">
<nav className="navbar navbar-default navbar-fixed-top ">
<div className = "header">
      <div className="container">
        
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <img src={logo} alt="logo" className="LogoImage" />
        </div>
    
        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
          <li> <Link to='/'><span className="textdesign"><b>Home</b></span> </Link></li>
                                        <li> <Link to='/bloodtips'><span className="textdesign"><b>Blood Tips</b></span> </Link></li>

                                         <li> <Link to='/registerform'><span className="textdesign"><b>Register</b></span> </Link></li>
                                        <li><Link to='/loginform'><span className="textdesign"><b>LogIn</b></span>  </Link></li>



                                         <li><Link to='/contactUs'><span className="textdesign"><b>Contact US</b></span></Link></li>

            <li>
              <a className="btn btn-default btn-outline btn-circle"  data-toggle="collapse" href="#nav-collapseSearch" aria-expanded="false" aria-controls="nav-collapseSearch"> Blood Search</a>
            </li>
          </ul>
          <div className="collapse nav navbar-nav nav-collapse" id="nav-collapseSearch">
            <form className="navbar-form navbar-right" method = "POST" role="search" onSubmit = {this.searchBlood}>
              <div className="form-group">
              <select className="form-control selectDesign parsley-validated" id=" donor-blood" name="bloodNeed" required>
                                            <option value="">-- Select Blood Group --</option>
                                            <option value="a-positive">A+</option>
                                            <option value="a-negative">A-</option>
                                            
                                           
                                            <option value="b-positive">B+</option>
                                            <option value="b-negative">B-</option>
                                           
                                            <option value="o-positive">O+</option>
                                            <option value="o-negative">O-</option>
                                            <option value="ab-positive">AB+</option>
                                            <option value="ab-negative">AB-</option>
                                        </select>
                                        

                                            
                                        
                 {/* <input type="hidden" onClick = {this.googleData} className="form-control  inputStyle" placeholder="Name of your Local Area" />  */}
                {/* <input id="searchArea"  type="text" name="areaNeed" className="form-control selectDesign " placeholder="Your Local Area" required /> */}
               












<select name="areaNeed" id="city_id" className="form-control selectDesign chzn-select parsley-validated" parsley-required="true" >
            <option value="">-- Select City --</option>
    <optgroup label="Popular Cities">
    <option value="Nairobi">Nairobi</option>
<option value="Nakuru">Nakuru</option>
<option value="Mombasa">Mombasa</option>
<option value="Kisii">Kisii</option>
<option value="Kericho">Kericho</option>
<option value="Kisumu">Kisumu</option>
<option value="Baringo">Baringo</option>
    </optgroup>
    <optgroup label="Other Cities">
     <option value="Kabarnet">Kabarnet</option>
<option value="sigalagala">sigalagala</option>
<option value="Muranga">Muranga</option>
<option value="Nyamira">Nyamira</option>
<option value="Voi">Voi</option>
<option value="Siaya">Siaya</option>
<option value="Lodwar">Lodwar</option>
<option value="Elwak">Elwak</option>
<option value="Malaba">Malaba</option>
<option value="Salgaa">Salgaa</option>
<option value="Chepseon">Chepseon</option>

<option value="Ravin">Ravin</option>
<option value="Mogotio">Mogotio</option>
<option value="Wajir">Wajir</option>
<option value="Pokot">Pokot</option>
<option value="Lelechwet">lelechwet</option>

<option value="chepu">chepu</option>

<option value="Bobaracho">Bobaracho</option>
<option value="Kilgoris">Kilgoris</option>
<option value="Rongai">Rongai</option>
<option value="Boror">Boror</option>
<option value="Kaplunga">Kaplunga</option>
<option value="Bombo Kenya">Bombo Kenya</option>

<option value="Bhuawana">Bhuawana</option>

<option value="Sirwal">Sirwala</option>
<option value="Sondu">Sondu</option>
<option value="Nyamira">Nyamira</option>


    </optgroup>
        </select>











              </div>
              <button type="submit" className="btn btn-danger btnIconDesign"><span className="glyphicon glyphicon-search" ></span></button>
            </form>
          </div>
        </div>            
      </div>
      </div>
    </nav>
    </div>




            

        );
    }
}
export default withRouter(Navbarr);