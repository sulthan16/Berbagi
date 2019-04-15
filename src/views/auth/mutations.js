/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import axios from "axios";
import store from '@/store';
import {
    CHECK,
    REGISTER,
    LOGIN,
    LOGOUT,
} from './mutation-types';

export default {
    [CHECK](state) {
        state.isLogged = !!localStorage.getItem('token');
    },

    [REGISTER]() {
        //
    },

    [LOGIN](state, data) {
        state.isLogged = true
        localStorage.setItem("token", data.jwt);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.jwt}`
    },

    [LOGOUT](state) {
        state.isLogged = false
        localStorage.clear()
        axios.defaults.headers.common['Authorization'] = ``
    }
};
