import Api from '@/services/Api';

export default{
  // getAllInstructionGuides(){
  //   return Api().get('instructionguides');
  // },

getAllJobs() {
    return Api().get('jobs');
},

   
   
}