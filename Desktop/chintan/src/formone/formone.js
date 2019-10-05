import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import axios from 'axios'


class Formone extends Component {

  //stae initilaizing
  state = {
    seller_profile: {
      first_name: "chintan",
      middle_name: "chintan m",
      last_name: "chintan l",
      Dob : "",
      address_city: "Mumbai",
      pin_code: "400101",
      profile_image_ur: "abc.jpg",
      profile_image_source_url: "kbc.jpg",
      state: "MAHARASHTRA",
      country: "INDIA",
      city:"islamabad",
      address:"E11-2 markaz"
    },
    seller_personal_details: {
      email: "ck11.com",
      phone: "0346419833066565",
      identity_proof_type: "ADHAR",
      identity_proof_value: "329sdfgsdfg0923",
      identity_proof_url: "file.jpg",
      identity_proof_source_url: "cdn.jpg"
    }


  }

  //function for input assiging values state to form

  assign_first_name = (e)=> this.setState({seller_profile : { ...this.state.seller_profile, first_name : e.target.value }} )
  assign_middle_name = (e)=> this.setState({seller_profile : { ...this.state.seller_profile, middle_name : e.target.value }} )
  assign_last_name = (e)=> this.setState({seller_profile : { ...this.state.seller_profile, last_name : e.target.value }} )
  assign_pincode = (e)=> this.setState({seller_profile : { ...this.state.seller_profile, pin_code : e.target.value }} )
  assign_city = (e)=> this.setState({seller_profile : { ...this.state.seller_profile, city : e.target.value }} )
  assign_state = (e)=> this.setState({seller_profile : { ...this.state.seller_profile, state : e.target.value }} )
  assign_country= (e)=> this.setState({seller_profile : { ...this.state.seller_profile, country : e.target.value }} )
  assign_address= (e)=> this.setState({seller_profile : { ...this.state.seller_profile, address : e.target.value }} )
  assign_dob = (e)=> this.setState({seller_profile : { ...this.state.seller_profile, Dob : e.target.value }} )
  assign_emial = (e)=> this.setState({seller_personal_details : { ...this.state.seller_personal_details, email : e.target.value }} )
  assign_phone = (e)=> this.setState({seller_personal_details : { ...this.state.seller_personal_details, phone : e.target.value }} )
  assign_adhar_image =(e)=>{
   
     this.setState({
      seller_personal_details:{
        ...this.state.seller_personal_details,
        identity_proof_type: e.target.files[0]
      }
     
     })
     const formd = new FormData();
     formd.append(this.state.seller_profile.identity_proof_type,this.state.seller_personal_details.identity_proof_type.name)
   // axios.post('https://jsonplaceholder.typicode.com/photos',formd).then((res)=>{console.log(res)})
 }
  assign_profile_image =(e)=>{
   
     this.setState({
      seller_profile:{
        ...this.state.seller_profile,
        profile_image_ur: e.target.files[0]
      }
  

     })   
    const form_profile_img = new FormData();
    form_profile_img.append(this.state.seller_profile.profile_image_ur,this.state.seller_profile.profile_image_ur.name)
   // axios.post('https://jsonplaceholder.typicode.com/photos',form_profile_img).then((res)=>{console.log(res)})
}
  

  


  //componentdidmount

  componentDidMount(){
   
  }

  //submitform1

  submitform1 = ()=>{
    console.log(this.state)
    const options = {
      headers: {
        "Authorization": "eyJraWQiOiJnSmRnMllYMGdWcUtWYUwzRTVsR2NLM1VQOGJFMmh1OWdtMktraWw1SVlBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlYzRiZTliMC1iODQzLTQ3YmEtYWRmYi1lNzNiZmFhN2VhMmQiLCJldmVudF9pZCI6ImQ4ZTNhZWFiLTk5MmItNDlkYi04MjBmLTgzZTU0MmIxZTdhNSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NzAxOTg3MTIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfem53S3VHSkpNIiwiZXhwIjoxNTcwMjAyMzEyLCJpYXQiOjE1NzAxOTg3MTIsImp0aSI6ImU2NmNmMjJmLTVkNjktNDk4Zi04NzEyLTFlNmY5OTk4NmZmMSIsImNsaWVudF9pZCI6IjFpYTAwcDdtaHNucmk0M2djM2o2dWt1aXVmIiwidXNlcm5hbWUiOiJlYzRiZTliMC1iODQzLTQ3YmEtYWRmYi1lNzNiZmFhN2VhMmQifQ.l1ssCfH0F4eH5XSppzzYnLrfK_1IFX0B1yWf7LQw1Gr_7SiLD0GzuOxjZxf83q3-rBdAp7XcKIJPYFW5BDBsUUuUkbLup1egULezlL_MID8sKYQlgKmM9Au29Z1AirT1LnQFbsNO4HfC3HMpbg7UsGddG9v9oARwZaX4Esg7ESmwGNaCXsAyAIsg3fUPdtsVsXeApokc3Q3ZyAzmbMHpQDWXixtKe-CEao12v-EUfEgLF1ZVl3lJw0rnxZidUjmyQqcxYsvqOs-8cXFpKTROI1tDtkwV9P5QswGpNl3QXsXz8pSkOzq7R2jDHR1s6szQ8pCGK0IWMGRudI3CsTW2-g",
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
       
      }
    };
   var host= 'https://t7uljwebab.execute-api.ap-south-1.amazonaws.com/dev/seller/'
   axios.post(host,this.state,options)
   .then((res)=>console.log(res)).catch(error => {
      console.log(error.response)
  });



  

  }



  render() {

    return (
      <div>


        <section className="formone">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-3 col-lg-2 ">
                <div className="block profile-photo">
                  <input className="hidden" type="file" onChange={this.assign_profile_image.bind(this)} ref={(h)=>this.primg = h} />
                  <i  onClick={()=>this.primg.click()}  className="fa fa-user-circle-o" ></i>
                  <div className="heading">Muhammad Qamar</div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-9 col-lg-10 ">
                <div className="block personal-detail">
                  <div className="heading">Personal details</div>

                  <div className="formcenter row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">First Name</div>
                      <input value={this.state.seller_profile.first_name}  onChange={this.assign_first_name.bind(this)} type="text" className="form-control" placeholder="Muhammad" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">Middle Name (Optional)</div>
                      <input value={this.state.seller_profile.middle_name}  onChange={this.assign_middle_name.bind(this)} type="text" className="form-control" placeholder="Qamar" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">Last Name (Optional)</div>
                      <input value={this.state.seller_profile.last_name}  onChange={this.assign_last_name.bind(this)} type="text" className="form-control" placeholder="Aftab" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">date of birth</div>
                      <input value={this.state.seller_profile.Dob}  onChange={this.assign_dob.bind(this)} type="date" className="form-control" placeholder="Qamar" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">Email</div>
                      <input value={this.state.seller_personal_details.email}  onChange={this.assign_emial.bind(this)} type="Email" className="form-control" placeholder="Qamar@gmail.com" />
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">Mobile</div>
                      <input value={this.state.seller_personal_details.phone}  onChange={this.assign_phone.bind(this)} type="text" className="form-control" placeholder="+923464198330" />
                    </div>
                  </div>
                </div>



                <div className="block uplaod">
                  <div className="heading">Upload Documents</div>

                  <div className="formcenter row">
                    <div className="col-xs-12 ">
                      <div className="label">select & upload documents</div>
                      <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#home">aadhar card</a></li>
                        <li><a data-toggle="tab" href="#menu1">PAN card</a></li>
                        <li><a data-toggle="tab" href="#menu2">Passport</a></li>
                      </ul>

                      <div className="tab-content">
                        <div id="home" className="tab-pane fade in active">
                          <div className="blockinput">
                            <input type="file" style={{display:'none'}}  onChange={this.assign_adhar_image.bind(this)}  ref={g=>this.qamar= g} className="" />
                            <i className="fa fa-file"></i> Drag & srop files or <span onClick={()=>this.qamar.click()}> BROWSER </span>
                            </div>
                            <ul className="uplaoded files">
                              <li class="blocker">
                                <i className="fa fa-file"></i> Consumpltion.png
                                </li>

                                <li class="blocker">
                                <i className="fa fa-file"></i> image.png
                                </li>
                              </ul>
                        </div>
                        <div id="menu1" className="tab-pane fade">
                        <div className="blockinput">
                            <input type="file" style={{display:'none'}}   className="" />
                            <i className="fa fa-file"></i> Drag & srop files or <span onClick={()=>this.qamar.click()}> BROWSER </span>
                            </div>
                            <ul className="uplaoded files">
                              <li class="blocker">
                                <i className="fa fa-file"></i> Consumpltion.png
                                </li>

                                <li class="blocker">
                                <i className="fa fa-file"></i> image.png
                                </li>
                              </ul>
                        </div>
                        <div id="menu2" className="tab-pane fade">
                        <div className="blockinput">
                            <input type="file" style={{display:'none'}}  className="" />
                            <i className="fa fa-file"></i> Drag & srop files or <span onClick={()=>this.qamar.click()}> BROWSER </span>
                            </div>
                            <ul className="uplaoded files">
                              <li class="blocker">
                                <i className="fa fa-file"></i> Consumpltion.png
                                </li>

                                <li class="blocker">
                                <i className="fa fa-file"></i> image.png
                                </li>
                              </ul>
                        </div>
                      </div>

                    </div>




                  </div>
                </div>


                <div className="block personal-detail">
                  <div className="heading">Contact Details</div>

                  <div className="formcenter row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">pincode</div>
                      <input value={this.state.seller_profile.pin_code}  onChange={this.assign_pincode.bind(this)} type="text" className="form-control" placeholder="404400" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">City</div>
                      <input value={this.state.seller_profile.city}  onChange={this.assign_city.bind(this)} type="text" className="form-control" placeholder="New york" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">State</div>
                      <input value={this.state.seller_profile.state}  onChange={this.assign_state.bind(this)} type="text" className="form-control" placeholder="Ohio" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">country</div>
                      <input value={this.state.seller_profile.country}  onChange={this.assign_country.bind(this)} type="text" className="form-control" placeholder="USA" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">address</div>
                      <input value={this.state.seller_profile.address}  onChange={this.assign_address.bind(this)} type="type" className="form-control" placeholder="city abc state xyz" />
                    </div>

                    
                  </div>
                </div>
                <div class="block submit">
                  <div onClick={this.submitform1} class="btn btn-default">Submit</div>
                  <div class="btn btn-default">Reset</div>
                </div>






              </div>
            </div>




          </div>


        </section>
      </div>
    )
  }

}


export default Formone

