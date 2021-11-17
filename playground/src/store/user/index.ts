import type { ActionTree } from 'vuex'

type UserInfo = {
  username: string,
}
export interface State {
  userInfo: UserInfo
}

export const state: State = {
  userInfo: {
    username: '未知',
  },
}

export const actions: ActionTree<State, State> = {
  async getUserInfo ({ state }) {
    const userInfo = await Promise.resolve({
      username: '',
    })
    state.userInfo = userInfo
    return userInfo
  },
}

declare module 'vuex' {
  export interface Dispatch {
    (type: 'getUserInfo'): Promise<string>
  }
}
