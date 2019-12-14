<template>
<div>
<Header></Header>
<div class="cocinaMayor">
 
    <div class="cocina">
        
        <div class="ordenes">
            <div class="pedido" v-for="arrayPedido in arrayPedidos" :key="arrayPedido.id" >
              <p class="titulo" @click="pedidoHecho">{{arrayPedidos[0].numPedido}}</p>
              <p>{{arrayPedidos[0].tipoDePan}}</p>
              <p>{{arrayPedidos[0].tipodequeso}}</p>
              <p>{{arrayPedidos[0].complemento}}</p>
              <p>{{arrayPedidos[0].bebida}}</p>
            </div>
        </div>
        
    </div>
</div>
<Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name:'Cocina',
  components:{Header,Footer},
  data(){
    return{
      arrayPedidos:[
        {numPedido:'Pedido',
         tipoDePan:'Pan frances',
         tipodequeso:'chedar',
         complemento:'extra Papas',
         bebida:'inca Kola'},
        {numPedido:'Pedido',
        tipoDePan:'Pan frances',
         tipodequeso:'chedar',
         complemento:'extra Papas',
         bebida:'inca Kola'},
         {numPedido:'Pedido',
          tipoDePan:'Pan frances',
         tipodequeso:'chedar',
         complemento:'extra Papas',
         bebida:'inca Kola'},
         {numPedido:'Pedido',
           tipoDePan:'Pan frances',
         tipodequeso:'chedar',
         complemento:'extra Papas',
         bebida:'inca Kola'},
         {numPedido:'Pedido',
          tipoDePan:'Pan frances',
         tipodequeso:'chedar',
         complemento:'extra Papas',
         bebida:'inca Kola'},
         {numPedido:'Pedido',
          tipoDePan:'Pan frances',
         tipodequeso:'chedar',
         complemento:'extra Papas',
         bebida:'inca Kola'}

      ]
    }
  },
  methods: {
    pedidoHecho(e){
       if(e.target.classList.contains('titulo')){
        e.target.parentElement.innerHTML="Pedido Atendido";  
        console.log(e.target)
      
    }

  }
  
 }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.ordenes{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.pedido{
  width: 200px;
  height: 200px;
  border: 1px solid #FFB500;
  border-radius: 7px;
  margin: 20px;
}

.titulo{
  font-family: 'Oswald', sans-serif;
  font-size: 17px;
  width: 190px;
  height: 33px;
  border: 1px solid #FFB500;
  border-radius: 7px;
  color: #26419a;
  margin: 7px auto;
}

.cocina{
  width: 800px;
  min-height: 500px;
  border: 1px solid #26419a;
  border-radius: 7px;
  margin: 40px;
}

.cocinaMayor{
  display: flex;
  justify-content: center;
}
</style>

