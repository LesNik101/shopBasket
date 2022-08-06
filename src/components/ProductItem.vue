<template>
<div>
  <div>{{product.name}}</div>
  <button @click="addToBasket">Добавить в корзину</button>
</div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            require: true
        }
    },
    methods: {
        addToBasket() {
            this.$store.commit('basket/addProduct', this.product)
        }
    }
}
</script>

<style>

</style>