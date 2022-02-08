import { v4 as uuidv4 } from 'uuid';
export const state = () => ({
    sessionId: "",
    count: 0
})

export const mutations = {
    initSession(state) {
        state.sessionId = uuidv4();
        state.count = 0;
    },
    incrementCount(state) {
        state.count++;
    }
}