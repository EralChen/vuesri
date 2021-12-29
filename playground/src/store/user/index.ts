import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore =  defineStore('user', () => {
  const userInfo = ref({
    username: '未知',
  })
  async function getUserInfo () {
    const res = await Promise.resolve({
      username: '',
    })
    userInfo.value = res
    return userInfo
  }
  return { userInfo, getUserInfo }
})