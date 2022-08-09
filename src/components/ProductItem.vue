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
            <MyCounter v-if="count > 0" v-model="count" />
            <MyButton
                v-else
                @click="setProductCount({ productId: product.id, count: 1 })"
            >
                В корзину
            </MyButton>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import productsCountMixin from "../mixins/productCountMixin";

export default {
    mixins: [productsCountMixin],
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style></style>
