
console.log('banner')
// 引入了swiper的构造器
const Swiper = require('../../../../javascripts/swiper.min.js')
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