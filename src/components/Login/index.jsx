import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { changeLogin } from '@/components/Login/store/actionCreator';
import { Redirect } from 'react-router-dom';
import style from '@/sass/Login.scss';

class Login extends Component {

    toHomePage() {
        if(this.props.isLogin) {
            return (
                <Redirect to='/Home'></Redirect>
            )
        }else{
            return(
                 <div>
                    <div className={style.bg_color}></div>
                    <div className={style.login_wrap}>
                        <div className={style.input_box}>
                            <input type="text" placeholder="手机号或邮箱"/>
                            <input type="password" placeholder="密码"/>
                        </div>
                        <button className={style.login_btn} onClick={this.props.toChangeLogin} >登录</button>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
           <Fragment>
              {this.toHomePage()}
           </Fragment>
        )
    }
}

const mapState = (state)=> ({
    isLogin: state.getIn(['login', 'isLogin'])
})

const mapDispatch = (dispatch)=> ({
    toChangeLogin() {
        dispatch(changeLogin());
    }
})

export default connect(mapState, mapDispatch)(Login);