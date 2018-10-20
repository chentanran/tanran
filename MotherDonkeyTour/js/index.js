// 轮播图
(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        // 自动轮播
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })        
})();

// tab栏
(function(){
  var content = document.querySelector(".content");
  var contentHead = content.children[0];
  var div = contentHead.children;
  var ul = document.querySelector(".content_body").children;
  var contentBody = document.querySelector(".content_body");
  var tab = contentBody.children;
 window.onresize = function(){
  contentBody.style.height = tab[0].offsetHeight + "px";
 }
  
  for(var i = 0; i < div.length; i++){
    div[i].length = i;
    div[i].onclick = function(){
      for(var i = 0; i < div.length; i++){
        ul[i].style.display = "none";
        div[i].classList.remove("active");
        contentBody.style.height =  tab[i].offsetHeight + "px";
      }
      this.classList.add("active");
      ul[this.length].style.display = "block";
      contentBody.style.height =  tab[this.length].offsetHeight + "px";
    }
  }
})();

(function(){
  

})();