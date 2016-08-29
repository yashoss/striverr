# DB Schema

## users

| column name | data type | details |
|:-----------:|:---------:|:------:|
| id | integer | not null, primary key |
| username | string | not null, unique |
| email | string | not null, unique |
| password_digest | string | not null |
| session_token | string | not null, unique|
| views | integer | |

## gigs

|column name | data type | details |
|:----------:|:---------:|:-------:|
| id | integer | not null, primary key |
| user_id | integer | not null, indexed, foreign key|
| title | string | not null |
| category | string | not null |
| sub-category | string | not null |
| description | text | not null |
| photo_url | string | |
| delivery_time | integer | not null |
| revisions | integer | not null |
| price | float | not null |
| views | integer | |

## cart

|column name | data type | details |
|:----------:|:---------:|:-------:|
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key, indexed|
| gig_id | integer | not null, foreign key, indexed |

## orders

|column name | data type | details |
|:----------:|:---------:|:-------:|
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key, indexed |
| gig_id | integer | not null, foreign key, indexed |
