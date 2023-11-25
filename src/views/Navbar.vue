<template>
  <div class="container h-100">
    <div class="row align-items-center h-100">
      <div class="col-20 mx-auto">
        <div class="card bg-primary">
          <div class="card-body">
            <nav class="nav nav-pills nav-fill">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              <a class="nav-link text-light" href="#">Horarios de vuelos</a>
              <a class="nav-link text-light" href="#">Link</a>
              <a class="nav-link text-light" aria-disabled="true">Disabled</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Nav-bar',
}


</script>

<style>
.btn-info{
  margin-right: 10px;
}
</style>