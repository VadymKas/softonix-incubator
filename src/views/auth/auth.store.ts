import { routeNames, router } from '@/router'

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('si-token-refresh'))

  function setToken (token: string) {
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function setRefreshToken (token: string) {
    refreshToken.value = token
    localStorage.setItem('si-token-refresh', token)
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
      })
  }

  function logout () {
    localStorage.removeItem('si-token')
    localStorage.removeItem('si-token-refresh')
    window.location.href = router.resolve(routeNames.login).href
  }

  function register (payload: ILoginRequest) {
    return authService.register(payload)
  }

  function refresh (payload: string) {
    return authService.refreshToken(payload)
      .then((res) => {
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
      })
  }

  return {
    accessToken,
    refreshToken,
    login,
    logout,
    register,
    refresh
  }
})
