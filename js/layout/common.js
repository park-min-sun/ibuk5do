


// 탭메뉴 
 $(".tab_content").hide();
 $(".tab_container").each(function () {
   $(this).children(".tabs li:first").addClass("active"); // first tab contents show
   $(this).children(".tab_content").first().show();
 });

 $(".tabs li a").click(function () {  
   $(this).parent().siblings("li").removeClass("active")
   $(this).parent().addClass("active"); 
   $(this).parent().parent().parent().parent().find(".tab_content").hide();
   var activeTab = $(this).attr("rel");
    $("#" + activeTab).show();
 });


// 탑 스크롤 버튼
$(function() {
    $(".top_btn").click(function() {
        $('html').animate({scrollTop : 0}, 600);
    });
  });


// 스와이퍼 슬라이드 옵션

let mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  breakpoints: {
    // 화면의 넓이가 320px 이상일 때
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // 화면의 넓이가 640px 이상일 때
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

// 제이쿼리 달력
 $.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년'
});

$(function() {
    $("#datepicker1").datepicker();
});   
