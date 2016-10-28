/**
 * Created by kevin on 16/7/22.
 */
import api from '../api'
import * as types from './mutation-types'

export const getDemo = ({dispatch}) => {
    api.getDemos().then(response => {
        if(!response.ok) {
            return dispatch(types.DEMO_STATE_FALIURE)
        }
        console.log(response, ' this is response!')
        dispatch(types.DEMO_STATE_SUCCESS, response.data)
    }, response => {
        dispatch(types.DEMO_STATE_FALIURE)
    })
}