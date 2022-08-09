import { mapGetters, mapMutations } from "vuex";

export default {
    computed: {
        ...mapGetters({
            getSelectedProducs: "getSelectedProducs",
        }),
        count: {
            get() {
                return this.getSelectedProducs[this.product.id];
            },
            set(value) {
                this.setProductCount({
                    productId: this.product.id,
                    count: value,
                });
            },
        },
    },
    methods: {
        ...mapMutations({
            setProductCount: "setProductCount",
        }),
    },
};
