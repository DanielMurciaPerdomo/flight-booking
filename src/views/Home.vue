<template>
    <div class="container">
       <div class="row">
         <div v-for="(item, index) in items" :key="index" class="col-md-4">
           <div class="card mb-4 shadow-sm">
             <div class="card-body">
               <h5 class="card-title">{{ item.title }}</h5>
               <p class="card-text">{{ item.description }}</p>
               <div class="d-flex justify-content-between align-items-center">
                 <div class="btn-group">
                   <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                   <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                 </div>
                 <small class="text-muted">{{ item.date }}</small>
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
    props:{
        items:{
            type: Array,
            required: true
        }
    }
}
</script>