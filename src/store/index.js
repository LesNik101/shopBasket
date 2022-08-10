import { createStore } from "vuex";

export default createStore({
    state: () => {
        return {
            productsInfo: null,
            products: [],
            selectedProducs: {},
            rate: 70,
        };
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
        getSelectedProducs(state) {
            return state.selectedProducs;
        },
        getRate(state) {
            return state.rate;
        },
        totalCost(state, getters) {
            return getters.basketProducts
                .reduce(
                    (sum, product) =>
                        sum +
                        state.selectedProducs[product.id] *
                            product.price *
                            state.rate,
                    0
                )
                .toFixed(2);
        },
        basketProducts(state) {
            return state.products.filter(
                ({ id }) =>
                    state.selectedProducs[id] && state.selectedProducs[id] > 0
            );
        },
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setProductsInfo(state, productsInfo) {
            state.productsInfo = productsInfo;
        },
        setProductCount(state, { productId, count }) {
            const product = state.products.find(
                (item) => item.id === productId
            );
            if (product && count >= 0 && count <= product.maxCount) {
                state.selectedProducs = {
                    ...state.selectedProducs,
                    [productId]: count,
                };
            }
        },
        setRate(state, rate) {
            state.rate = rate;
        },
    },
    actions: {
        loadData({ state, commit }) {
            const jsonData = require("@/data/data.json");
            const products = jsonData.Value.Goods.map((item) => {
                const obj = {
                    id: item.T,
                    maxCount: item.P,
                    price: item.C,
                    name: state.productsInfo[item.G].B[item.T].N,
                    group: {
                        id: item.G,
                        name: state.productsInfo[item.G].G,
                    },
                };
                return obj;
            });
            commit("setProducts", products);
        },
        loadProductsInfo({ commit }) {
            const productsInfo = require("@/data/names.json");
            commit("setProductsInfo", productsInfo);
        },
        randomRate({ commit }) {
            const minValue = 20,
                maxValue = 80;
            const newRate = Math.random() * (maxValue - minValue) + minValue;
            commit("setRate", newRate);
        },
    },
});
