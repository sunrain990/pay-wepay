/**
 * Created by kevin on 16/8/17.
 */
import createLogger from '../vuex-plugins/plugins/logger'

export default process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []