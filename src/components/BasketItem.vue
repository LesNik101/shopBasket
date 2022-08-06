<template>
  <div>
    <div>{{product.name}}</div>
  </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            require: true
        }
    }
}
</script>

<style>

</style>