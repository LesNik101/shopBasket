<template>
    <div
        :class="priceStyle"
        class="flex flex-col md:flex-row items-center gap-y-2 gap-x-4 border-2 border-solid border-green-600 rounded p-3"
    >
        <div class="grow">{{ product.name }}</div>
        <div class="shrink-0 flex items-center gap-2">
            <span class="text-sm">Количество:</span>
            <MyCounter v-model="count" />
            <span class="text-sm">шт</span>
        </div>
        <div class="shrink-0">
            <span class="text-sm">Цена:</span>
            <strong class="ml-1">{{ price.toFixed(2) }}</strong>
            <span class="text-sm">р/шт</span>
        </div>
        <div class="shrink-0">
            <MyButton
                @click="setProductCount({ productId: product.id, count: 0 })"
            >
                Удалить
            </MyButton>
        </div>
    </div>
</template>

<script>
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
