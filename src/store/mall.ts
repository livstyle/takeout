export const mallStore = {
    state: {
        userInfo: null,
        token: null,
        isLogin: false,
    },
    actions: {
        setUserInfo(userInfo: any) {
            this.state.userInfo = userInfo
        },
        setToken(token: string) {
            this.state.token = token
        },
    }
}