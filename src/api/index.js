/**
 * Created by kevin on 16/7/23.
 */
import { TestData } from './resources'

export default {
    getDemos: function(data) {
        return TestData.get()
    }
}
