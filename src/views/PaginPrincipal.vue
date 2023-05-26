<template>
    <div class="max-contenedor">
        <div class="image-grande">
            <img src="../assets/Cartagena2.jpg" alt="Imagen de Cartagena">
            <div class="centrado">CARTAGENA</div>
            <div class="centrado1">Disfruta tu estadia conociendo estas curiosidades, evita ser estafado</div>
            <div class="centrado2">
                <router-link to="/Curiosidades" class="button">Saber mas</router-link>
            </div>
        </div>  
        <div class="container2">
            <div class="fotografia">
                <img class="imagengra" src="../assets/turistas.jpg" alt="imapicture">
            </div>
            <div class="fotografia">
                <p class="texto1"> Nosotros buscamos que la calidad de la visita de los turistas a cartagena mejore al momento de informalos con esta plicacion web, donde veran distintas curiosidades y lugares que pueden llegar a visitar y lo que pueden encontrar previamente ahi.</p>
            </div>
        </div> 
    </div>
    
</template>

<script>
import PaginaCuriosidades from './PaginaCuriosidades.vue';

export default {
    name:"PaginPrincipal",
};
</script>
<style>
*{
    padding: 0;
}
/* Images */
.image-grande {
    width: 100%;
    height: 100%;
}

.image-grande img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.centrado{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(255, 255, 255, 0.676);
    font: oblique bold 800% cursive;
}
.centrado1{
    position: absolute;
    top: 70%;
    left: 60%;
    transform: translate(-80%, -80%);
    color: rgb(255, 255, 255);
    font-family:cursive;
    font-size: 100%;
    text-align:center;
}
.centrado2{
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-80%, -80%);
    color: rgb(255, 255, 255);
    font-family:cursive;
    font-size: 100%;
}
.button{
    border: none;
    border-radius: 12px;
    padding: 9px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    background: #9c39a1;
    color: #eddbed;
}
.button:hover{
    transform: scale(1.1);
    z-index: 100;
    background: #9b0dad;
    color: #fff;
    box-shadow: 0 5px 25px rgba(0,0, 0,.2);
}
.container2{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    top:668px;
    background:linear-gradient(rgba(0, 0, 255, 0.547),rgba(155, 128, 223, 0.621));
    height: 575px;
    padding: 0;
}
.fotografia{
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    padding:0 20px;
}
.imagengra{
    height: 390px;
    width: 523px;
    margin: 0 auto;
    display: flex;
    border-radius: 50%;
    border-color: black;
    
}
.texto1{
    font-family:'Times New Roman', Times, serif;
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 29px;
    
}
</style>