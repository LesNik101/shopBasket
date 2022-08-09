<template>
    <div>
        <div
            class="flex items-center cursor-pointer mb-2 select-none"
            @click="isExpand = !isExpand"
        >
            <span
                :class="{ '-rotate-90': !isExpand }"
                class="material-icons transition-all duration-300"
                >expand_more</span
            >
            <h2 class="text-2xl font-bold">{{ groupName }}</h2>
        </div>
        <transition name="fade">
            <div
                v-show="isExpand"
                class="transition-all duration-300 flex flex-col gap-4"
            >
                <ProductItem
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                />
            </div>
        </transition>
    </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
    components: {
        ProductItem,
    },
    props: {
        groupName: {
            type: String,
            required: true,
        },
        products: {
            type: Array,
            required: true,
        },
    },
    data: () => ({
        isExpand: true,
    }),
};
</script>

<style>
.fade-enter-active {
    transition: all 0.3s ease-out;
}

.fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
