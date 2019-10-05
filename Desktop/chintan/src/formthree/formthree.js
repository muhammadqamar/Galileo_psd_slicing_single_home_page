import React, { Component } from 'react';


import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import $ from "jquery" ;

class Formthree extends Component {
  state = {

  }

  componentDidMount(){
    $(".block1 .btn").click(function(){
      $(".block1 .btn").removeClass("add")
      $(this).addClass("add")
      })

      $(".block2 .btn").click(function(){
        $(".block1 .btn").removeClass("add")
        $(this).addClass("add")
        })


        $(".block3 .btn").click(function(){
          $(".block1 .btn").removeClass("add")
          $(this).addClass("add")
          })
  }


  render() {

    return (
      <div>


        <section className="formone">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-3 col-lg-2 widthtop ">
                <div className="block profile-photo-third">
                  
                     <div className="smallheading">product preview</div>
                     <div className="img-block-open" >
                      <div className="fa fa-image"></div>
                      <div className="bro" onClick={()=>this.bro.click()}   >BROWSE</div>
                     </div>

               
                <div className="second">Catalogue Name</div>

                <div className="req">

                  <div className="prehead">Image Requirement</div>
                  <div className="headingbelow">
                    Minimum size of "600 x 400px"<br></br>
                    GIF files will not animate, <br></br>
                    Add multiple images

                    </div>
                    <input className="hidden" type="file" ref={(g)=>{this.bro = g }}   />
                </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-9 col-lg-10 widthbottom ">


                <div className="block personal-detail h-d">
                  <div className="heading">CATALOGUE DETAILS</div>

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

                  

                 
                 

                  </div>
                </div>



                <div className="block personal-detail h-p">
                  <div className="heading">Package detaild</div>
                  <div className="paragraph">Paragraph</div>

                  <div className="formcenter row">
                    <div className="col-xs-12 col-sm-6 ">
                      <div className="label">Package</div>
                      <div class="block1 btn1">
                      <div class="btn btn-default add">Silver</div>
                      <div class="btn btn-default">Gold</div>
                      <div class="btn btn-default">platnium</div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 ">
                      <div className="label">No. of seesions</div>
                      <div class="block3 btn2">
                      <div class="btn btn-default add">1</div>
                      <div class="btn btn-default">2</div>
                      <div class="btn btn-default">3</div>
                      </div>
                    </div>

                   
                    <div className="col-xs-12 col-sm-6 ">
                      <div className="label">No. of seesions</div>
                      <div class="block2 btn3">
                      <div class="btn btn-default add">30 Minutes</div>
                      <div class="btn btn-default">40 Minutes</div>
                     
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 ">
                      <div className="label ">Price</div>
                        <input placeholder="$" type="text" class="form-control" />
                     
                     
                      </div>
                    </div>
                     


                
                  
                  </div>
               



                <div className="block personal-detail h-up">
                  <div className="heading">Upload files</div>
                  <div className="paragraph">add your videos files</div>

                  <div className="formcenter row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="label">Image / video title</div>
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


                <div className="block personal-detail h-fa">
                <div className="heading">FAQ's</div>
                  <div className="paragraph">add faq's detail</div>

                  <div className="formcenter row">
                     <div class="faq-block">
                  <div className="col-xs-12 ">
                      <div className="label">Question</div>
                      <input value="" type="text" className="form-control" placeholder="your question will appear here"  />
                    
                    </div>
                    <div className="col-xs-12   ">
                      <div className="label">Answer</div>
                      <input value="" type="text" className="form-control" placeholder="Your answer will appear here" />
                    </div>
                    


                    </div>
                    <div className="col-xs-12 ">
                      <div className="btn btn-add"><i className="fa fa-plus"></i> Add More</div>
                    </div>
                  
              
                  </div>
                </div>



                <div className="block personal-detail h-fa">
                <div className="heading">Questions Answers</div>
                  <div className="paragraph">add fquestion answer for users</div>

                  <div className="formcenter row">
                     <div class="faq-block">
                  <div className="col-xs-12 ">
                      <div className="label">Question</div>
                      <input value="" type="text" className="form-control" placeholder="your question will appear here"  />
                    
                    </div>
                    <div className="col-xs-12   ">
                      <div className="label">Diseases (MULTI)</div>
                      <input value="" type="text" className="form-control" placeholder="Your answer will appear here" />
                    </div>
                    </div>
                    
                     <div class="faq-block">
                  <div className="col-xs-12 ">
                      <div className="label">Question</div>
                      <input value="" type="text" className="form-control" placeholder="your question will appear here"  />
                    
                    </div>
                    <div className="col-xs-12   ">
                      <div className="label">Diseases (MULTI)</div>
                      <input value="" type="text" className="form-control" placeholder="Your answer will appear here" />
                    </div>
                    </div>
                    <div className="col-xs-12 ">
                      <div className="btn btn-add"><i className="fa fa-plus"></i> Add More</div>
                    </div>
                   


                  
                  
              
                  </div>
                </div>



              
               

           


                
                <div class="block submit">
                  <div class="btn btn-default">Submit</div>
                  <div class="btn btn-default">Reset</div>
                  <NavLink to="/formtwo"><div class="btn btn-default">Back</div></NavLink>
                </div>






              </div>
            </div>




          </div>


        </section>
      </div>
    )
  }

}


export default Formthree

