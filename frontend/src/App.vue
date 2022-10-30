<template>
  <div class="container">
    <div class="header">
      Header
    </div>
    <router-view/>
    <div class="footer">
      Footer
    </div>
  </div>
</template>

<style>
@import '../reset.css';
  .container {
    background-color: #9FE2BF;
    height: 100vh;
  } 
  h1 {
    color: red;
  }
</style>
