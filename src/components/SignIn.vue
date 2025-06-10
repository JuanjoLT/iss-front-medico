
/* 
* En template se define el login screen, label para los textos que van sobre los input(user y pass), van agrupados en login_display_group para que sus posicionamientos y tamaños se calculen en referencia a la clase superior.

* padding es para agregar espacio hacia los lados dentro del elemento, esto agranda un boton para que use más espacio.

* margin es para agregar espacio fuera del elemento, esto haria que un boton coloque más espacio vacío fuera de si mismo para tener una separación más grande, como quien agrega un "\n".

* flex es una categoria de tipo bloque que permite ordenar los elementos mostrados, se establece como column para que lo haga en vertical
* align-items es para posicionarlos como se necesita, flex start es izquierda.

*/


const request = ref(0)


<template>
  <h1 class="page_title"> Login Médico / Funcionario </h1>
  <div class="container-flex">
    <div class="login_display_group">
      <p>Ingrese con las credenciales dadas por su administrador.</p>
      <label for="username">Usuario</label>
      <input id="username">
      <label for="password">Contraseña</label>
      <input id="password">
      <button class="login_button">Ingresar</button>
      <div class="recovery-links">
        <label href="recoverylink" class="label_rec1">Olvidé mi contraseña</label>
        <button class="checkbox" @click="remember_me()"></button>
        <label class="label_rec2">Recuérdame</label>
      </div>
      </div>
  </div>
</template>


<style>

body {
    background-color: #0088ff; /* A light, soft blue color (Alice Blue) */
    /* You can also use other color formats: */
    /* background-color: lightblue; */
    /* background-color: rgb(240, 248, 255); */
    /* background-color: rgba(240, 248, 255, 0.9); */
    
    margin: 0; /* Important: Removes default body margin to ensure color fills edges */
    padding: 0; /* Optional: If you don't want any default padding */
    font-family: Arial, sans-serif; /* Example: set a global font */
    color: #333; /* Example: default text color for the page */
}


.page_title {
  display: block;
  text-align: center;
  position: relative;
  top:0;
  left: 30%;
  border: none;
  border-radius: 10px;
  width: 40%;
  color: #333;
  background: white;
  padding: 2% 0 2% 0;

}


.login_display_group {
    display: flex;
    flex-direction: column; /* Stacks items vertically */
    align-items: flex-start; /* Aligns items to the start (left) of the cross axis */
    border: none;
    border-radius: 15px;
    width: 20%;
    height: 30%;
    resize:none;
    position: relative;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-top: 1%;
    margin-bottom: 3%;
    margin-left: auto;
    margin-right: auto;
    background: white;
  }

.login_display_group p {
  font:italic;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
}


.login_display_group label {
    margin-bottom: 8px;
    color:rgb(22, 22, 22);
}

.login_display_group input {
    width: 97.5%;
    margin-bottom: 8px;
    border: 1px solid #111;
    border-radius: 5px;
    background: rgb(242, 242, 242);
    color:black;
}

.login_button {
  align-self: center;
  margin-top: 4px;
  border:none;
  border-radius: 3px;
  margin-bottom: 5%;
  color:whitesmoke;
  padding: 8px 20px 8px 20px;
  background: rgb(9, 45, 187);
}

.recovery-links {
  display: flex;
  align-items: center;
  color:0;
  margin-left: 20%;
}

.recovery-links label {
  color:#111;
  margin: 0 auto;
  font-size: 10px;
}

.checkbox {
  margin-left: 5%;
  background: whitesmoke;
  border-radius: 2px;
  height: 10px;
  width: 4px;
}

</style>