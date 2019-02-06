class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  mount_uploader :image, ImageUploader
  # validates :message_or_image, presence: true

  # private
  #   def message_or_image
  #     message.presence or image.presence
  #   end

  validates :message, presence: true, unless: :image_nil?
  # validates :image, presence: true, unless: :message_nil?

  private
    # def message_nil?
    #   message.presence
    # end

    def image_nil?
      image.presence
    end

end
