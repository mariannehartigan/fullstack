<template>
    <div>
        <h1>Title</h1>
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

