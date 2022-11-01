<template>
    <p class="vertical">In</p>

    <div>
        <p v-for="income in income_data" :key="income.income_id">{{ income.income_description}}</p>
    </div>
</template>
 
<script>
import axios from "axios"
export default {
    data() {
        return {
            income_data: [],
        }
    },
    created() {
        this.getIncomeData();
    },
    methods: {
        async getIncomeData() {
            try {
                const response = await axios.get("http://localhost:5000/plan")
                this.income_data = response.data
                console.log(this.income_data)
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>