// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import headers from '@/components/Headers/store';
import home from '@/components/Home/store';
import detail from '@/components/Detail/store';
import login from '@/components/Login/store';

const reducer = combineReducers({
    headers: headers,
    home,
    detail,
    login
});

export default reducer;