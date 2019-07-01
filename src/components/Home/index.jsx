import React, { Component } from 'react';

import style from '@/sass/Home.scss';

import Homelist from './Homelist';
import Board from './Board';
import DownloadApp from './DownloadApp';
import RecommedWriter from './RecommedWriter';

export default class Home extends Component {

    backTop() {
        document.documentElement.scrollTop = 0;
    }

    render() {
        return (
            <div className={style.clearfix + ' ' + style.home_wrap}>
                <div className={style.home_leftitem}>
                    <div className={style.home_img}>
                        <a href="#">
                            <img src="https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                        </a>
                    </div>
                    <div className={style.home_list}>
                       <Homelist></Homelist>
                    </div>
                </div>
                <div className={style.home_rightitem}>
                    <Board></Board>
                    <DownloadApp></DownloadApp>
                    <a href="#" className={style.ad1}>
                        <span>广告</span>
                    </a>
                    <RecommedWriter></RecommedWriter>
                    <a href="#" className={style.ad2}>
                        <span>广告</span>
                    </a>
                </div>
                <div className={style.back_top} ref='toTop' onClick={this.backTop}>
                    <i className={"iconfont icon-up"}></i>
                </div>
            </div>
        )
    }

    componentDidMount() {
        window.onscroll = ()=> {
            if(document.documentElement.scrollTop >= 400) {
                this.refs.toTop.style.display = 'block';
            }else{
                this.refs.toTop.style.display = 'none';
            }
        }
    }
}
