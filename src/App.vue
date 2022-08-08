<template>
    <product-list :products="products" />
    <basket :products="basketProducts" />
</template>

<script>
import ProductList from "./components/ProductList.vue";
import Basket from "./components/Basket.vue";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
    components: {
        ProductList,
        Basket,
    },
    mounted() {
        this.loadProductsInfo();
        this.loadData();
    },
    computed: {
        ...mapState({
            products: (state) => state.basket.products,
        }),
        ...mapGetters({
            basketProducts: "basket/basketProducts",
        }),
    },
    methods: {
        ...mapActions({
            loadData: "basket/loadData",
            loadProductsInfo: "basket/loadProductsInfo",
        }),
    },
};
</script>

<style></style>
