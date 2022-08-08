import { createStore } from "vuex";
import { basketModule } from "./basketModule";

export default createStore({
    modules: {
        basket: basketModule,
    },
});
