import './assets/scss/all.scss';
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";


// swiper js
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

const swiper = new Swiper(".mySwiper", {
    //避免使用者移動到
    allowTouchMove: false,
  
    //能呈現幾個.swiper-slide
    slidesPerView: "auto",
  
    //跑馬燈的速度(毫秒)
    speed: 12000,
  
    //是否重複
    loop: true,
  
    autoplay: {
      //到下一個幻燈片時，停下的時間
      delay: 0,
  
      //避免點擊造成跑馬燈失效，視情況增加
      disableOnInteraction: false
    }
  });

// 點擊首頁 recent 近期活動卡片 內 開賣中 按鈕時，不觸發 卡片的 a 連結 
const membershipModalId = document.getElementById("membershipModal");
const membershipModalObject = new bootstrap.Modal(membershipModalId);
const membershipBtns = document.querySelectorAll(".js-membership-modal-btn");

membershipBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    membershipModalObject.show();
  });
});
