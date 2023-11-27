<template>
    <div class="container">
       <div class="row">
         <div v-for="(vuelo, index) in vuelos" :key="index" class="col-md-15">
           <div class="card mb-4 shadow-sm">
             <div class="card-body">
               <h5 class="card-title">{{ vuelo.title }}</h5>
               <p class="card-text">{{ vuelo.description }}</p>
               <div class="d-flex justify-content-between align-items-center">
                 <div class="btn-group">
                   <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                   <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                 </div>
                 <div class="d-flex justify-content-between">
                   <small class="text-muted">{{ vuelo.date }}</small>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
    </div>
</template>

<script>
export default{
    name: 'Home-comp',
    props: ['vuelos']
        // vuelos:{
        //     type: Array,
        //     required: true
        // }
}
</script>

