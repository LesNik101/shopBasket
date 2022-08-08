<template>
    <product-group
        v-for="(productsGroup, groupName) in groupedProducts"
        :key="groupName"
        :groupName="groupName"
        :products="productsGroup"
    />
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
    watch: {
        products() {
            console.log("posts", this.products);
        },
    },
};
</script>

<style></style>
