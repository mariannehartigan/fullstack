<template>
    <div class="outContainer">
        <div class="vertical"><span class="title">Out</span></div>
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
.outContainer{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.vertical{
    border: 1px solid black;
}
.allData{
    border: 1px solid black;
}
.title{
    writing-mode: vertical-lr;
    transform: rotate(180deg);
}
</style>