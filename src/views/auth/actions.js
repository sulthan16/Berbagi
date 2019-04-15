/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */
import router from '../../router'
import store from '../../store'
import * as types from './mutation-types';
import axios from "axios";


export const check = ({ commit }) => {
    commit(types.CHECK);
}
export const logout = ({ commit }) => {
    axios.post("/logout").then(response => {
        response = response.data;
        commit(types.LOGOUT);
        const message = {
            title: "Success",
            text: "Berhasil Logout",
            type: "success"
        };
        store.commit("addNotification", message);
        router.push({
            name: 'login.index',
        });
    }).catch(error => {
        if (error.response.status === 401) {
            store.commit("auth/LOGOUT");
        }
    });
}
export const login = ({ commit, state }, user) => {
    state.isLoading = true;
    axios.post("login/authUser", {
        username: user.username,
        password: user.password
    }).then(response => {
        response = response.data
        if (response.success_message) {
            var data = response;
            commit(types.LOGIN, data);
            router.push({
                name: 'home',
            });
            state.isLoading = false;
        } else {
            state.message = response.success_message;
            state.isLoading = false;
        }
    })
        .catch(error => {
            if (error.response.status === 401) {
                store.dispatch("auth/logout");
            }
        });

};


export default {
    check,
    logout,
    login
};
