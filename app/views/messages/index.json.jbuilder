json.array! @new_messages do |new_message|
  json.content  new_message.message
  json.name     new_message.user.name
  json.image    new_message.image.url
  json.date     new_message.created_at.strftime("%Y/%m/%d %H:%M")
  json.id       new_message.id
  json.is_image_present  new_message.image.present?
end
