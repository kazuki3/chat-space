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
|name|string|null:false, unique: true|
|email|string|null:false, unique: true|
|password|integer|null:false|
|password_confirmation|integer|null:false|

### Association
- has_many :members
- has_many :messages

## groupsテーブル
| Column | Type | Options |
|:-----------|------------:|:------------:|
|name|string|null:false|

### Association
- has_many :members
- has_many :messages

## messagesテーブル
| Column | Type | Options |
|:-----------|------------:|:------------:|
|message|text| |
|image|string| |
|date|datetime|null: false|
|user_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## membersテーブル
| Column | Type | Options |
|:-----------|------------:|:------------:|
|user_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

### index
- add_index :members, :group_id
- add_index :members, [:user_id, :group_id]
