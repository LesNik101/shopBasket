<template>
    <GroupList :products="getProducts" />
    <Basket v-if="basketProducts.length" :products="basketProducts" />
</template>

<script>
import GroupList from "./components/GroupList.vue";
import Basket from "./components/Basket.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    components: {
        GroupList,
        Basket,
    },
    mounted() {
        this.loadProductsInfo();
        this.loadData();
    },
    computed: {
        ...mapGetters({
            getProducts: "getProducts",
            basketProducts: "basketProducts",
        }),
    },
    methods: {
        ...mapActions({
            loadData: "loadData",
            loadProductsInfo: "loadProductsInfo",
        }),
    },
};
</script>

<style></style>
