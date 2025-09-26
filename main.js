import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

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