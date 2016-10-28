import Vue from 'vue'
import Vuex from '../vuex-plugins'
import demo from './modules/demo'
import createLogger from '../vuex-plugins/plugins/logger'
// import middlewares from './middlewares'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

// Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
    modules: {
        demo
    },
    // strict: debug,
    // plugins: middlewares,
    plugins: debug ? [createLogger()] : []
    // plugins: createLogger()
})