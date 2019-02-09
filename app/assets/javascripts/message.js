$(document).on('turbolinks:load', function(){
  function buildHTML(message){

    var image = message.is_image_present ? `<img src='${message.image}'> ` : ''

    var html = `<div class="chat-main__message clearfix" data-id=${message.id}>
                  <div class="chat-main__message-name">${message.name}</div>
                  <div class="chat-main__message-date">${message.date}</div>
                  <div class="chat-main__message-body"></div>
                  ${message.content}
                  ${image}
                </div>`
    return html;
  }
  $('#new__message').on('submit', function(e){
    e.preventDefault();
    e.stopPropagation();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message-list').append(html);
      $("form")[0].reset();
      $('.chat-main__body').animate({scrollTop: $('.chat-main__message-list').height()}, 500);
    })
    .fail(function(){
      alert('自動更新に失敗しました');
    })
  })

setInterval(update, 1000);
  function update(){
    console.count("setInterval");
    if($('.chat-main__message')[0]){
      var message_id = $('.chat-main__message').last().data('id');
      console.log($('.chat-main__message').last().data('id'));
    } else {
      var message_id = 0
      console.log("else処理");
    }
    $.ajax({
      url: location.href,
      type: 'GET',
      data: {id: message_id},
      dataType: 'json'
    })
    .done(function(data) {
      console.log(data);
      data.forEach(function(message) {
        var html = buildHTML(data);
        $('.chat-main__message-list').append(html);
        $('.chat-main__body').animate({scrollTop: $('.chat-main__message-list').height()}, 500);
        $("form")[0].reset();
      })
    })
    .fail(function() {
      alert('自動更新に失敗しました');
    });
  }

});
