<template>
  <div>
       <b-form-input v-model="search">  </b-form-input>
     
  </div>
</template>

<script>
 
import _ from 'lodash';

export default {
  name: 'Search',
 
  props: {
    msg: String
  },
  data() {
    return {
      search : '',
    }
  },
  watch: {
    
    search: _.debounce(async function (value){
      console.log(value);
      const route = {name: 'browse'}

      if (this.search !== ''){
        route.query = {
          search : this.search
        }
      }
      this.$router.push(route);
    }, 500),

    /**
     * allow to watch any query change  in the address bar..
     */
    "$route.query.search":{
      immediate: true,
      handler(value){
        this.search = value
      }
    }
  },
}
</script>


