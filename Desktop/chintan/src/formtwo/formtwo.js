import React, { Component } from 'react';


import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';



class Formtwo extends Component {
  state = {

  }


  render() {

    return (
      <div>


        <section className="formone">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-3 col-lg-2 ">
                <div className="block profile-photo">
                  <i className="fa fa-user-circle-o" ></i>
                  <div className="heading">Muhammad Qamar</div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-9 col-lg-10 ">


                <div className="block personal-detail h-d">
                  <div className="heading">Healer Details</div>

                  <div className="formcenter row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">Title</div>
                      <input value="" type="text" className="form-control" placeholder="Astrologer" />
                    </div>
                    <div className="col-xs-12 ">
                      <div className="label">Description</div>
                      <input value="" type="textarea" className="form-control textarea" placeholder="Details about your skills and business" />
                    </div>
                  </div>
                </div>

                <div className="block personal-detail h-e">
                  <div className="heading">YOUR EXPERTISES</div>

                  <div className="formcenter row">
                    <div className="col-xs-12 col-sm-6  browse">
                      <div className="label">MODALITIES</div>
                      <input value="" type="text" className="form-control"  />
                    
                    </div>
                    <div className="col-xs-12 col-sm-6  ">
                      <div className="label">Diseases (MULTI)</div>
                      <input value="" type="text" className="form-control" placeholder="" />
                    </div>

                    <div className="col-xs-12  ">
                      <div className="label">Languages (MULTI)</div>
                      <select value="English" type="text" className="form-control" placeholder="" >
                        <option>English</option>
                        <option>HINDI</option>
                        <option>URDU</option>
                      </select>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">Expertises</div>
                      <select value="" type="text" className="form-control" placeholder="" >
                        <option>English</option>
                        <option>HINDI</option>
                        <option>URDU</option>
                      </select>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">Experience</div>
                      <select value="" type="text" className="form-control" placeholder="" >
                        <option>English</option>
                        <option>HINDI</option>
                        <option>URDU</option>
                      </select>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">Education Qualification</div>
                      <select value="Select" type="text" className="form-control" placeholder="" >
                        <option>English</option>
                        <option>HINDI</option>
                        <option>URDU</option>
                      </select>
                    </div>

                  </div>
                </div>



                <div className="block personal-detail h-c">
                  <div className="heading">your  Expertises</div>

                  <div className="formcenter row">
                    <div className="col-xs-12 col-sm-6 col-md-3">
                      <div className="label">certification name</div>
                      <input value="" type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                      <div className="label">insitute / trainer</div>
                      <input value="" type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                      <div className="label">duration</div>
                      <input value="" type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                      <div className="label">completion year</div>
                      <input value="" type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                      <div className="btn btn-add"><i className="fa fa-plus"></i> Add More</div>
                    </div>
                   <div className="uplaod col-xs-12">
                    <div className="blockinput">
                            <input type="file" style={{display:'none'}}  ref={g=>this.qamar= g} className="" />
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



                <div className="block personal-detail h-v">
                  <div className="heading">video introduction</div>
                  <div className="paragraph">add your videos files</div>

                  <div className="formcenter row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">video title</div>
                      <input value="" type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="col-xs-12 ">
                    <div className="uplaod">
                    <div className="blockinput">
                            <input type="file" style={{display:'none'}}  ref={g=>this.qamar= g} className="" />
                            <i className="fa fa-file"></i> Drag & srop files or <span onClick={()=>this.qamar.click()}> BROWSER </span>
                            </div>
                            <ul className="uplaoded files">
                              <li class="blocker">
                                <i className="fa fa-file"></i> Consumpltion.mp4
                                </li>

                                <li class="blocker">
                                <i className="fa fa-file"></i> image.3gp
                                </li>
                              </ul>
                              </div>
                      </div>
                  </div>
                </div>


                <div className="block personal-detail h-y">
                <div className="heading">Time & availability</div>
                  <div className="paragraph">Provide your availability</div>

                  <div className="formcenter row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">availability day</div>
                      <select value="Select" type="text" className="form-control" placeholder="" >
                        <option>English</option>
                        <option>HINDI</option>
                        <option>URDU</option>
                      </select>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">time from</div>
                      <select value="Select" type="text" className="form-control" placeholder="" >
                        <option>English</option>
                        <option>HINDI</option>
                        <option>URDU</option>
                      </select>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">to</div>
                      <select value="Select" type="text" className="form-control" placeholder="" >
                        <option>English</option>
                        <option>HINDI</option>
                        <option>URDU</option>
                      </select>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                      <div className="btn btn-add"><i className="fa fa-plus"></i> Add More</div>
                    </div>
                   
                  
              
                  </div>
                </div>



              
               

           


                
                <div class="block submit">
                <NavLink to="/formthree"><div class="btn btn-default">Submit</div></NavLink>
                  <div class="btn btn-default">Reset</div>
                  <NavLink to="/"><div class="btn btn-default">Back</div></NavLink>
                </div>






              </div>
            </div>




          </div>


        </section>
      </div>
    )
  }

}


export default Formtwo

