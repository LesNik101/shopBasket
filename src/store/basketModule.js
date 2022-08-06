export const basketModule = {
    state: () => {
        return {
            products: []
        }
    },
    getters: {
        commonCost(state) {
            return state.products.reduce((sum, product) => sum + product.count * product.price, 0)
        }
    },
    mutations: {
        addProduct(state, addedProduct) {
            const product = state.products.find(item => item.id === addedProduct.id)
            if (product === undefined) {
                state.products.push({...addedProduct, count: 1})
            } else {
                product.count++
            }
        }
    },
    actions: {
    },
    namespaced: true
}