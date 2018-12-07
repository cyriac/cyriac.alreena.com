export const state = () => ({
  access_code: ''
})

export const mutations = {
  setCode(state, payload) {
    this.state.access_code = payload
  }
}
