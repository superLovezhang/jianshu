import { fromJS } from 'immutable';

const defaultState = fromJS({
    isLogin: false
})

export default (state= defaultState, action)=> {
    switch(action.type) {
        case 'change_true':
           return state.set('isLogin', 'true')
        default:
            return state;
    }
}
