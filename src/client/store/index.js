import { v4 as uuidv4 } from 'uuid';

export const actions = {
    nuxtServerInit({ }, { req }) {
        if (req.session.userId == undefined) {
            req.session.userId = uuidv4();
        }
    }
}