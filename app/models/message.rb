class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  mount_uploader :image, ImageUploader

  validates :message, presence: true, unless: :image_nil?

  private
    def image_nil?
      image.presence
    end

end
