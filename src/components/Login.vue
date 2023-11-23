<template>
    <div class="container h-100">
       <div class="row align-items-center h-100">
         <div class="col-6 mx-auto">
            <div class="card" >
                <div class="col-10 mx-auto">
                    <img src="@/assets/avion.jpg" class="card-img" style="height: 15rem; border-radius: 10px;"  alt="Un avion de tema"/>
                </div>
                <div class="jumbotron">
                    <div class="card-header">
                        <h1 class="display-4 text-center">Ingreso</h1>
                    </div>
                    <div class="card-body">
                        <form>
                        <div class="form-group">
                            <label for="username">Usuario</label>
                            <input type="email" class="form-control" id="username" aria-describedby="usernameHelp" placeholder=" Dirección del correo electronico">
                        </div>
                        <div class="form-group">
                            <label for="password">Contraseña</label>
                            <input type="password" class="form-control" id="password" placeholder="Contraseña">
                        </div>
                            <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                            <button type="button" class="btn btn-link">Crear una cuenta</button>
                        </form>
                    </div>
                </div>
           </div>
         </div>
       </div>
    </div>
   </template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login-comp',
}
</script>

<style scoped>
.container{
    margin-top: 20px;
    margin-bottom: 20px;
    
}
.form-group{
    margin-top: 20px;
    margin-bottom: 20px;
}

img{
    margin-top: 20px;
    margin-bottom: 20px;
}

</style>