$(function(){
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
    .fail(function(data){
      alert('メッセージもしくは画像を送信してください');
    })
  })
});
