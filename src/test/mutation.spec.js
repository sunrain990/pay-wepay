/**
 * Created by kevin on 16/8/17.
 */
import { expect } from 'chai'
import { mutations } from '../vuex/store'

const { INCREMENT } = mutations

describe('mutations', () => {
    it('INCREMENT', () => {
        // 模拟状态
        const state = { count: 0 }
        // 应用 mutation
        INCREMENT(state)
        // 断言结果
        expect(state.count).to.equal(1)
    })
})