import { isReactive, toRaw } from "vue";

export const basketModule = {
    state: () => {
        return {
            productsInfo: null,
            products: [],
        };
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        totalCost(state) {
            return state.products.reduce(
                (sum, product) => sum + product.count * product.price,
                0
            );
        },
        basketProducts(state) {
            return state.products.filter((product) => product.count > 0);
        },
    },
    mutations: {
        initProducts(state, products) {
            state.products = products;
        },
        initProductsInfo(state, productsInfo) {
            state.productsInfo = productsInfo;
        },
        addProduct(state, addedProduct) {
            const product = state.products.find(
                (item) => item.id === addedProduct.id
            );
            if (product !== undefined && product.count < product.maxCount) {
                product.count++;
            }
        },
        subtractProduct(state, subtractedProduct) {
            const product = state.products.find(
                (item) => item.id === subtractedProduct.id
            );
            if (product !== undefined && product.count > 0) {
                product.count--;
            }
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
                    count: 0,
                };
                return obj;
            });
            commit("initProducts", products);
        },
        loadProductsInfo({ commit }) {
            const productsInfo = require("@/data/names.json");
            commit("initProductsInfo", productsInfo);
        },
    },
    namespaced: true,
};
