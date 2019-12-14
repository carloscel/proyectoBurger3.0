<template>
    <div class="header">
    <div class="headerSuperior">
        <div class="headerLogo"><img src="https://www.bembos.com.pe/skin/frontend/janaq/default/images/logo_bembos.svg" alt="Bembos"></div>
        <p class="headerNumero">
          <img src="https://www.bembos.com.pe/skin/frontend/janaq/default/images/header/fono.svg">
          <b>(01)419-1919</b>
          </p>
    </div>
    <div class="headerInferior">
      <div class="menus">
        <a class="menuIndividual" href="">MENÚ</a>
        <a class="menuIndividual" href="">BENEFICIOS</a>
        <a class="menuIndividual" href="">PROMOCIONES</a>
        <a class="menuIndividual" href="">LOCALES</a>
        <a class="menuIndividual" href="">CUMPLEAÑOS</a>
        <a class="menuIndividual" href="">NOSOTROS</a>
      </div>

      <div class="compraOnline">
        <img src="https://www.bembos.com.pe/skin/frontend/janaq/default/images/header/cart.svg">
        <P class="pideOnline">PIDE ONLINE</P>
      </div>
    </div>
  
  </div>
</template>
<script>
export default {
    name:'Header'
}
</script>

<style>



.headerSuperior{
  width: 100%;
  height: 70px;
  border: 1px solid #26419a;
  background: #26419a;
  display: flex;
  justify-content: space-between;
  align-content: center;
  
}

.headerLogo{
  margin: auto 110px;
}

.headerNumero{
  font-family: 'Sulphur Point', sans-serif;
  color: white;
  font-size: 20px;
  margin: auto 150px;
}

.headerInferior{
  width: 100%;
  height: 70px;
  border: 1px solid #26419a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.menus{
  width: 700px;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 90px;
  font-family: 'Roboto Mono', monospace;
  font-family: 'Fjalla One', sans-serif;
  font-size: 19px;
}

.menuIndividual{
  text-decoration: none;
  color: #26419a;
}

.compraOnline{
  width: 160px;
  height: 50px;
  display: flex;
  align-items: center;
  background: #FFB500;
  justify-content: center;
  border-radius: 40px;
  margin: 90px;
}

.pideOnline{
  font-family: 'Roboto Mono', monospace;
  font-family: 'Fjalla One', sans-serif;
  font-size: 17px;
  margin: 8px;
  color: #26419a;
  
}
</style>