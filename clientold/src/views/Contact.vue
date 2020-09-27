<template>
   
<div class="mt-5">
     <div class="site-section mt-0 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="card">
              <div class="card-header text-left">Contact</div>
              <div class="card-body">
              <form>
                <div class="form-group row">
                  <label for="name" class="col-md-4 col-form-label text-md-right">Full Name</label>
                  <div class="col-md-6">
                    <input id="name" type="text" class="form-control" name="name" value=""  autofocus>
                </div>
                </div>

                <div class="form-group row">
                  <label for="name" class="col-md-4 col-form-label text-md-right">Email</label>
                  <div class="col-md-6">
                    <input id="email" type="text" class="form-control" name="email" value=""  autofocus>
                </div>
                </div>

                <div class="form-group row">
                  <label for="name" class="col-md-4 col-form-label text-md-right">Phone</label>
                  <div class="col-md-6">
                    <input id="phone" type="text" class="form-control" name="phone" value=""  autofocus>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="name" class="col-md-4 col-form-label text-md-right">Message</label>
                  <div class="col-md-6">
                    <textarea id="phone" type="text" class="form-control" name="phone" value=""  
                    autofocus
                    placeholder="Say hello to us"
                    ></textarea>
                  </div>
                </div>
                
                <div class="row form-group">
                  <div class="col-md-12">
                    <input type="submit" value="Send Message" class="btn btn-primary pill px-4 py-2">
                  </div>
                </div>
              </form>
          </div>
            </div>

          </div>

          <div class="col-lg-4">
            <div class="p-4 mb-3 bg-white">
              <h3 class="h5 text-black mb-3">Contact Info</h3>
              <p class="mb-0 font-weight-bold">Address</p>
              <p class="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

              <p class="mb-0 font-weight-bold">Phone</p>
              <p class="mb-4"><a href="#">+1 232 3235 324</a></p>

              <p class="mb-0 font-weight-bold">Email Address</p>
              <p class="mb-0"><a href="#">youremail@domain.com</a></p>

            </div>
            
            <div class="p-4 mb-3 bg-white">
              <h3 class="h5 text-black mb-3">More Info</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.</p>
              <p><a href="#" class="btn btn-primary px-4 py-2 text-white pill">Learn More</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
</template>
<script>
export default {
  
}
</script>
<style scoped>

</style>