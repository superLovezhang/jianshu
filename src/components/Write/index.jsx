import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends Component {
    render() {
        if(this.props.isLogin) {
            return <div>这是写文章页面</div>
        }else{
            return <Redirect to="/Login"></Redirect>
        }
    }
}

function mapState(state) {
    return {
        isLogin: state.getIn(['login', 'isLogin'])
    }
}

export default connect(mapState, null)(Write);