import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';


console.log('Hello world');


const toggleIcons = document.querySelectorAll(".togglePwd");

toggleIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    const input = icon.previousElementSibling; // 同容器的 input
    const isShow = input.type === "password";
    input.type = isShow ? "text" : "password";

    // 切換圖示
    icon.classList.toggle("ph-eye-closed", !isShow);
    icon.classList.toggle("ph-eye", isShow);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  
  // 定義每張圖片對應的文字內容
  const slideData = [
    {
      title: 'HEPA 多重過濾寵物飲水器',
      text: '過濾重金屬元素 95%,讓主子愉快補水'
    },
    {
      title: '智能自動餵食器',
      text: '定時定量，主人出門也放心'
    },
    {
      title: '舒適寵物床墊',
      text: '給毛孩最溫暖的睡眠體驗'
    }
  ];

  // 初始化 Swiper
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
    },
    on: {
      slideChange: function() {
        const realIndex = this.realIndex;
        document.getElementById('slideTitle').textContent = slideData[realIndex].title;
        document.getElementById('slideText').textContent = slideData[realIndex].text;
      }
    }
  });
  
});