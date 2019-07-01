import { fromJS } from 'immutable';

const defaultState = fromJS({
    list:[],
    recommedList:[]
})

export default (state = defaultState, action)=> {
    switch(action.type) {
        case 'change_list': 
            return state.merge({
                list: fromJS(action.value.list),
                recommedList: fromJS(action.value.recommedList)
            });
        case 'concat_list': 
        // console.log()
        return state.set('list', state.get('list').concat(action.value.get('list')))
            // return state.merge({
            //     list: state.get('list').concat(action.value.list)
            // })
        default: 
            return state;
    }

    
}