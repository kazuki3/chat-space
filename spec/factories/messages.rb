FactoryGirl.define do
  factory :message do
    message Faker::Lorem.sentence
    image Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/toy_wagomu_pistol.png'))
    user
    group
  end
end
