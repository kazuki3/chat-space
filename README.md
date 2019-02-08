# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## usersテーブル
| Column | Type | Options |
|:-----------|------------:|:------------:|
|name|string|null:false, index: true|
|email|string|null:false, unique: true|
|password|integer|null:false|
|password_confirmation|integer|null:false|

### Association
- has_many :groups, through: :members
- has_many :messages
- has_many :group_users

## groupsテーブル
| Column | Type | Options |
|:-----------|------------:|:------------:|
|name|string|null:false|

### Association
- has_many :users, through: :members
- has_many :messages
- has_many :group_users

## messagesテーブル
| Column | Type | Options |
|:-----------|------------:|:------------:|
|message|text| |
|image|string| |
|user_id|references|null: false, foreign_key: true, index: true|
|group_id|references|null: false, foreign_key: true, index: true|

### Association
- belongs_to :group
- belongs_to :user


## group_usersテーブル
| Column | Type | Options |
|:-----------|------------:|:------------:|
|user|references|null: false, foreign_key: true, index: true|
|group|references|null: false, foreign_key: true, index: true|

### Association
- belongs_to :group
- belongs_to :user
