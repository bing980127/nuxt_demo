import { loginRequest, registerRequest } from "../static/api";
const cookieparser = process.server ? require('cookieparser') : undefined;
const Cookie = process.client ? require('js-cookie') : undefined;
const state = () => {
    return {
        userInfo: null,
        errorMsg: null,
    }
}

const actions = {
    nuxtServerInit({ commit }, { req }) {
        let userInfo = null
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                userInfo = parsed.userInfo
                commit('setUser', JSON.parse(userInfo))
            } catch (err) {
                // No valid cookie found
            }
        }
    },
    Login({ commit }, params) {
        return new Promise(resolve => {
            loginRequest({ user: params }).then((res) => {
                const { user } = res.data;
                commit('setUser', user);
                Cookie.set('userInfo', JSON.stringify(user));
                this.$router.push({ name: 'home' })
                resolve()
            }).catch((error) => {
                commit('setError', error.response.data.errors);
            })
        })
    },
    Register({ commit }, params) {
        return new Promise(resolve => {
            registerRequest({ user: params }).then((res) => {
                const { user } = res.data;
                commit('setUser', user);
                Cookie.set('userInfo', user)
                this.$router.push({ name: 'home' })
                resolve();
            }).catch(error => {
                commit('setError', error.response.data.errors);
            })
        })
    }
}

const mutations = {
    setUser(state, userInfo) {
        state.userInfo = userInfo;
    },
    setError(state, error) {
        state.errorMsg = error
    },
}

const getters = {
    currentUser(state) {
        return state.userInfo;
    },
}

export default {
    state,
    actions,
    mutations,
    getters
}