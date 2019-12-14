<template>
<div>
    <Header></Header>
    <div class="area-logeo">
        <form class="formulario">
        
        <img src="https://mott.pe/noticias/wp-content/uploads/2013/10/Bembos_logo15.jpg" height="40px" alt="">
        <div class="contenedor">
        
            <div class="input-contenedor">
            <i class="fas fa-user icon"></i>
            <input type="text" placeholder="Usuario" id="usuarioId">
            </div>
            
            <div class="input-contenedor">
            <i class="fas fa-key icon"></i>
            <input type="password" placeholder="Contraseña" id="contraseñaId">
            
            </div>
            <input type="submit" value="INGRESAR" class="button" >
            
            
            
        </div>
        </form>
    </div>
  
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    name:'Login',
    components:{Header},
    data(){
        return{
        logeo:[{usuarioTienda:'carlos',
                contraseñaTienda:'pachatienda',
                usuarioCocina:'jhon',
                contraseñaCocina:'pachacocina'
                }]
                }
    },
    methods: {
        validarUsuario(){
            let usuarioId=document.getElementById('usuarioId').value;
            let contraseñaId=document.getElementById('contraseñaId').value;
            console.log(this.logeo[0].usuarioTienda===usuarioId)

  
            if(this.logeo[0].usuarioTienda===usuarioId &&  this.logeo[0].contraseñaTienda===contraseñaId){
                window.location.href ="http://localhost:8080/tienda"
            }

            else{ 
                 if(this.logeo[0].usuarioCocina===usuarioId && this.logeo[0].contraseñaCocina===contraseñaId){
                window.location.href ="http://localhost:8080/cocina"
            }

                else {
                    alert("El usuario o contraseña es incorrecto")
                }

            }
           
        }
    },
    created(){
        this.validarUsuario()
    }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.area-logeo {
    font-family: Arial, Helvetica, sans-serif;
  
}

.contenedor{
    width: 100%;
    padding: 15px;
}
.formulario{
    background: #fff;
    margin-top: 150px;
    padding: 3px;
}
h1{
    text-align: center;
    color: #1a2537;
    font-size: 40px;
}
input[type="text"],
input[type="password"]{
    font-size: 20px;
    width: 82%;
    padding: 10px;
    border: none;
}
.input-contenedor{
    margin-bottom: 15px;
    border: 1px solid #aaa;
}
.icon{
    min-width: 50px;
    text-align: center;
    color: #999;
}
.button{
    border: none;
    width: 100%;
    color: white;
    font-size: 20px;
    background:  #21388b;
    padding: 15px 20px;
    border-radius: 35px;
    cursor: pointer;
}
.button:hover{
    background: cadetblue;
}
p{
    text-align: center;
}
.link{
    text-decoration: none;
      color: #1a2537;
    font-weight: 600;
}
.link:hover{
     color: cadetblue;
}
@media(min-width:768px)
{
    .formulario{
        margin: auto;
        width: 500px;
        margin-top: 150px;
        border-radius: 2%;
    }
}
</style>