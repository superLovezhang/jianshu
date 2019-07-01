import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from '@/sass/Home.scss';

class RecommedWriter extends Component {
    render() {
        return (
            <div className={style.recommed}>
                <div className={style.topheader}>
                    <span> 推荐作者</span>
                    <span>换一批</span>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index)=> {
                            return (
                                <li key={index}>
                                    <img src={item.get('img')} alt=""/>
                                    <div className={style.info}>
                                        <h3>{item.get('name')}</h3>
                                        <p>{item.get('info')}</p>
                                    </div>
                                    <span>+ 关注</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <a href="#" className={style.read_more}>查看全部 ></a>
            </div>
        )
    }
}

const mapState = (state)=> { 
    return {
        list: state.getIn(['home', 'recommedList'])
    }
}


export default connect(mapState, null)(RecommedWriter);