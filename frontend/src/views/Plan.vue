<template>
    <div>
      <In />
      <Out />
    </div>
</template>
 
<script>
// @ is an alias to /src
import In from '@/components/Plan/In.vue'
import Out from '@/components/Plan/Out.vue'

export default {
  name: 'Plan',
  components: {
    In,
    Out
  }
}
</script>

