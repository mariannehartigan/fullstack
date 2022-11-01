<template>
    <div>
      <In />
      <ProductList />
    </div>
</template>
 
<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'
import In from '@/components/Plan/In.vue'

export default {
  name: 'Plan',
  components: {
    ProductList,
    In
  }
}
</script>

