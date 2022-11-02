<template>
  <div class="container">
    <div class="header">
      <h1>Header</h1>
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
    grid-template-rows: 8vh auto 8vh;
    min-height: 100vh;
    overflow-y: hidden;

    font-size: 1vw;
    background-color: #9FE2BF;
  } 

  .header {
    text-align: center;
    background: white;
  }

  .content {
    text-align: center;
  }

  .footer {
    text-align: center;
    background: white;
  }

  .vertical {
    transform: rotate(-90deg);
  }
</style>
