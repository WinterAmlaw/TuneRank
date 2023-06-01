const db = require("../db");

//Get all Artists
async function getAllArtists(req, res) {
  try {
    const results = await db.query("select * from artists");

    // console.log(results)
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        users: results["rows"],
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

    res.status(200).json({
      status: "success",
      data: {
        user: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
}

// Post New Artist
async function postNewArtist(req, res) {
  try {
    const results = await db.query(
      'INSERT INTO artists (name,genre,cover_image) values ($1,$2,$3) returning *', 
      [req.body.name, req.body.genre, req.body.cover_image]
    );
    res.status(201).json({
      status: "success",
      data: {
        artist: results.rows[0]
      },
    })
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllArtists,
  getArtistById,
  postNewArtist,

};