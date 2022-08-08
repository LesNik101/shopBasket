<template>
    <div>
        <div>{{ product.name }}</div>
        <button @click="addProduct(this.product)">Добавить в корзину</button>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    props: {
        product: {
            type: Object,
            require: true,
        },
    },
    methods: {
        ...mapMutations({
            addProduct: "basket/addProduct",
        }),
    },
};
</script>

<style></style>
