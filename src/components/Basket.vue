<template>
  <div>
    <H3>Корзина</H3>
    <basket-item v-for="product in products" :key="product.id"/>
  </div>
</template>

<script>
import BasketItem from './BasketItem.vue'
export default {
    components: {
        BasketItem
    },
    props: {
        products: {
            type: Array,
            require: true
        }
    }
}
</script>

<style>

</style>