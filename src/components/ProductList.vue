<template>
  <product-group v-for="(productsGroup, groupName) in filterProducts" :key="groupName" :groupName="groupName" :products="productsGroup"/>
</template>

<script>
import groupBy from 'lodash/groupBy';
import ProductGroup from './ProductGroup.vue';
export default {
  components: {
    ProductGroup
  },
  props: {
    products: {
        type: Array,
        require: true
    }
  },
  computed: {
    filterProducts() {
      return groupBy(this.products, (product) => {
        return product.groupName;
      })
    }
  },
  watch: {
    products() {
      console.log("posts", this.products);
    }
  }
}
</script>

<style>

</style>