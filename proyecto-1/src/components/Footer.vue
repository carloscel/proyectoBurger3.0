<template>
    <div class="container-footer">
        <div>
            <div class="links-footer">
                <ul>
                    <li><a href="">Locales</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Atencion al Cliente</a></li>
                    <li><a href="">Preguntas Frecuentes</a></li>
                </ul>
                <ul>
                    <li><a href="">Politicas de Datos Personales</a></li>
                    <li><a href="">Empresas y socios estrategicos</a></li>
                    <li><a href="">Encargados del tratamiento</a></li>
                    <li><a href="">Derechos ARCD</a></li>
                </ul>
            </div>
            <div>
                <img src="https://www.bembos.com.pe/skin/frontend/janaq/default/images/footer/logo_write.svg" alt="">
            </div>
        </div>
        <div>
            <div class="iconos-footer"></div>
            <div class="subtitulo-footer">
                <span>FORMAS DE PAGO</span>
            </div>
            <div class="box-tarjeta">
                <img src="https://www.bembos.com.pe/skin/frontend/janaq/default/images/footer/visa.svg" alt="">
                <img src="https://www.bembos.com.pe/skin/frontend/janaq/default/images/footer/mastercard.svg" alt="">
                <img src="https://www.bembos.com.pe/skin/frontend/janaq/default/images/footer/american.svg" alt="">

            </div>
            <div class="box-safety">
                <img src="https://www.bembos.com.pe/skin/frontend/janaq/default/images/footer/safety.svg" alt="">
            </div>
        </div>
        <div>
            <div class="box-form">
                <input type="text" placeholder="Tu correo">
                <button><span class="enviar">Enviar</span></button>
            </div>
            <div box-reclamaciones></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>
.container-footer{
    
    width: 100%;
    height: 350px;
    background: #193694;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
}
.container-footer > div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px 20px;
}
.links-footer{
    display: flex;

}
.links-footer ul li{
    list-style: none;
    
}
.links-footer ul li a{
    text-decoration: none;
    color: #ffffff;
    font-family: 'Oswald', sans-serif;
    
}
.icon-facebook{
    color: #ffffff; 
}
.subtitulo-footer span{
    color: #ffffff;
}

.box-form input{
    border-radius: 8px;
}


</style>