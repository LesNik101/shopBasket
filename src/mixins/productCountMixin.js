import { mapGetters, mapMutations } from "vuex";
import PriceStyle from "../enums/priceStyleEnum";

export default {
    data: () => ({
        priceStyle: PriceStyle.Default,
    }),
    computed: {
        ...mapGetters({
            getSelectedProducs: "getSelectedProducs",
            getRate: "getRate",
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
        price() {
            return this.product.price * this.getRate;
        },
    },
    watch: {
        price(newVal, oldVal) {
            if (newVal > oldVal) {
                this.priceStyle = PriceStyle.Increase;
            } else if (newVal < oldVal) {
                this.priceStyle = PriceStyle.Decrease;
            } else {
                this.priceStyle = PriceStyle.Default;
            }
        },
    },
    methods: {
        ...mapMutations({
            setProductCount: "setProductCount",
        }),
    },
};
