window.onload=function(){
    var scroll = document.querySelectorAll('.up');
     
    var Animation = function() {
      for(var i = 0; i < scroll.length; i++) {
      var triggerMargin = 80;
      if (window.innerHeight > scroll[i].getBoundingClientRect().top + triggerMargin) {
      scroll[i].classList.add('show');
      }
      }
      }
      window.addEventListener('scroll', Animation);
    }

    $('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
      var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
      var pos = $(elmHash).offset().top;	//idの上部の距離を取得
      $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
      return false;
    });

/**/
(window.onload = function() {

  // フェードイン処理(スクロール)
  jQuery(window).scroll(function (){
    jQuery(".fade").each(function(){
      var winheight = jQuery(window).height();
      var posi = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      if (scroll + winheight > posi){
        jQuery(this).addClass("fadein");
      } else {
        //　スクロールで画面上部に戻った際に要素を非表示にしたい場合は、下記の行のコメントを外し有効にしてください。
        //jQuery(this).removeClass("fadein");
    }
  }
);
})
})


$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});