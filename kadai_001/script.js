$(function () {
  
  // カルーセル
  $('.mainvisual').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    fade: true,
  });

  // リンクホバーで透明度下げる
  $('h1').on({
    'mouseenter': function() {
      $('h1').animate({opacity:0.5});
    },
    'mouseleave': function() {
      $('h1').animate({opacity:1},300);
    }
  });
  $('#aboutA').on({
    'mouseenter': function() {
      $('#aboutA').animate({opacity:0.5});
    },
    'mouseleave': function() {
      $('#aboutA').animate({opacity:1},300);
    }
  });
  $('#worksA').on({
    'mouseenter': function() {
      $('#worksA').animate({opacity:0.5});
    },
    'mouseleave': function() {
      $('#worksA').animate({opacity:1},300);
    }
  });

  // TOPボタン
  $('#backBtn').hide();             //ボタンを非表示
  $(window).scroll(function () {    // スクロールでTOPボタンを表示
    // console.log($(this).scrollTop());
    // 100pxスクロールしたとき
    if ($(this).scrollTop() > 100) {
      $('#backBtn').fadeIn();
    }else{
      $('#backBtn').fadeOut();
    }
  });

  // ページ内リンクがクリックされたとき、滑らかに移動
  $('a[href^="#"]').click(function () {

    const href = $(this).attr('href'); //hrefを取得
    
    if (href == '#') {
      $('html, body').animate({scrollTop:0}); //ここの書き方
    }else{
      const uekara = $(href).offset().top; // 上からの距離を取得
      $('html, body').animate({scrollTop:uekara});
    }
  });

  // セクションをフェードイン
  let scroll;
  let winH = $(window).height();
  let objTop = $('#about').offset().top;
  $(window).on('scroll', function(){
    scroll = $(window).scrollTop();
    if(scroll >= objTop - winH){
      $('#about').addClass('opacity');
    }
  });

  let objTopW = $('#works').offset().top;
  $(window).on('scroll', function(){
    if(scroll >= objTopW - winH){
      $('#works').addClass('opacity');
    }
  });


  // モーダル
  $('.modal').hide();
  $('.worksImg').click(function () {
    const thisSrc = $(this).attr('src');
    $('.modaiImage').attr('src', thisSrc);
    $('.modal').fadeIn();
  });
  // 閉じるボタン
  $('.modalBtn').click(function () {
    $('.modal').fadeOut();
  });
}); //最終行