/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-19 21:30:42
 * @modify date 2020-09-19 21:30:42
 * @desc [Home/Landing Page]
 */
<template>
   <div class="site-wrap">
 
    <div class="site-blocks-cover overlay header-image" 
      data-aos="fade" data-stellar-background-ratio="0.5">
    
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12" data-aos="fade">
            <h1>Find Job</h1>
            <form action="#">
              <div class="row mb-3">
                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-6 mb-3 mb-md-0">
                      <input type="text" class="mr-3 form-control border-0 px-4" placeholder="job title, keywords or company name ">
                    </div>
                    <div class="col-md-6 mb-3 mb-md-0">
                      <div class="input-wrap">
                        <span class="icon icon-room"></span>
                      <input type="text" class="form-control form-control-block search-input  border-0 px-4" id="autocomplete" placeholder="city, province or region" onFocus="geolocate()">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <input type="submit" class="btn btn-search btn-primary btn-block" value="Search">
                </div>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
    

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto text-center mb-5 section-heading">
            <h2 class="mb-5">Popular Categories</h2>
          </div>
        </div>
        <div class="row" >
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3" 
          v-for="category in categories"
         :key="category.id"
          data-aos="fade-up" data-aos-delay="100">
            <a href="#" class="h-100 feature-item">
              <span class="d-block icon flaticon mb-3 text-primary"></span>
              <h2>{{ category.name}}</h2>
              <span class="counting">10</span>
            </a>
          </div>
          
        </div>

      </div>
    </div>


    <div class="site-section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
            <h2 class="mb-5 h3">Recent Jobs  </h2>
            <div class="rounded border jobs-wrap" 
            v-for="job in jobs" :key="job.id">

              <a href="job-single.html" class="job-item d-block d-md-flex align-items-center  border-bottom"
              :class="job.type">
                <div class="company-logo blank-logo text-center text-md-left pl-3">
                  <img src="http://www.nadhammelbourne.com.au/jobs/uploads/logo/1566622779.jpeg" alt="Image" class="img-fluid mx-auto">
                </div>
                <div class="job-details h-100">
                  <div class="p-3 align-self-center">
                    <h3>{{job.position}}</h3>
                    <div class="d-block d-lg-flex">
                      <div class="mr-3"><span class="icon-suitcase mr-1"></span> Resto Bar</div>
                      <div class="mr-3"><span class="icon-room mr-1"></span> {{job.address}}</div>
                      <div><span class="icon-money mr-1"></span>{{job.salary}}</div>
                    </div>
                  </div>
                </div>
                <div class="job-category align-self-center">
                  <div class="p-3">
                    <span class="text-info p-2 rounded border border-info">{{job.type}}</span>
                  </div>
                </div>  
              </a>

            </div>

            <div class="col-md-12 text-center mt-5">
              <a href="#" class="btn btn-primary rounded py-3 px-5"><span class="icon-plus-circle"></span> Show More Jobs</a>
            </div>
          </div>
         
        </div> 
      </div>
    </div>

    <div class="site-section" data-aos="fade">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-5 mb-md-0">
            
              <div class="img-border">
                <a href="https://vimeo.com/28959265" class="popup-vimeo image-play">
                  <span class="">
                    <span class="icon-play"></span>
                  </span>
                  <img src="../assets/images/hero_2.jpg" alt="Image" class="img-fluid rounded">
                </a>
              </div>
            
          </div>
          <div class="col-md-5 ml-auto">
            <div class="text-left mb-5 section-heading">
              <h2>Testimonies</h2>
            </div>

            <p class="mb-4 h5 font-italic lineheight1-5">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis magni eaque velit eum, id rem eveniet dolor possimus voluptas..&rdquo;</p>
            <p>&mdash; <strong class="text-black font-weight-bold">John Holmes</strong>, Marketing Strategist</p>
            <p><a href="https://vimeo.com/28959265" class="popup-vimeo text-uppercase">Watch Video <span class="icon-arrow-right small"></span></a></p>
          </div>
        </div>
      </div>
    </div>


    <div class="site-blocks-cover-dream overlay dream-image"  data-aos="fade" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-6 text-center" data-aos="fade">
            <h1 class="h3 mb-0 text-white">Your Dream Job</h1>
            <p class="h3 text-white mb-5">Is Waiting For You</p>
            <p><a href="#" class="btn btn-outline-warning py-3 px-4">Find Jobs</a> <a href="#" class="btn btn-warning py-3 px-4">Apply For A Job</a></p>
            
          </div>
        </div>
      </div>
    </div>

    

    <div class="site-section site-block-feature bg-light">
      <div class="container">
        
        <div class="text-center mb-5 section-heading">
          <h2>Why Choose Us</h2>
        </div>

        <div class="d-block d-md-flex border-bottom">
          <div class="text-center p-4 item border-right" data-aos="fade">
            <span class="flaticon-worker display-3 mb-3 d-block text-primary"></span>
            <h2 class="h4">More Jobs Every Day</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
            <p><a href="#">Read More <span class="icon-arrow-right small"></span></a></p>
          </div>
          <div class="text-center p-4 item" data-aos="fade">
            <span class="flaticon-wrench display-3 mb-3 d-block text-primary"></span>
            <h2 class="h4">Creative Jobs</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
            <p><a href="#">Read More <span class="icon-arrow-right small"></span></a></p>
          </div>
        </div>
        <div class="d-block d-md-flex">
          <div class="text-center p-4 item border-right" data-aos="fade">
            <span class="flaticon-stethoscope display-3 mb-3 d-block text-primary"></span>
            <h2 class="h4">Healthcare</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
            <p><a href="#">Read More <span class="icon-arrow-right small"></span></a></p>
          </div>
          <div class="text-center p-4 item" data-aos="fade">
            <span class="flaticon-calculator display-3 mb-3 d-block text-primary"></span>
            <h2 class="h4">Finance &amp; Accounting  </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
            <p><a href="#">Read More<span class="icon-arrow-right small"></span></a></p>
          </div>
        </div>
      </div>
    </div>
 
  </div>
</template>

<script>
// @ is an alias to /src

import '../assets/css/magnific-popup.css'
import '../assets/css/owl.theme.default.min.css'
import '../assets/css/bootstrap-datepicker.css'
import '../assets/css/animate.css'
import '../assets/css/magnific-popup.css'
import '../assets/fonts/flaticon/font/flaticon.css'
import 'owl.carousel/dist/assets/owl.carousel.css';

// Custom Import
import JobListingService from '@/services/JobListingService';
import CategoryListingService from '@/services/CategoryListingService'
export default {
  name: 'Home',
  data() {
  return {
    title:'Recent Jobs',
    jobs:null,
    categories:null
  }
 },
 /**
  * listing all jobs and categories
  */
 methods: {
   async getAllJobs(){
     this.jobs=(await JobListingService.getAllJobs()).data;
   },
   async getAllCategories(){
     this.categories = (await CategoryListingService.getAllCategories()).data;
     console.log(this.categories);
   }
 },

 async mounted(){
   this.getAllJobs();
   this.getAllCategories();
  }
 
} 


</script>
