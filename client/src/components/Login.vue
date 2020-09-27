<template>
  <div class="mtop">
    <div class=" row justify-content-center">
      <div class="col-md-8">
      <div class="card">
          <div class="card-header text-left">Login</div>
          <div class="card-body">
            <form>
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                <div class="col-md-6">
                  <input id="name" type="text" class="form-control" name="name" value=""  autofocus>
               </div>
              </div>

              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Password</label>
                  <div class="col-md-6">
                    <input id="name" type="password" class="form-control" name="password" value=""  autofocus>
                </div>
              </div>
              
              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary mb-5">
                        Login
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