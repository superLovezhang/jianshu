import axios from 'axios';

const sendChange = (data, totalPage, isFocus)=> {
    return {
        type: 'send_change',
        value: data,
        totalPage,
        isFocus
    }
}

export const commitValue = ()=> ({
    type: 'commit_value'
})

export const focusSend = ()=> {
    return (dispatch)=> {
        axios.get('/Api/a.json')
             .then(res=> {
                 const totalPage = Math.ceil(res.data.data.length / 9);
                 dispatch(sendChange(res.data.data, totalPage, 1))
             })
             .catch(err=> {
                 console.log('错误')
             })
    }
}

export const blurSend = ()=> ({
    type: 'change_isFocus'
})

export const mouseEnter = ()=> ({
    type: 'change_isEnter'
})

export const mouseLeave = ()=>({
    type: 'change_offEnter'
})

export const clickToggle = (page)=> ({
    type: 'change_page',
    value: page
})