<template>
    <div class="container">
        <div class="image-grande">
            <img src="../assets/Cartagen1.jpg" alt="Imagen de Cartagena">
            <div class="centrado3">A TENER EN CUENTA</div>
            <div class="centrado4">Si tienes pensado visitar Cartagena de indias debes tener en ceunta los siguientes puntos...</div>
        </div>
        <div class="tarjetas">
            <div class="card">
                <img src="../assets/guiat.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>Siempre pasear con guia</b></h4>
                    <p>Pasear con un guía turístico ofrece conocimiento local y recomendaciones personalizadas, optimizando tu tiempo y brindando acceso a experiencias exclusivas. Además, garantiza seguridad, comodidad y facilita la comprensión cultural en tu viaje</p>
                </div>
            </div>
            <br>
            <div class="card">
                <img src="../assets/masajes.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>Preguntar antes de tomar el servicio</b></h4>
                    <p>Es recomendable que preguntes antes de tomar cualquier servicio sea en lugares publicos o privados para mantenerte al tanto del costo total y no terminar sorprendido con el total.</p>
                </div>
            </div>
            <br>
            <div class="card">
                <img src="../assets/photo-1553729459-efe14ef6055d.avif" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>Existe dos tipos de precio del producto</b></h4>
                    <p>en la mayoria de lugares siempre encontraras dos tipos de precio para los productos o servicios que brindan, el de turiste y el de local, la diferencia es que el de turiste depende del alsa o baja del dolar, por lo que puede variar el precio.</p>
                </div>
            </div>
            <br>
            <div class="card">
                <img src="../assets/masajes.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>No aceptar pruebas gratis</b></h4>
                    <p>Esto pasa mas en las playas donde los masajistas suelen dar "pruebas gratis" y luego de la prueba te cobran alegando que ya la prueba habia pasado. Hay que tener cuidado con este tipo de situaiones.</p>
                </div>
            </div>
            <br>
            <div class="card">
                <img src="../assets/explorar.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>Consultar con agencias de turismo</b></h4>
                    <p>Si quieres explorar sitios de la ciudad o visitar sus islas mas cercanas es recomendable consultar en varias agencias turisticas buscando los precios que se ajusten a su presupuesto.</p>
                </div>
            </div>
            <br>
            <div class="card">
                <img src="../assets/palenqueras.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>Fotos con palenqueras</b></h4>
                    <p>antes de pedir a una foto a una palenquera siempre consulta el precio y si puede regatea. Siempre hazlo antes. </p>
                </div>
            </div>
            <br>
            <div class="card">
                <img src="../assets/comida.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>Conoce la comida mas consumida en la ciudad</b></h4>
                    <div class="boton">
                        <router-link to="/Fritos" class="button">Que se te antoja?</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
.centrado3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(106, 204, 191, 0.676);
    font: oblique bold 400% cursive;
    text-align: center;
}

.centrado4 {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255);
    font-family: cursive;
    font-size: 150%;
    text-align: center;
}
.tarjetas {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    max-width: 800px;
    margin: auto;
    text-align: center;
}

.tarjetas .card {
    border: 0;
    padding: 10px;
}

.tarjetas .card img {
    width: 100%;
}
.tarjetas .card .card-content {
    margin-top: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.tarjetas .card h4 {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
}

.tarjetas .card p {
    margin: 10px 0;
}
@media (max-width: 768px) {
    .tarjetas {
        grid-template-columns: repeat(2, 1fr);
    }
}
.button{
    border: none;
    border-radius: 12px;
    text-decoration: none;
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
</style>