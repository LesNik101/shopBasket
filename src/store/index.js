import { createStore } from 'vuex'
import { basketModule } from './basketModule'

export default createStore({
  state: () => {
    return {
        likes: 1
    }
  },
  modules: {
    basket : basketModule
  }
})
