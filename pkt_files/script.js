$(function() {

  //モーダル
  $('#show-intro').click(function() {
    $('#intro-modal').css('display', 'block');
  });
  $('#close-intro').click(function() {
    $('#intro-modal').css('display', 'none');
  });

  //Hello world
  var $hello = $('#hello-world').text();
  $('#show-hello').click(function() {
    $hello = 'Hello world!';
    $('#hello-world').text($hello);
    $('#hello-modal').css('display', 'block');
  });
  $('#close-hello').click(function() {
    $('#hello-modal').css('display', 'none');
  });
  $('#hello-btn').click(function() {
    $hello += 'Hello world!';
    $('#hello-world').text($hello);
  });

  //スクロールボタン
  function scrollTop() {
    $('html, body').animate({'scrollTop': 0}, 500);
  }
  $('#scroll-container').click(function() {
    scrollTop();
  });
  $('#jquery-top').click(function() {
    scrollTop();
  });

  //目次
  $('#undisplay').click(function() {
    if($('#indexes').hasClass('active')) {
      $('#indexes').removeClass('active');
      $('#indexes').slideUp();
    } else {
      $('#indexes').addClass('active');
      $('#indexes').slideDown();
    }
  });

  //ナビゲーション
  $('.index').click(function() {
    var target = $(this).attr('href');
    var off = $(target).offset().top;
    $('html, body').animate({'scrollTop': off - 70}, 500);
  });

  //アコーディオン
  $('.answer-display').click(function() {
    var $answer = $(this).parent().parent().find('.answer');
    var $open = $($answer).hasClass('open');
    if($open) {
      $($answer).slideUp();
      $($answer).removeClass('open');
      $(this).text('回答を隠す');
    } else {
      $($answer).slideDown();
      $($answer).addClass('open');
      $(this).text('回答を見る');
    }
  });

  //snsモーダル
  $('.sns-btns').click(function() {
    $('#sns-modal').css('display', 'block');
  });
  $('#close-sns').click(function() {
    $('#sns-modal').css('display', 'none');
  });

});
