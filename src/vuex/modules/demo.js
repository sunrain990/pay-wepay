/**
 * Created by kevin on 16/8/18.
 */
import {
    DEMO_STATE_SUCCESS,
    DEMO_STATE_FALIURE
} from '../mutation-types'

const state = {
    demos: []
}

const mutations = {
    [DEMO_STATE_FALIURE](state, action) {
        state.demos = []
    },
    [DEMO_STATE_SUCCESS](state, action) {
        state.demos.push(action)
    }
}

export default {
    state,
    mutations
}