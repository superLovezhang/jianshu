import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import style from '@/sass/Home.scss';

import { changeList, concatList } from './store/actionCreator';

class Homelist extends Component {
    render() {
        return (
             <ul>
                {
                    this.props.list.map((item, index)=> {
                        return (
                            <li key={index}>
                                <img src={item.get('img')} alt=""/>
                                <Link to={"/Detail/"+ index} className={style.title} >{item.get('title')}</Link>
                                <p>{item.get('content')}</p>
                                <div className={style.icon_list}>
                                    <span className="date">
                                        {item.get('date')}
                                    </span>
                                    <span className="company">
                                        {item.get('company')}
                                    </span>
                                    <span className="comment">
                                        {item.get('comment')}
                                    </span>
                                    <span className="attention">
                                        {item.get('attention')}
                                    </span>
                                </div>
                            </li>
                        )
                    })
                }
                <a href="javascript:;" className={style.loadMore} onClick={this.props.loadMore}>阅读更多</a>
            </ul>
        )
    }

    componentDidMount() {
        this.props.gatherHome();
    }
}

const mapState = (state)=> ({
    list: state.getIn(['home', 'list'])
 })

 const mapDispatch = (dispatch)=> ({
     gatherHome() {
        dispatch(changeList());
     },
     loadMore() {
         dispatch(concatList());
     }
 })

export default connect(mapState, mapDispatch)(Homelist);
