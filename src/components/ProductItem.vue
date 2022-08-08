<template>
    <div
        class="flex flex-col md:flex-row items-center gap-y-2 gap-x-4 border-2 border-solid border-fuchsia-600 rounded p-3"
    >
        <div class="grow">{{ product.name }}</div>
        <div class="shrink-0">
            <span class="text-sm">Осталось:</span>
            <strong class="ml-1">{{ product.maxCount }}</strong>
            <span class="text-sm">шт</span>
        </div>
        <div class="shrink-0">
            <span class="text-sm">Цена:</span>
            <strong class="ml-1">{{ product.price }}</strong>
            <span class="text-sm">$</span>
        </div>
        <div class="shrink-0">
            <button class="rounded-full px-5 py-2 bg-blue-500 text-white hover:bg-blue-700 text-sm " @click="addProduct(this.product)">В корзину</button>
        </div>
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
