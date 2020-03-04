import { postUser } from '../api/user.js'
import { MTT_USER } from '~/constants/mutation-types'
import { ACT_USER } from '~/constants/action-types'

export const state = () => ({
  users: []
})

export const mutations = {
  [MTT_USER.setUser]: (state, data) => {
    state.users.push(data)
  }
}

export const actions = {
  async [ACT_USER.getUser]({ commit }, data) {
    const resp = await postUser(data)
    console.log('bbbbbbbbbb' + JSON.stringify(resp))
    commit([MTT_USER.setUser], resp)
  }
}

export const getters = {
  getUser(state) {
    return state.users
  }
}
