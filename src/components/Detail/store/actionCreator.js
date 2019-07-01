import axios from 'axios';

const changeDetail = (data)=> ({
    type: 'change_detail',
    value: data
})

export const getDetailData = ()=> {
    return (dispatch)=> {
        axios.get('/Api/detail.json')
             .then(res=> {
                dispatch(changeDetail(res.data.data));
             })
             .catch(err=> {
                 console.log(err)
             })
    }
}