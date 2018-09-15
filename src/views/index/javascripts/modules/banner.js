
console.log('banner')
// 引入了swiper的构造器
const Swiper = require('../../../../javascripts/swiper.min.js')
  

var banner = {
    init () { // 初始化
        this.getData()
       
    },
    getData () {// 获取数据
        $.ajax({
            url: '/data/banner.json',
            data: {
                __t: Date.now(),
                count: 5
            },
            success: (data) => {
                this.renderBannerItem(data)
            }
        })
    },
    renderBannerItem (res) {
        let str = ''
        res.data.billboards.forEach(item => {
            str += `
                <div class="swiper-slide">
                    <img width="100%" src="${item.imageUrl}" alt="">
                </div>
            `
        });

        $('.index-banner .swiper-wrapper').html(str)
        // 当数据循环渲染完成后再去实例化swiper
        this.initialSwiper()

    },
    initialSwiper () {
        // 实例化swiper就能得到轮播
        var mySwiper = new Swiper ('.index-banner .swiper-container', {
            // direction: 'vertical',
            loop: true,
            
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        }) 
    }
}

banner.init()
