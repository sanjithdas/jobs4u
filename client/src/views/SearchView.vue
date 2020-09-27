<template>
<div class="mt-5">
  <div class="site-wrap mt-5">
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Login</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form method="POST" action="http://www.nadhammelbourne.com.au/jobs/login">
            <input type="hidden" name="_token" value="jyl0eFTZq3K8tLe8NIfja360B0fAaqNcB2aOsjJF">
                <div class="form-group row">
                    <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                    <div class="col-md-12">
                        <input id="email" type="email" class="form-control" name="email" value="" required autofocus>

                    </div>
                </div>

                <div class="form-group row">
                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                    <div class="col-md-12">
                        <input id="password" type="password" class="form-control" name="password" required>

                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-md-6 offset-md-4">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="remember" id="remember" >

                            <label class="form-check-label" for="remember">
                                Remember Me
                            </label>
                        </div>
                    </div>
                </div>
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4"> 
                  <a class="btn btn-link" href="http://www.nadhammelbourne.com.au/jobs/password/reset">
                  Forgot Your Password?
                  </a> 
                </div>
              </div>  
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">
                Login
                </button>  
              </div>  
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
  
   <div class="album text-muted">
     <div class="container mt-5">
      <div id="app" class="row text-left" >
       <div class="title" style="margin-top: 140px;" >
          <h3>{{jobs.title}}</h3> 
          <img src="http://www.nadhammelbourne.com.au/jobs/hero-job-image.jpg" style="width: 100%;">
       </div>
       <div class="col-lg-8">
          <div class="p-4 mb-8 bg-white">
              <!-- icon-book mr-3-->
              <h3 class="h5 text-black mb-3"><i class="fa fa-book" style="color: blue;">&nbsp;</i>Job Description  <a href="#" data-toggle="modal" data-target="#exampleModal1"><i class="fa fa-envelope-square" style="font-size: 34px;float:right;color:green;"></i></a></h3>
              <p>{{jobs.description}}</p>
              </div>
              <div class="p-4 mb-8 bg-white">
              <!--icon-align-left mr-3-->
              <h3 class="h5 text-black mb-3"><i class="fa fa-user" style="color: blue;">&nbsp;</i>Roles and Responsibilities</h3>
              <p>Consectetur provident est est rerum aut repellendus repudiandae in. Vero expedita et praesentium et qui. Aperiam odit magni veritatis nobis doloremque aliquid. .</p>
            </div>
             <div class="p-4 mb-8 bg-white">
              <h3 class="h5 text-black mb-3"><i class="fa fa-users" style="color: blue;">&nbsp;</i>Number of vacancy</h3>
              <p>{{jobs.number_of_vacancy}}</p>
              
            </div>
            <div class="p-4 mb-8 bg-white">
              <h3 class="h5 text-black mb-3"><i class="fa fa-clock-o" style="color: blue;">&nbsp;</i>Experience</h3>
              <p>{{jobs.experience}}&nbsp;years</p>
              
            </div>
            <div class="p-4 mb-8 bg-white">
              <h3 class="h5 text-black mb-3"><i class="fa fa-venus-mars" style="color: blue;">&nbsp;</i>Gender</h3>
              <p>Any </p>
              
            </div>
            <div class="p-4 mb-8 bg-white">
              <h3 class="h5 text-black mb-3"><i class="fa fa-dollar" style="color: blue;">&nbsp;</i>Salary</h3>
              <p>{{jobs.salary}}</p>
            </div>
       </div>
       <div class="col-md-4 p-4 site-section bg-light">
              <h3 class="h5 text-black mb-3 text-center">Short Info</h3>
                  <p>Company name:Kshlerin, Koelpin and Luettgen</p>
                <p>Address:82752 Boehm Crescent Suite 870
Lake Kyra, IA 30369</p>
                    <p>Employment Type:fulltime</p>
                    <p>Position:Power Distributors OR Dispatcher</p>
                    <p>Posted:1 year ago</p>
                    <p>Last date to apply:January 10, 2002</p>



              <p><a href="http://www.nadhammelbourne.com.au/jobs/company/6/kshlerin-koelpin-and-luettgen" class="btn btn-warning" style="width: 100%;">Visit Company Page</a></p>
              
                            <div class="alert alert-warning">
        Please login to apply this job <b class="text-center">{{jobs}}</b>
</div>


            
               

</div>
       
     </div>

     </div> 
   </div>
 
 
</div>
  
</template>
<script>
import '../assets/css/magnific-popup.css'
import '../assets/css/owl.theme.default.min.css'
import '../assets/css/bootstrap-datepicker.css'
import '../assets/css/animate.css'
import '../assets/css/magnific-popup.css'
import '../assets/fonts/flaticon/font/flaticon.css'
import '../assets/fonts/icomoon/style.css'


export default {
  props: ['jobs'],
data() {
  return {
  //  id :'', 
  //  slug:'',
 //  jobs: null
  }
},
  mounted() {
    //this.slug = this.$route.params.slug;
   // this.jobs = this.$route.params.item;
    
    // for (let x in this.jobs){
    //   console.log(x);
    // }
  },
  methods: {
    

    
  },
}
</script>
<style  scoped>

</style>
 