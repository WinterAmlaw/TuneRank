CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash CHAR(60) NOT NULL,
  profile_picture VARCHAR(200)
);

CREATE TABLE  artists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  genre VARCHAR(100),
  cover_image VARCHAR(200)
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  artist_id INTEGER NOT NULL REFERENCES artists(id),
  release_date DATE,
  genre VARCHAR(100),
  cover_image VARCHAR(200),
  added_by INTEGER REFERENCES users(id)
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  track_number INTEGER NOT NULL,
  album_id INTEGER REFERENCES albums(id)
);

CREATE TABLE album_reviews (
  user_id INTEGER REFERENCES users(id),
  album_id INTEGER REFERENCES albums(id),
  rating INT NOT NULL check(rating >=1 and rating <=5),
  review TEXT,
  PRIMARY KEY(user_id, album_id)
);

CREATE TABLE song_reviews (
  user_id INTEGER REFERENCES users(id),
  album_id INTEGER REFERENCES albums(id),
  song_id INTEGER REFERENCES songs(id),
  rating INT NOT NULL check(rating >=1 and rating <=5),
  review TEXT,
  PRIMARY KEY(user_id, album_id, song_id)
);

ALTER TABLE users ADD COLUMN added_albums INTEGER[] DEFAULT '{}';

-- This array will store the IDs of the albums added by the user, and can be updated whenever a user adds a new album to the site.

-- With this schema, you can retrieve a user's ratings and added albums by joining across the appropriate tables. For example, to get a user's ratings:

SELECT albums.title, ratings.rating FROM albums
  JOIN ratings ON albums.id = ratings.album_id
  WHERE ratings.user_id = $1;

-- And to get a user's added albums:

SELECT * FROM albums WHERE added_by = $1;

-- To retrieve all songs for a particular album, you can use a query like this:
SELECT * FROM songs WHERE album_id = <album_id>;

-- And to retrieve all ratings for a particular album and song, you can use a query like this:
SELECT * FROM song_ratings WHERE album_id = <album_id> AND song_id = <song_id>;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash CHAR(60) NOT NULL,
  profile_picture VARCHAR(200)
);

CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  profile_image VARCHAR(200),
  description TEXT
);

ALTER TABLE users ADD CONSTRAINT fk_profile_id FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE;

CREATE OR REPLACE FUNCTION create_profile()
RETURNS TRIGGER AS $$
BEGIN
    RAISE NOTICE 'New user ID: %', NEW.id;
    INSERT INTO profiles (id, user_id) VALUES (NEW.id, NEW.id);
    RETURN NEW;
END; $$
LANGUAGE PLPGSQL;

CREATE TRIGGER create_profile_trigger AFTER INSERT ON users
FOR EACH ROW EXECUTE FUNCTION create_profile();


-- To retrieve all of the artists, albums, songs, and reviews by a specific user, you will need to join across the appropriate tables by specifying the user_id column value.
SELECT albums.* FROM albums
  JOIN profiles ON albums.id = ANY(profiles.album_id)
  WHERE profiles.user_id = $1;

-- Insert a new artist and link it to the user's profile
INSERT INTO artists (name, genre, cover_image)
VALUES ('Pink Floyd', 'Progressive rock', 'pink-floyd.jpg');

INSERT INTO profiles (user_id, artist_id)
VALUES (2, 1);

-- Insert a new album and link it to the user's profile
INSERT INTO albums (title, artist_id, release_date, genre, cover_image, added_by)
VALUES ('Dark Side of the Moon', 1, '1973-03-01', 'Progressive rock', 'dark-side.jpg', 2);

INSERT INTO profiles (user_id, album_id)
VALUES (2, 1);

-- Insert a new song and link it to the user's profile
INSERT INTO songs (title, track_number, album_id)
VALUES ('Money', 6, 1);

INSERT INTO profiles (user_id, song_id, album_id)
VALUES (2, 1, 1);

-- To display the name of the user who added an artist, album, or song on the frontend, you can join the profiles table with the users table using the user_id column. For example, to retrieve the details of an artist and display the name of the user who added it, you can use a query like this:

SELECT artists.*, users.username AS added_by
FROM profiles 
JOIN artists ON profiles.artist_id = artists.id
JOIN users ON profiles.user_id = users.id
WHERE artists.id = 1; -- replace with the ID of the artist you want to retrieve

CREATE TABLE artist_ratings (
  user_id INTEGER REFERENCES users(id),
  artist_id INTEGER REFERENCES artists(id),
  rating INT NOT NULL CHECK(rating >= 1 AND rating <= 5),
  PRIMARY KEY(user_id, artist_id)
);

-- Optionally, you might want to store when the rating was made
ALTER TABLE artist_ratings ADD COLUMN created_at TIMESTAMP DEFAULT NOW();