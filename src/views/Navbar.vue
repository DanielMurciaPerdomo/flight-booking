<template>
  <div class="container h-100">
    <div class="row align-items-center h-100">
      <div class="col-20 mx-auto">
        <div class="card text-bg-primary">
          <div class="card-body p-0">
            <nav class="navbar navbar-expand-lg bg-primary">
              <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">Inicio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-light" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item text-primary" href="#">Action</a></li>
                        <li><a class="dropdown-item text-primary" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item text-primary" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-info" type="submit">Search</button>
                  </form>
                </div>
              </div>
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
.my-narbar-card{
  margin-bottom: 20px;
}
</style>