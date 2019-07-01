import React , { Component , Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '@/sass/style.css';
import style from '@/sass/style.scss';

import { focusSend, blurSend, mouseEnter, mouseLeave, clickToggle } from '@/components/Headers/store/actionCreator'

class Headers extends Component {

    serchBarItem() {
        const { list, value, page, isFocus, isEnter } = this.props;
        const newList = [];
        if(this.props.isFocus || this.props.isEnter) {
            for(let i = (page - 1) * 9 ; i < page * 9; i++) {
                if(this.props.list[i]) {
                    newList.push(<a href="/" key={i} className={style.item}>{list[i]}</a>);
                }
            }
            return newList;
        }
    }

    searchBottomBar() {
        
        if(this.props.isFocus || this.props.isEnter) {
            return(
                <div className={style.switchKey} onMouseEnter={this.props.mouseIn} onMouseLeave={this.props.mouseOut}>
                    <span className={style.hotsearch}>热门搜索</span>
                    <span className={style.exchange} onClick={()=> {this.props.handleClick(this.props.page, this.props.totalPage, this.refs.update); }} >换一批</span>
                    <i className={"iconfont icon-gengxin " + style.update } ref="update" ></i>
                    <div className={style.btn_group}>
                        {
                            this.serchBarItem()
                        }
                    </div>
                </div>
            )
        }
        
    }

    render() {
        return(

            <Fragment>
                <div className={style.headers}>
                    <div className={style.limit}>
                        <a href="/" className={style.jianshu}></a>
                        <Link to="/Write" className={style.write}>
                            <i className={"iconfont icon-icon-test "+ style.iconfont}></i>
                            写文章
                        </Link>
                        <Link to="/Register" className={style.register}>注册</Link>
                        <Link to="/Login" className={style.login}>{ this.props.isLogin ? '退出' : '登录' }</Link>
                        <div className={style.inputbox}>
                            <a href="/" className={style.home}>
                                <i className={"iconfont icon-safari "+ style.iconfont}></i>
                                首页
                            </a>
                            <a href="/" className={style.download}>
                                <i className={"iconfont icon-icon-- "+ style.iconfont}></i>
                                下载App
                            </a>
                            <div className={style.search}>
                                <input type="text"
                                  onFocus={()=> { this.props.handleFocus(this.props.list) }}
                                  onBlur={this.props.handleBlur} placeholder="搜索"
                                  className={style.input_box}
                                />
                                <i className={"iconfont icon-search1187938easyiconnet "+ style.search_icon}></i>
                                {
                                    this.searchBottomBar()
                                }
                            </div>
                            <a href="/" className={style.diamond}></a>
                            <a href="/" className={style.mode}>Aa</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        ) 
    }

}

function mapStateToProps(state) {
    return {
        list: state.getIn(['headers', 'list']),
        value: state.getIn(['headers', 'value']),
        page: state.getIn(['headers', 'page']),
        totalPage: state.getIn(['headers', 'totalPage']),
        isFocus: state.getIn(['headers', 'isFocus']),
        isEnter: state.getIn(['headers', 'isEnter']),
        isLogin: state.getIn(['login', 'isLogin'])
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleFocus(list) {
            // list.size === 0 &&  
            dispatch(focusSend())
        },

        handleBlur() {
            dispatch(blurSend())
        },

        mouseIn() {
            dispatch(mouseEnter())
        },

        mouseOut() {
            dispatch(mouseLeave())
        },
        
        handleClick(page, totalPage, update) {
            let rotateX = update.style.transform.replace(/[^0-9]/ig, '');
            if(rotateX) {
                rotateX = parseInt(rotateX);
            }else{
                rotateX = 0;
            }
            update.style.transform = 'rotate('+ (rotateX + 360) +'deg)'

            if(page < totalPage) {
                var page = page + 1;
            }else{
                var page = 1;
            }
            dispatch(clickToggle(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Headers)