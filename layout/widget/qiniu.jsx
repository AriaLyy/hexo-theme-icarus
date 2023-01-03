const { Component } = require('inferno');
const gravatrHelper = require('hexo-util').gravatar;
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

class qiniu extends Component {
    // 从缓存中读取数据
    render() {
        const {
            imgUrl,
            adUrl
        } = this.props;
        return <div class="card widget" data-type="qiniu">
            <div class="card-content">
                <nav class="level">
                    <div class="level-item has-text-centered flex-shrink-1">
                        <div>
                            <a href={adUrl} target="_blank" rel="noopener"><img src={imgUrl}/></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>;
    }
}

qiniu.Cacheable = cacheComponent(qiniu, 'widget.qiniu', props => {
    // 获取 _config.icarus.yml 中qiniu的配置数据
    const { site, helper, widget } = props;
    // 配置的属性
    const {
        ad_url,
        img_url
    } = widget;
    const { url_for, _p, __ } = helper;
    
    return {
        imgUrl: url_for(img_url),
        adUrl: url_for(ad_url)
    };
});

// 根据widget的type创建widget
module.exports = qiniu;
