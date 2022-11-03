<template>
  <div class="container">
    <div class="header">
      <img class="logo" src="../../logo.png" />
    </div>
    <div class="content">
      <router-view/>
    </div>
    <div class="footer">
      <h1>Footer</h1>
    </div>
  </div>
</template>

<style>
@import '../reset.css';
  .container {
    display: grid;
    grid-template-rows: 8vh auto 4.5vh;
    min-height: 100vh;
    overflow-y: hidden;

    font-size: 1vw;
    background-color: #9FE2BF;
  } 

  .header {
    background: white;
  }

  .logo {
    height: 8vh;
  }

  .content {
    text-align: center;
  }

  .footer {
    text-align: center;
    background: white;
  }

</style>
