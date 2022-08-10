<template>
    <div class="p-4 mb-5">
        <div class="flex justify-between">
            <h1 class="text-3xl font-bold mb-2">Корзина</h1>
            <div class="flex px-2 self-end">
                <div>
                    <span class="text-sm">Общая стоимость:</span>
                    <strong class="ml-1 text-orange-500">{{
                        totalCost
                    }}</strong>
                    <span class="text-sm">р</span>
                </div>
            </div>
        </div>
        <div class="p-2 flex flex-col gap-4">
            <BasketItem
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script>
import BasketItem from "./BasketItem.vue";
import { mapGetters } from "vuex";

export default {
    components: {
        BasketItem,
    },
    props: {
        products: {
            type: Array,
            required: true,
        },
    },
    computed: {
        ...mapGetters({
            totalCost: "totalCost",
        }),
    },
};
</script>

<style></style>
