<template >
<div>
<Header></Header>
<div class="cajaMayor">

    <div class="tienda">

    <div @click="agregarPedido">

      <h2 class="promociones">PANES</h2>
      <div class="itemsPanes">

        <div class="itemPan" v-for="arrayPane in arrayPanes" :key="arrayPane.id">
           
          <p class="claseNombre">{{arrayPane.name}}</p>
          <p class="clasePrecio">S/. {{arrayPane.price}}</p>
          <p class="comprar">COMPRAR</p>
        </div>
        
      </div>
      
      <h2 class="promociones">CARNES</h2>
      <div class="itemsCarnes">
    
        <div class="itemCarne" v-for="arrayCarne in arrayCarnes" :key="arrayCarne.id">
        
          <p class="claseNombre">{{arrayCarne.name}}</p>
          <p class="clasePrecio">S/. {{arrayCarne.price}}</p>
          <p class="comprar">COMPRAR</p>
        </div>
      </div>

      <h2 class="promociones">PAPAS</h2>
      <div class="itemsPapas">
    
        <div class="itemPapa" v-for="arrayPapa in arrayPapas" :key="arrayPapa.id">
         
          <p class="claseNombre">{{arrayPapa.name}}</p>
          <p class="clasePrecio">S/. {{arrayPapa.price}}</p>
          <p class="comprar">COMPRAR</p>
        </div>
      </div>

      <h2 class="promociones">BEBIDAS</h2>
      <div class="itemsBebidas">
    
        <div class="itemBebida" v-for="arrayBebida in arrayBebidas" :key="arrayBebida.id">
           
          <p class="claseNombreBebida">{{arrayBebida.name}}</p>
          <p class="clasePrecio">S/. {{arrayBebida.price}}</p>
          <p class="comprar">COMPRAR</p>
        </div>
      </div>
      

    </div>
    

    <div id="guardarOrdenes" class="guardarOrden">
      <p class="tituloCajaOrdenes">Ordenes Pedidas</p>

      <div class="ordenesPedidas" v-for="OrdenCogida in OrdenCogidas" :key="OrdenCogida.id">
          <div>
              <p>{{OrdenCogida.tiposPan}}</p>
              <p>{{OrdenCogida.tiposCarne}}</p>
              <p>{{OrdenCogida.tiposPapas}}</p>
              <p>{{OrdenCogida.tiposBebidas}}</p>
          </div>
          <span @click="eliminar" >
            <img class="btn" src="https://image.flaticon.com/icons/png/512/1632/1632602.png" width="20px" alt="">
          </span>
      </div>

    </div>

  </div>
</div> 
<Footer></Footer> 
</div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name:'Tienda',
  components:{Header,Footer},

  data() {
    return {
      arrayPanes:[],
      arrayCarnes:[],
      arrayPapas:[],
      arrayBebidas:[],
      OrdenCogidas:[]
    }
  },

  methods: {
    ingresarApi(){
      axios.get('https://api.myjson.com/bins/1008dw')
      .then(response=>{
        this.arrayPanes=response.data[0].category01
        this.arrayCarnes=response.data[0].category02
        this.arrayPapas=response.data[0].category06
        this.arrayBebidas=response.data[0].category07
         console.log(response.data[0])
      })
      
    },

        
    agregarPedido(e){
          class datosOrden{
          constructor(tiposPan,tiposCarne,tiposPapas,tiposBebidas){
            this.tiposPan=tiposPan;
            this.tiposCarne=tiposCarne;
            this.tiposPapas=tiposPapas;
            this.tiposBebidas=tiposBebidas;
            }
        }
       
        let seleccionarOrden=e.target.parentElement;
        let elemPnombre=seleccionarOrden.querySelector('.claseNombre').textContent;
        let elemPprecio=seleccionarOrden.querySelector('.clasePrecio').textContent;
        let orden=new datosOrden(elemPnombre,elemPprecio)
   

        this.OrdenCogidas.push(orden);
     
        },

    eliminar(e){
      if(e.target.classList.contains('btn')){
        e.target.parentElement.parentElement.remove();  
        console.log(e.target)
      }
      
    }  
},

  created() {
    this.ingresarApi()
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.cajaMayor{
  width: 100%;
  display: flex;
  justify-content: center;
  
}

.tienda{
  width: 1000px;
  min-height: 2500px;
  border: 1px solid #26419a;
  border-radius: 7px;
  margin: 20px;
}

.promociones{
  width: 990px;
  height: 50px;
  border: 1px solid #26419a;
  border-radius: 7px;
  margin: 4px;
  background: #FFB500;
  color: #26419a;
  padding-top: 7px;
}

.itemsPanes{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1000px;
  min-height: 400px;
}

.itemsCarnes{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1000px;
  min-height: 800px;
}

.itemsPapas{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1000px;
  min-height: 400px;
}

.itemsBebidas{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1000px;
  height: 800px;
}


.itemPan{
  width: 230px;
  height: 350px;
  
  border-radius: 10px;
  margin: 15px;
  background-image: url(https://www.bembos.com.pe/media/catalog/product/cache/1/small_image/400x684/9df78eab33525d08d6e5fb8d27136e95/h/a/hamburguesa-bembos-clasica-base.webp);
  background-size: cover;
  
}

.itemCarne{
  width: 230px;
  height: 350px;
  
  border-radius: 10px;
  margin: 15px;
  background-image: url(https://www.bembos.com.pe/media/catalog/product/cache/1/small_image/400x684/9df78eab33525d08d6e5fb8d27136e95/h/a/hamburguesa-bembos-extrema-base.webp);
  background-size: cover;
}

.itemPapa{
  width: 230px;
  height: 350px;
  
  border-radius: 10px;
  margin: 15px;
  background-image: url(https://www.bembos.com.pe/media/catalog/product/cache/1/small_image/400x684/9df78eab33525d08d6e5fb8d27136e95/p/a/papas-fritas-base.webp);
  background-size: cover;
}

.itemBebida{
  width: 230px;
  height: 350px;
  border: 1px solid #FFB500;
  border-radius: 10px;
  margin: 15px;
  background-image: url(https://www.bembos.com.pe/media/catalog/product/cache/1/small_image/400x684/9df78eab33525d08d6e5fb8d27136e95/i/n/inca-kola-personal.webp);
  background-size: cover;
}

.claseNombreBebida{
  font-family: 'Oswald', sans-serif;
  font-size: 23px;
  width: 200px;
  height: 33px;
  border-radius: 7px;
  color: #26419a;
  margin: 10px auto;
  
}

.claseNombre{
  font-family: 'Oswald', sans-serif;
  font-size: 23px;
  width: 200px;
  height: 33px;
  border-radius: 7px;
  color: white;
  margin: 10px auto;
}

.clasePrecio{
  font-family: 'Oswald', sans-serif;
  font-size: 23px;
  width: 90px;
  height: 35px;
  background: #26419a;
  border-radius: 20px;
  color: white;
  margin: 15px;
}

.comprar{
  font-family: 'Oswald', sans-serif;
  font-size: 23px;
  width: 230px;
  height: 45px;
  border-radius: 7px;
  color: white;
  background: #26419a;
  margin-top: 215px;
  
}

.guardarOrden{
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 7px;
  position: fixed;
  overflow-x: hidden;
}

.ordenesPedidas{
  display: flex;
  width: 150px;
  height: 35px;
  border: 1px solid black;
  border-radius: 7px;
  color: #26419a;
  font-family: 'Oswald', sans-serif;
  margin: 5px;
  padding: 3px;
  justify-content: space-between;

}

.tituloCajaOrdenes{
  color: #26419a;
  font-family: 'Oswald', sans-serif;
  font-size: 17px;
}




</style>