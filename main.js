import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

console.log("Hello world");

//密碼眼睛
const toggleIcons = document.querySelectorAll(".togglePwd");

toggleIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const input = icon.previousElementSibling; // 同容器的 input
    const isShow = input.type === "password";
    input.type = isShow ? "text" : "password";

    // 切換圖示
    icon.classList.toggle("ph-eye-closed", !isShow);
    icon.classList.toggle("ph-eye", isShow);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // 定義每張圖片對應的文字內容
  const slideData = [
    {
      title: "HEPA 多重過濾寵物飲水器",
      text: "過濾重金屬元素 95%,讓主子愉快補水",
    },
    {
      title: "智能自動餵食器",
      text: "定時定量，主人出門也放心",
    },
    {
      title: "舒適寵物床墊",
      text: "給毛孩最溫暖的睡眠體驗",
    },
  ];

  // 初始化 Swiper
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
    },
    on: {
      slideChange: function () {
        const realIndex = this.realIndex;
        document.getElementById("slideTitle").textContent =
          slideData[realIndex].title;
        document.getElementById("slideText").textContent =
          slideData[realIndex].text;
      },
    },
  });
});























// NAV RWD 的
const hamburger = document.querySelector(".rwdNav-hamburger");
const dropdown = document.querySelector(".rwdNav-dropdown");
const allProducts = document.getElementById("rwdNav-all-products");
const allProductsSub = document.getElementById("rwdNav-all-products-submenu");
const petType = document.getElementById("rwdNav-pet-type");
const petTypeSub = document.getElementById("rwdNav-pet-type-submenu");
const productUse = document.getElementById("rwdNav-product-use");
const productUseSub = document.getElementById("rwdNav-product-use-submenu");
const priceRange = document.getElementById("rwdNav-price-range");
const priceRangeSub = document.getElementById("rwdNav-price-range-submenu");
const dropdownBtn = document.querySelector(".rwdNav-dropdown-btn-wrapper");

// 漢堡按鈕切換 X / ☰
hamburger.addEventListener("click", () => {
  const isVisible = dropdown.offsetParent !== null;

  // 切換下拉選單
  dropdown.style.display = isVisible ? "none" : "flex";
  dropdown.style.flexDirection = "column";

  // 切換下面的按鈕
  dropdownBtn.style.display = isVisible ? "none" : "block";

  dropdownBtn.style.display = isVisible ? "none" : "block";
  // 切換漢堡圖示
  hamburger.innerHTML = isVisible
    ? `<i class="bi bi-list text-primary-2-05 fs-4 py-1"></i>` // 漢堡
    : `<i class="bi bi-x-lg text-primary-2-05 fs-4 py-1"></i>`; // X
});

// 「所有商品」點擊展開次選單
allProducts.addEventListener("click", () => {
  const isVisible = allProductsSub.offsetParent !== null;
  allProductsSub.style.display = isVisible ? "none" : "flex";
  allProductsSub.style.flexDirection = "column";
});

// 「寵物種類」點擊展開最底層子選單
petType.addEventListener("click", () => {
  const isVisible = petTypeSub.offsetParent !== null;
  petTypeSub.style.display = isVisible ? "none" : "flex";
  petTypeSub.style.flexDirection = "column";
});
// 「商品用途」點擊展開最底層子選單
productUse.addEventListener("click", () => {
  const isVisible = productUseSub.offsetParent !== null;
  productUseSub.style.display = isVisible ? "none" : "flex";
  productUseSub.style.flexDirection = "column";
});
//價格區間
priceRange.addEventListener("click", () => {
  const isVisible = priceRangeSub.offsetParent !== null;
  priceRangeSub.style.display = isVisible ? "none" : "flex";
  priceRangeSub.style.flexDirection = "column";
});


//DESK的RWD
// 只針對桌面版的下拉選單
const desktopMenu = document.querySelector(".menu-all-products");
const desktopDropdown = desktopMenu.querySelector(".dropdown-menu");

if (desktopMenu && desktopDropdown) {
  let timeout;

  // 滑鼠移入主選單或下拉選單
  const showDropdown = () => {
    clearTimeout(timeout);
    desktopDropdown.style.display = "block";
  };

  // 滑鼠離開主選單或下拉選單
  const hideDropdown = () => {
    timeout = setTimeout(() => {
      desktopDropdown.style.display = "none";
    }, 100); // 延遲 100ms，避免閃爍
  };

  desktopMenu.addEventListener("mouseenter", showDropdown);
  desktopMenu.addEventListener("mouseleave", hideDropdown);
  desktopDropdown.addEventListener("mouseenter", showDropdown);
  desktopDropdown.addEventListener("mouseleave", hideDropdown);
}