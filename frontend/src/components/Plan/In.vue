<template>
    <p class="vertical">In</p>

    <div>
        <p v-for="item in items" :key="item.product_id">{{ item.product_name}}</p>
    </div>
</template>
 
<script>
import axios from "axios"
export default {
    data() {
        return {
            items: [],
        }
    },
    created() {
        this.getProducts();
    },
    methods: {
        async getProducts() {
            try {
                const response = await axios.get("http://localhost:5000/products")
                this.items = response.data
                console.log(this.items)
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>