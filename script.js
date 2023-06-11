// header
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > headerHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// header-respon
const header1 = document.querySelector('.header-responsive');
const headerHeight1 = header1.offsetHeight;

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > headerHeight1) {
    header1.classList.add('sticky');
  } else {
    header1.classList.remove('sticky');
  }
});




// banner tự chuyển slide
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2000, // Thiết lập thời gian tự chuyển slide (đơn vị: millisecond)
  },
});

// sản phẩm gồm sự kiện di chuột và chuyển slide
const productItems = document.querySelectorAll('.product-item');

productItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('hovered');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hovered');
  });
});

function changeImage(element, newSrc) {
  var imgElement = element.querySelector('img');
  imgElement.src = newSrc;
}

$(document).ready(function() {
  $('.custom-slider').slick({
    dots: true, // Hiển thị các điểm chuyển slide
    infinite: true, // Vòng lặp vô hạn của carousel
    slidesToShow: 1, // Số slide hiển thị trên mỗi lần trượt
    slidesToScroll: 1, // Số slide trượt mỗi lần chuyển
    prevArrow: $('.custom-button-prev'), // Nút trượt slide trước
    nextArrow: $('.custom-button-next'), // Nút trượt slide tiếp theo
    appendDots: $('.custom-pagination'), // Vị trí hiển thị các điểm chuyển slide
    responsive: [
      {
        breakpoint: 768, // Điểm phá vỡ (responsive breakpoint)
        settings: {
          slidesToShow: 2, // Số slide hiển thị trên mỗi lần trượt
          slidesToScroll: 2, // Số slide trượt mỗi lần chuyển
        }
      },
      {
        breakpoint: 480, // Điểm phá vỡ (responsive breakpoint)
        settings: {
          slidesToShow: 1, // Số slide hiển thị trên mỗi lần trượt
          slidesToScroll: 1, // Số slide trượt mỗi lần chuyển
        }
      }
    ]
  });
});

$(document).ready(function() {
  $('.custom-slider1').slick({
    dots: true, // Hiển thị các điểm chuyển slide
    infinite: true, // Vòng lặp vô hạn của carousel
    slidesToShow: 1, // Số slide hiển thị trên mỗi lần trượt
    slidesToScroll: 1, // Số slide trượt mỗi lần chuyển
    prevArrow: $('.custom-button-prev1'), // Nút trượt slide trước
    nextArrow: $('.custom-button-next1'), // Nút trượt slide tiếp theo
    appendDots: $('.custom-pagination1'), // Vị trí hiển thị các điểm chuyển slide
    responsive: [
      {
        breakpoint: 768, // Điểm phá vỡ (responsive breakpoint)
        settings: {
          slidesToShow: 2, // Số slide hiển thị trên mỗi lần trượt
          slidesToScroll: 2, // Số slide trượt mỗi lần chuyển
        }
      },
      {
        breakpoint: 480, // Điểm phá vỡ (responsive breakpoint)
        settings: {
          slidesToShow: 1, // Số slide hiển thị trên mỗi lần trượt
          slidesToScroll: 1, // Số slide trượt mỗi lần chuyển
        }
      }
    ]
  });
});

$(document).ready(function() {
  $('.custom-slider2').slick({
    dots: true, // Hiển thị các điểm chuyển slide
    infinite: true, // Vòng lặp vô hạn của carousel
    slidesToShow: 1, // Số slide hiển thị trên mỗi lần trượt
    slidesToScroll: 1, // Số slide trượt mỗi lần chuyển
    prevArrow: $('.custom-button-prev2'), // Nút trượt slide trước
    nextArrow: $('.custom-button-next2'), // Nút trượt slide tiếp theo
    appendDots: $('.custom-pagination2'), // Vị trí hiển thị các điểm chuyển slide
    responsive: [
      {
        breakpoint: 768, // Điểm phá vỡ (responsive breakpoint)
        settings: {
          slidesToShow: 2, // Số slide hiển thị trên mỗi lần trượt
          slidesToScroll: 2, // Số slide trượt mỗi lần chuyển
        }
      },
      {
        breakpoint: 480, // Điểm phá vỡ (responsive breakpoint)
        settings: {
          slidesToShow: 1, // Số slide hiển thị trên mỗi lần trượt
          slidesToScroll: 1, // Số slide trượt mỗi lần chuyển
        }
      }
    ]
  });
});

// Nhúng gg map
function initMap() {
  // Tạo một đối tượng bản đồ mới và đặt tâm của nó
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7128, lng: -74.0060}, // Thay đổi tọa độ tùy ý
    zoom: 12 // Thay đổi mức độ thu phóng tùy ý
  });
}

// hiệu ưng animate cho phần hình ảnh
window.addEventListener('scroll', animateOnScroll);

function animateOnScroll() {
  const twoImg = document.querySelector('.two-img');
  const largeImg = document.querySelector('.large-img');
  const threeImg = document.querySelector('.three-img');

  if (isElementInViewport(twoImg)) {
    twoImg.classList.add('animate-in');
  }

  if (isElementInViewport(largeImg)) {
    largeImg.classList.add('animate-in');
  }

  if (isElementInViewport(threeImg)) {
    threeImg.classList.add('animate-in');
  }
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// show giỏ hàng bên phải
const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');
const popup = document.getElementById('popup');
const body = document.querySelector('body');
let scrollPosition = 0;

openPopupButton.addEventListener('click', function() {
  popup.classList.add('show');
  scrollPosition = window.pageYOffset;
  body.style.overflow = 'hidden';
});
closePopupButton.addEventListener('click', function() {
  popup.classList.remove('show');
  body.style.overflow = 'auto';
  window.scrollTo(0, scrollPosition);
});

// show giỏ hàng respon
const openPopupButton1 = document.getElementById('open-popup1');
const closePopupButton1 = document.getElementById('close-popup');
const popup1 = document.getElementById('popup');
const body1 = document.querySelector('body');
let scrollPosition1 = 0;

openPopupButton1.addEventListener('click', function() {
  popup1.classList.add('show');
  scrollPosition1 = window.pageYOffset;
  body1.style.overflow = 'hidden';
});
closePopupButton1.addEventListener('click', function() {
  popup1.classList.remove('show');
  body1.style.overflow = 'auto';
  window.scrollTo(0, scrollPosition);
});
// form đăng nhập đăng ký
const loginRegisterLink = document.querySelector('.login-register-link');
const wrapper = document.querySelector('.wrapper');
const formContainer = document.querySelector('.form-container');
const formOverlay = document.querySelector('.form-overlay');

loginRegisterLink.addEventListener('click', function (event) {
  event.preventDefault();
  formContainer.style.display = 'block';
  formOverlay.style.display = 'block';
});

formOverlay.addEventListener('click', function (event) {
  if (event.target === formOverlay) {
    formContainer.style.display = 'none';
    formOverlay.style.display = 'none';
  }
});

// đăng ký đăng nhập respon
const loginRegisterLink1 = document.querySelector('.login-register-link1');
const wrapper1 = document.querySelector('.wrapper');
const formContainer1 = document.querySelector('.form-container');
const formOverlay1 = document.querySelector('.form-overlay');

loginRegisterLink1.addEventListener('click', function (event) {
  event.preventDefault();
  formContainer1.style.display = 'block';
  formOverlay1.style.display = 'block';
});

formOverlay1.addEventListener('click', function (event) {
  if (event.target === formOverlay1) {
    formContainer1.style.display = 'none';
    formOverlay1.style.display = 'none';
  }
});

// show navi
var openNavIcon = document.getElementById("open-nav-icon");
var nav = document.getElementById("open-nav");
var navContent = document.querySelector(".nav-content");

openNavIcon.addEventListener("click", function() {
  nav.classList.toggle("show");
  if (nav.classList.contains("show")) {
    nav.style.visibility = "visible";
    nav.style.opacity = "1";
  } else {
    nav.style.visibility = "hidden";
    nav.style.opacity = "0";
  }
});

document.addEventListener("click", function(event) {
  var isClickInsideNav = navContent.contains(event.target);
  var isClickInsideIcon = openNavIcon.contains(event.target);

  if (!isClickInsideNav && !isClickInsideIcon) {
    nav.classList.remove("show");
    nav.style.visibility = "hidden";
    nav.style.opacity = "0";
  }
});



// chuyển đổi ảnh khi click trong trang paybanphim
var MainImg=document.getElementById("MainImg");
var smallimg=document.getElementsByClassName("small-img");

smallimg[0].onclick=function(){
  MainImg.src=smallimg[0].src;
}
smallimg[1].onclick=function(){
  MainImg.src=smallimg[1].src;
}
smallimg[2].onclick=function(){
  MainImg.src=smallimg[2].src;
}
smallimg[3].onclick=function(){
  MainImg.src=smallimg[3].src;
}

const switchToDescription = document.getElementById('switch-to-description');
const switchToReview = document.getElementById('switch-to-review');
const descriptionPage = document.getElementById('description-page');
const reviewPage = document.getElementById('review-page');

switchToDescription.addEventListener('click', function() {
  switchToDescription.classList.add('active');
  switchToReview.classList.remove('active');
  descriptionPage.classList.remove('hidden');
  reviewPage.classList.add('hidden');
});

switchToReview.addEventListener('click', function() {
  switchToReview.classList.add('active');
  switchToDescription.classList.remove('active');
  reviewPage.classList.remove('hidden');
  descriptionPage.classList.add('hidden');
});


function toggleSubmenu(icon) {
  var submenu = icon.nextElementSibling;
  submenu.classList.toggle("show");
  icon.classList.toggle("rotate");
}









