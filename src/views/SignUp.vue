<template>
    <div class="container mb-5">
        <div class="card">
            <div class="card-header bg-primary">
                <h1 class="text-center mt-3 text-light">Registro</h1>
            </div>
            <div class="card-body">
                <form id="registro" class="mt-5" @submit="checkForm">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="d-flex">
                                <div>
                                    <div class="form-group">
                                        <label for="tipoDocumento">Tipo de documento de identidad</label>
                                        <select class="form-control" id="tipoDocumento" required v-model="tipo">
                                            <option>CC (Cédula de Ciudadanía)</option>
                                            <option>CE (Cédula de Extranjería)</option>
                                            <option>TI (Tarjeta de Identidad)</option>
                                            <option>PPN (Pasaporte)</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="flex-grow-1" style="padding-left: 10px;">
                                    <div class="form-group">
                                        <label for="numeroDocumento">Numero de documento</label>
                                        <input type="text" class="form-control" v-model="numeroDoc" id="numeroDocumento" required>
                                    </div>
                                </div>
                            </div>                            
                            <div class="form-group">
                                <label for="nombre">Nombre</label>
                                <input type="text" class="form-control" id="nombre" v-model="nombre" required>
                            </div>
                            <div class="form-group">
                                <label for="correo">Correo</label>
                                <input type="email" class="form-control" id="correo" v-model="correo" required placeholder="Este será su usuario">
                            </div>
                            <div class="d-flex">
                                <div class="flex-grow-1">
                                    <div class="form-group">
                                        <label for="Contraseña">Constraseña</label>
                                        <input type="password" class="form-control" v-model="contraseña" id="numeroDocumento" required>
                                    </div>
                                </div>
                                <div class="flex-grow-1" style="padding-left: 10px;">
                                    <div class="form-group">
                                        <label for="Confirmacion">Confirme la Contraseña</label>
                                        <input type="password" class="form-control" v-model="contraseña1" id="numeroDocumento" required>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="pais">Pais</label>
                                <input type="text" class="form-control" v-model="pais" id="pais" required>
                            </div>
                            <div class="form-group">
                                <label for="ciudad">Ciudad</label>
                                <input type="text" class="form-control" id="ciudad" v-model="ciudad" required>
                            </div>
                            <div class="form-group">
                                <label for="direccion">Direccion</label>
                                <input type="text" class="form-control" id="direccion" v-model="direccion" required>
                            </div>
                            <div class="form-group">
                                <label for="numeroTelefono">Numero de telefono</label>
                                <input type="text" class="form-control" v-model="numeroTel" id="numeroTelefono" required>
                            </div>
                            <button id="registro" type="submit" class="btn btn-primary">Registrar</button>
                            <button id="volver" type="button" @click="navigateToInicio" class="btn btn-danger">Volver</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sign-up',

  methods:{
    checkForm: function (e){
            const tipo = this.tipo;
            const numeroDoc = this.numeroDoc;
            const nombre = this.nombre;
            const correo = this.correo;
            const contraseña = this.contraseña;
            const contraseña1 = this.contraseña1;
            const pais = this.pais;
            const ciudad = this.ciudad;
            const direccion = this.direccion;
            const numeroTel = this.numeroTel;

            if(tipo && numeroDoc && nombre && correo && contraseña && contraseña1 && pais && ciudad && direccion && numeroTel){
                if(contraseña == contraseña1){
                    this.$router.push('/principal');
                }
            }else {
                alert('Por favor, complete todos los campos.');
            } 
         
            e.preventDefault();
        },
    navigateToInicio(){
        this.$router.push('/inicio');
    }
  }
}
</script>
<style>
.form-group{
    margin-bottom: 20px;
}
#registro, #volver {
    margin-top: 35px;
    margin-left: 15px;
}

button:after {
    content: "";
    display: table;
    clear: both;
}
</style>