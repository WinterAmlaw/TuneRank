const db = require("../db");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './media/artists')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop())
  }
})

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 1024*1024*5 } // limit file size to 5mb
}).single('cover_image'); // accepts file with name "cover_image"


//Get all Artists
async function getAllArtists(req, res) {
  try {
    const results = await db.query("select * from artists");

    const artistsWithImageUrls = results["rows"].map(artist => ({
      ...artist,
      image_url: `http://localhost:3009/media/artists/${artist.cover_image}`,
    }));
    console.log(artistsWithImageUrls)
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        artists: artistsWithImageUrls,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

// Get individual Artist
async function getArtistById(req, res) {
  try {
    const results = await db.query("select * from artists where id = $1", [
      req.params.id,
    ]);

    const artist = results.rows[0];
    
    // Get full filepath of cover image
    const imagePath = path.join(__dirname, '../media', artist.cover_image);

    // Add filepath to artist object
    artist.cover_image_path = imagePath;
    console.log(imagePath);
    res.status(200).json({
      status: "success",
      data: {
        artist: artist,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

// Post New Artist
async function postNewArtist(req, res) {
  try {
    upload(req, res, async function(err) {
      if (err) {
        // Handle errors
        console.log(err.message);
        return res.status(400).json({ error: err.message });
      }

      // If file is uploaded successfully, continue with inserting the data into database
      const results = await db.query(
        'INSERT INTO artists (name,genre,cover_image) values ($1,$2,$3) returning *', 
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

// Update Artist by ID
async function updateArtistById(req, res) {
  try {
    const results = await db.query(
      "UPDATE artists SET name = $1, genre = $2, cover_image = $3 WHERE id = $4 RETURNING *",
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

// Delete Artist by ID
async function deleteArtistById(req, res) {
  try {
    const results = await db.query("DELETE FROM artists WHERE id = $1", [req.params.id]);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllArtists,
  getArtistById,
  postNewArtist,
  updateArtistById,
  deleteArtistById,
};