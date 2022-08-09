<template>
    <div
        class="inline-flex select-none border-2 border-solid border-blue-400 rounded px-2 py-1 gap-2"
    >
        <span
            @click="updateValue(this.modelValue - 1)"
            class="material-icons transition-all duration-300 hover:scale-125 hover:cursor-pointer"
        >
            remove
        </span>
        <div>{{ modelValue }}</div>
        <span
            @click="updateValue(this.modelValue + 1)"
            class="material-icons transition-all duration-300 hover:scale-125 hover:cursor-pointer"
        >
            add
        </span>
    </div>
</template>

<script>
export default {
    name: "MyCounter",
    props: {
        modelValue: {
            type: Number,
            required: true,
        },
    },
    methods: {
        updateValue(value) {
            this.$emit("update:modelValue", value);
        },
    },
};
</script>

<style></style>
