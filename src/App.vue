<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

html {
  /* //font-family: 'Poppins', sans-serif; */
  font-family: 'Varela Round', sans-serif;
}
.logo {
  max-height: 50px;
}
.bg-green-500 {
  --bg-opacity: 1;
  background-color: #35d398;
  /* background-color: rgba(72, 187, 120, var(--bg-opacity)); */
}
</style>
