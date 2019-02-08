json.content  @message.message
json.name     @message.user.name
json.image    @message.image.url
json.date     @message.created_at.strftime("%Y/%m/%d %H:%M")
json.id       @message.id
json.is_image_present  @message.image.present?
