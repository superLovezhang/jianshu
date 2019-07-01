import axios from 'axios';
import { fromJS } from 'immutable';

const monitorList = (data)=> ({
    type: 'change_list',
    value: data
})

const monitorConcat = (data)=> ({
    type: 'concat_list',
    value: fromJS(data)
    
})

export const changeList = ()=> {
    return (dispatch)=> {
        axios.get('/Api/home.json')
        .then(res=> {
            dispatch(monitorList(res.data.data));      
        })
        .catch(err=> {
            console.log(err);
        })
    }
}

export const concatList = ()=> {
    return (dispatch)=> {
        axios.get('/Api/homeList.json')
             .then(res=> {
                dispatch(monitorConcat(res.data.data));
             })
             .catch(err=> {
                 console.log(err)
             })
    }
}