<template>
<div class="mtop">
    <div class=" row justify-content-center">
      <div class="col-md-8">
      <div class="card">
          <div class="card-header text-left">Register</div>
          <div class="card-body">
            <form>
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                <div class="col-md-6">
                  <input id="name" type="text" class="form-control" name="name" value=""  autofocus>
               </div>
              </div>

              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Email</label>
                <div class="col-md-6">
                  <input id="name" type="email" class="form-control" name="name" value=""  autofocus>
               </div>
              </div>

              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Date of Birth</label>
                <div class="col-md-6">
                  <input id="name" type="text" class="form-control" name="dob" value=""  autofocus>
               </div>
              </div>

              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Gender</label>
                <div class="col-md-6 radio-align">
                  Male<input id="male" name="gender" value="male" type="radio" class="form-control">
                  Female<input id="female" name="gender" value="female" type="radio" class="form-control">
               </div>
              </div>

              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Password</label>
                  <div class="col-md-6">
                    <input id="name" type="password" class="form-control" name="password" value=""  autofocus>
                </div>
              </div>

              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                  <div class="col-md-6">
                    <input id="name" type="password" class="form-control" name="password-confirm" value=""  autofocus>
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary mb-5">
                        Register
                    </button>
                </div>
              </div>

            </form>
            
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