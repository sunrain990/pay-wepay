/**
 * Created by kevin on 16/8/17.
 */
import {
    SUCCESS_GET_APPS,
    FAILURE_GET_APPS
} from '../mutation-types'

const state = {
    items: []
}

const mutations = {
    [FAILURE_GET_APPS](state) {
        state.items = []
    },
    [SUCCESS_GET_APPS](state, action) {
        state.items = action.apps
    }
}

export default {
    state,
    mutations
}