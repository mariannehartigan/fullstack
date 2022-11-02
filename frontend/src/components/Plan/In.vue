<template>
    <div class="inContainer">
    <p class="vertical">In</p>

    <div class="allData">
        <div 
            class="individualData" 
            v-for="income in income_data" 
            :key="income.income_id">
            <div>{{ income.income_description}}</div>
            <div>{{ income.income_amount}}</div>
            <div>{{ income.income_day_of_month}}</div>
        </div>
    </div>
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

<style scoped>


</style>