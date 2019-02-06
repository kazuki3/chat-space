require 'rails_helper'

describe Message do
  describe '#create' do
    it 'is valid without image' do
      message = create(:message, image: nil)
      message.valid?
      expect(message).to be_valid
    end
  end

  describe '#create' do
    it 'is valid without message' do
      message = create(:message, message: nil)
      message.valid?
      expect(message).to be_valid
    end
  end

  describe '#create' do
    it 'is valid with message and image' do
      message = create(:message)
      message.valid?
      expect(message).to be_valid
    end
  end

  describe '#create' do
    it 'is invalid without message and image' do
      message = build(:message, message: nil, image: nil)
      message.valid?
      expect(message.errors[:message][0]).to include("が入力されていません。")
    end
  end

  describe '#create' do
    it 'is invalid without user_id' do
      message = build(:message, user_id: nil)
      message.valid?
      expect(message.errors[:user]).to include("を入力してください")
    end
  end

  describe '#create' do
    it 'is invalid without group_id' do
      message = build(:message, group_id: nil)
      message.valid?
      expect(message.errors[:group]).to include("を入力してください")
    end
  end

end
