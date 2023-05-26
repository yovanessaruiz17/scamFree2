<template>
    <div class="granContenedor">
        <p class="texto">La comida típica de Cartagena, Colombia, es una fusión de sabores africanos, indígenas y españoles. Destaca por su variedad de platos de mariscos, arroces y guisos. Algunos de los platos emblemáticos incluyen el arroz con coco, un arroz cremoso cocinado en leche de coco con pescado o mariscos, y el sancocho de pescado, un guiso reconfortante preparado con pescado fresco y vegetales. También son populares el ceviche de camarón, el arroz con mariscos y las arepas de huevo. En cuanto a los postres, destacan el arroz con leche, el cocada y los buñuelos. La comida cartagenera refleja la diversidad cultural de la ciudad y ofrece una experiencia culinaria tropical y sabrosa.</p>
        <div class="tarjetas">
            <div class="card">
                <img src="../assets/ArepadeHuevo.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h2><b>La Señora Arepa de Huevo</b></h2>
                </div>
            </div>
            <br>
            <div class="card">
                <img src="../assets/empanada.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h2><b>La Señora empanada</b></h2>
                </div>
            </div>
            <br>
            <div class="card">
                <img src="../assets/carimañola.png" alt="Avatar" style="width:100%">
                <div class="container">
                    <h2><b>La Señora Carimañola</b></h2>
                </div>
            </div>
            <br>
            <div class="card">
                <img src="../assets/buñuelos.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h2><b>Los señores buñuelos</b></h2>
                </div>
            </div>
            <br>
            <div class="card">
                <img src="../assets/arrozMarinero.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h2><b>El Señor Arroz Marinero</b></h2>
                </div>
            </div>
            <br>
            <div class="card">
                <img src="../assets/tamal.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h2><b>El Señor Tamal</b></h2>
                </div>
            </div>
            <br>
            <div class="card">
                <img src="../assets/ArrozCocoPez.jpg" alt="Avatar" style="width:100%">
                <div class="container">
                    <h2><b>El Señor Arroz con Coco y Mojarra Frita</b></h2>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>
.granContenedor{
    background:linear-gradient(rgb(48, 196, 255), rgb(255, 199, 59)) ;
}
.texto{
    text-align: center;
    font-family: cursive;
    font-size:20px;
}
.card:hover{
    transform: scale(1.1);
    z-index: 100;
    
}
</style>