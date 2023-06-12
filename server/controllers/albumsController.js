const db = require('../db')


//Get all Albums
async function getAllAlbums(req, res) {
  try {
    const results = await db.query("select * from albums");

    const albumsWithImageUrls = results["rows"].map(album => ({
      ...album,
      image_url: `http://localhost:3009/media/albums/${album.cover_image}`,
    }));
    console.log(albumsWithImageUrls)
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        albums: albumsWithImageUrls,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

// Get individual Album
async function getAlbumById(req, res) {
  try {
    const results = await db.query("select * from albums where id = $1", [
      req.params.id,
    ]);

    const album = results.rows[0];
    album.image_url = `http://localhost:3009/media/albums/${albums.cover_image}`;

    res.status(200).json({
      status: "success",
      data: {
        album: album,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

// Post New Album
async function postNewAlbum(req, res) {
  try {
    upload(req, res, async function(err) {
      if (err) {
        console.log(err.message);
        return res.status(400).json({ error: err.message });
      }

      const results = await db.query(
        'INSERT INTO albums (name,genre,cover_image) values ($1,$2,$3) returning *', 
        [req.body.name, req.body.genre, req.file.filename]
      );

      res.status(201).json({
        status: "success",
        data: {
          artist: results.rows[0]
        },
      })
    });
  } catch (error) {
    console.log(error);
  }
}

// Update Album by ID
async function updateAlbumById(req, res) {
  try {
    const results = await db.query(
      "UPDATE albums SET name = $1, genre = $2, cover_image = $3 WHERE id = $4 RETURNING *",
      [req.body.name, req.body.genre, req.body.cover_image, req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        artist: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
}

// Delete Album by ID
async function deleteAlbumById(req, res) {
  try {
    const results = await db.query("DELETE FROM albums WHERE id = $1", [req.params.id]);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllAlbums,
  getAlbumById,
  postNewAlbum,
  updateAlbumById,
  deleteAlbumById,
};