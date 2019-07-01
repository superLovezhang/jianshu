import React , { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import style from '@/sass/Detail.scss';
import { getDetailData } from './store/actionCreator';

class Detail extends Component {
    
    render() {
        return(
            <Fragment>
                <div style={{ width: '620px', margin: '0 auto' }}>
                    <h1 className={style.title}>蚂蚁金服核心技术：百亿特征实时推荐算法揭秘</h1>
                    <div className={style.detail_header}>
                        <img src="https://upload.jianshu.io/users/upload_avatars/2509688/835abb69-1f97-4d23-93c8-07ab122d124e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt=""/>
                        <div className={style.info}>
                            <h3>阿里云云栖社区</h3>
                            <p><span> 15.8</span> 2019.02.22 12:04 字数 5485 阅读 2386评论 0喜欢 118</p>
                        </div>
                    </div>
                    <div className={style.content}>
                        <div className={style.guide}>
                            <p className={style.paragraph}><span>小叽导读：</span>文章提出一整套创新算法与架构，通过对TensorFlow底层的弹性改造，解决了在线学习的弹性特征伸缩和稳定性问题，并以GroupLasso和特征在线频次过滤等自研算法优化了模型稀疏性。在支付宝核心推荐业务获得了uvctr的显著提升，并较大地提升了链路效率。</p>
                        </div>
                        <div className={style.paragraph}>
                            <h3>0.综述</h3>
                            <p>在线学习(Online learning)由于能捕捉用户的动态行为，实现模型快速自适应，进而成为提升推荐系统性能的重要工具。然而它对链路和模型的稳定性，训练系统的性能都提出了很高的要求。但在基于原生TensorFlow，设计Online推荐算法时，我们发现三个核心问题：</p>
                            <p>一些资讯推荐场景，需要大量长尾词汇作为特征，需使用featuremap对低频特征频次截断并连续性编码，但耗时且方法aggressive。</p>
                            <p>使用流式数据后，无法预知特征规模，而是随训练逐渐增长。因此需预留特征空间训练几天后重启，否则会越界。</p>
                            <p>模型稀疏性不佳，体积达到数十GB，导致上传和线上加载耗时长且不稳定。</p>
                            <p>更重要的是，在线学习如火如荼，当流式特征和数据都被打通后，能按需增删特征，实现参数弹性伸缩的新一代训练平台成为大势所趋。为了解决这些问题，从2017年底至今，蚂蚁金服人工智能部的同学，充分考虑蚂蚁的业务场景和链路，对TensorFlow进行了弹性改造， 解决了以上三大痛点，简化并加速离线和在线学习任务。其核心能力如下：</p>
                            <p>弹性特征伸缩体系，支持百亿参数训练。</p>  
                            <p>group_lasso优化器和频次过滤，提高模型稀疏性，明显提升线上效果。</p>
                            <p>模型体积压缩90%，完善的特征管理和模型稳定性监控。</p>
                            <p>在与业务线团队的共同努力下，目前已在支付宝首页的多个推荐场景全流量上线。其中某推荐位的个性化online learning桶最近一周相比线上多模型融合最优桶提升4.23% ， 相比随机对照提升达34.67% 。 某个性化资讯推荐业务最近一周，相比DNN基准uv-ctr提升+0.77%，pv-ctr提升+4.78%，模型体积压缩90%，链路效率提升50%。</p>
                        </div> */}
                        <div className={style.paragraph}>
                            <h3>1.弹性改造及优势</h3>
                            <p>在线学习(Online learning)由于能捕捉用户的动态行为，实现模型快速自适应，进而成为提升推荐系统性能的重要工具。然而它对链路和模型的稳定性，训练系统的性能都提出了很高的要求。但在基于原生TensorFlow，设计Online推荐算法时，我们发现三个核心问题：</p>
                            <p>一些资讯推荐场景，需要大量长尾词汇作为特征，需使用featuremap对低频特征频次截断并连续性编码，但耗时且方法aggressive。</p>
                            <p>使用流式数据后，无法预知特征规模，而是随训练逐渐增长。因此需预留特征空间训练几天后重启，否则会越界。</p>
                            <p>模型稀疏性不佳，体积达到数十GB，导致上传和线上加载耗时长且不稳定。</p>
                            <p>更重要的是，在线学习如火如荼，当流式特征和数据都被打通后，能按需增删特征，实现参数弹性伸缩的新一代训练平台成为大势所趋。为了解决这些问题，从2017年底至今，蚂蚁金服人工智能部的同学，充分考虑蚂蚁的业务场景和链路，对TensorFlow进行了弹性改造， 解决了以上三大痛点，简化并加速离线和在线学习任务。其核心能力如下：</p>
                            <p>弹性特征伸缩体系，支持百亿参数训练。</p>  
                            <p>group_lasso优化器和频次过滤，提高模型稀疏性，明显提升线上效果。</p>
                            <p>模型体积压缩90%，完善的特征管理和模型稳定性监控。</p>
                            <p>在与业务线团队的共同努力下，目前已在支付宝首页的多个推荐场景全流量上线。其中某推荐位的个性化online learning桶最近一周相比线上多模型融合最优桶提升4.23% ， 相比随机对照提升达34.67% 。 某个性化资讯推荐业务最近一周，相比DNN基准uv-ctr提升+0.77%，pv-ctr提升+4.78%，模型体积压缩90%，链路效率提升50%。</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        ) 
    }

    componentDidMount() {
        this.props.getDetail();
    }

}

function mapStateToProps(state) {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDetail() {
            dispatch(getDetailData());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)