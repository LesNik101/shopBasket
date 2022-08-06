<template>
{{$store.state.likes}}
  <product-list :products="products"/>
  <basket />
</template>

<script>
import ProductList from './components/ProductList.vue';
import Basket from './components/Basket.vue';
export default {
  components: {
    ProductList, Basket
},
  data() {
    return {
      names: null,
      products: [],
      busketProducts: []
    }
  },
  mounted() {
    this.loadNames();
    this.loadData();
  },
  methods: {
    loadData() {
      const jsonData= require('./data/data.json'); 
      console.log(jsonData);
      this.products = jsonData.Value.Goods.map(item => {
        const obj = {
          id: item.T,
          maxCount: item.P,
          price: item.C,
          name: this.names[item.G].B[item.T].N,
          groupName: this.names[item.G].G
        }
        return obj
      })
    },
    loadNames() {
      const jsonNames= require('./data/names.json'); 
      console.log(jsonNames);
      this.names = jsonNames;
    }
  }
}
</script>

<style>
</style>
