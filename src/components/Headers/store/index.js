import { fromJS } from 'immutable';

const defaultState = fromJS({
    list: [],
    totalPage: 1,
    page: 1,
    value: 'Dell',
    isFocus: 0,
    isEnter: 0
})

export default (state = defaultState, action)=> {
    switch(action.type) {
        case 'commit_value':
            return state.set('value', '123');
        case 'send_change':
            return state.set('list', action.value).set('totalPage', action.totalPage).set('isFocus', 1);
        case 'change_isFocus':
                return state.set('isFocus', 0)
        case 'change_page':
            return state.set('page', action.value);
        case 'change_isEnter':
            return state.set('isEnter', 1);
        case 'change_offEnter':
            return state.set('isEnter', 0);
        default:
                return state;
    }
    
}