<template>
  <div>
    <nav class="navbar">
      <router-link to="/" class="logo">ScamFree</router-link>
      <div class="nav-links">
        <router-link to="/Restaurantes" class="nav-link">Restaurante</router-link>
        <router-link to="/Bares" class="nav-link">Bares</router-link>
      </div>
      <div class="container-fluid">
        <input type="button" value="ingrese">
  </div>
    </nav>
    <router-view class="container" />
  </div>
  <footer>
  <p>Author: las blackpink in your areas<br>
  <a href="005coriente@example.com">005corriente@example.com</a></p>
</footer>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Estilos para la barra de navegación */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: linear-gradient(rgb(39, 4, 195), rgb(251, 251, 251));
  color: #757070;
}

.logo {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
  transition: transform 0.3s;
  font-family:cursive;

}

.logo:hover {
  transform: scale(1.1);
}

.nav-links {
  display: flex;
  transition: transform 0.3s;
}

.nav-link {
  position: relative;
  margin-left: 10px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s;
}

.nav-link:hover {
  transform: translateY(-3px);
  color: #c903e3;
}

.dropdown-content {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 200px;
  padding: 10px;
  background-color: #f00;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0s linear 0.3s;
}

.nav-link:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s;
}

.container {
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  color: #333;
  font-size: 1.2em;
}

.container h2 {
  margin: 0;
  font-size: 2em;
  color: rgb(255, 255, 255);
  background-color: rgb(162, 84, 162);
  padding: 10px 20px;
  font-size: 30px;
  font-weight: 600;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.container ul {
  margin: 10px 0 0 0;
  padding: 0;
  background: #9c39a1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
}

.container li {
  margin: 5px 0;
  font-size: 0.8em;
  color: #eddbed;
  list-style: none;
  padding: 10px;
  width: 100%;
  background: 0 5px 25px rgba(0,0, 0,.1);
  transition: transform 0.5s;
  border-radius: 10px;
}
.container li:hover{
transform: scale(1.1);
z-index: 100;
background: #c903e3;
color: #fff;
box-shadow: 0 5px 25px rgba(0,0, 0,.2);
}

.details {
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  color: #333;
  font-size: 1.2em;
}

.details h2 {
  margin: 0;
  font-size: 2em;
  color: rgb(0, 0, 0);
}

.details ul {
  margin: 10px 0 0 0;
  padding: 0;
}

.details li {
  margin: 5px 0;
  font-size: 0.8em;
  color: #666;
}
input{
  padding: 9px 20px;
  border-radius: 12px;
  border-color: #c903e3;
}
.button{
  border:none;
  border-radius: 12px;
  padding: 9px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background: #c057ed;
  color: #eddbed;
}
button:hover{
transform: scale(1.1);
z-index: 100;
background: #9b0dad;
color: #fff;
box-shadow: 0 5px 25px rgba(0,0, 0,.2);
}
footer {
  text-align: center;
  padding: 3px;
  background-color: rgb(211, 210, 223);
  color: white;
}

</style>

