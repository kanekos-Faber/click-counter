import createPersistedState from 'vuex-persistedstate';
import * as Cookies from "js-cookie";

const KEY = 'click-counter';

export default ({ store }) => {
    createPersistedState({
        storage: {
            getItem: (KEY) => Cookies.get(KEY),
            setItem: (KEY, value) => {
                let inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);
                Cookies.set(KEY, value, { expires: inOneMinute, secure: true });
            },
            removeItem: (KEY) => Cookies.remove(KEY)
        }
    })(store)
}