<template>
    <div>
        <h1>Income and Expenses</h1>
      <ProductList />
    </div>
</template>
 
<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'IncomeExpenses',
  components: {
    ProductList
  }
}
</script>

<style>
@import '../../reset.css';
  div {
    background-color: #9FE2BF;
    height: 100vh;
  } 
</style>