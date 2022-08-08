<template>
    <GroupList :products="getProducts" />
    <Basket :products="basketProducts" />
</template>

<script>
import GroupList from "./components/GroupList.vue";
import Basket from "./components/Basket.vue";
import { mapActions,  mapGetters } from "vuex";

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
            getProducts: "basket/getProducts",
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
