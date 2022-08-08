<template>
    <div class="p-4">
        <h1 class="text-3xl font-bold mb-4">Онлайн магазин</h1>
        <div class="p-2">
            <ProductGroup
                v-for="(productsGroup, groupName) in groupedProducts"
                :key="groupName"
                :groupName="groupName"
                :products="productsGroup"
            />
        </div>
    </div>
</template>

<script>
import groupBy from "lodash/groupBy";
import ProductGroup from "./ProductGroup.vue";

export default {
    components: {
        ProductGroup,
    },
    props: {
        products: {
            type: Array,
            require: true,
        },
    },
    computed: {
        groupedProducts() {
            return groupBy(this.products, "group.name");
        },
    },
};
</script>

<style></style>
