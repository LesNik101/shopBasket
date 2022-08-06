<template>
<div>
  <h3>{{groupName}}</h3>
  <product-item v-for="product in products" :key="product.id" :product="product"/>
</div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
    components: {
        ProductItem
    },
    props: {
        groupName: {
            type: String,
            require: true
        },
        products: {
            type: Array,
            require: true
        }
    }

}
</script>

<style>

</style>