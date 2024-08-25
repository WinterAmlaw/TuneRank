const db = require('../db'); 

async function rateArtist (req, res) {
  const userId = req.user.id;
  const { id: artistId } = req.params;
  const { rating } = req.body;

  try {
    // insert if not exists, update if it does
    await db.query(
      `INSERT INTO artist_ratings (user_id, artist_id, rating)
      VALUES ($1, $2, $3)
      ON CONFLICT (user_id, artist_id)
      DO UPDATE SET rating = EXCLUDED.rating`,
      [userId, artistId, rating]
    );

    res.status(200).json({ message: 'Rating submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while submitting the rating' });
  }
};

async function getUserRatingForArtist(req, res) {
  const userId = req.user.id;
  const { id: artistId } = req.params;

  try {
    const result = await db.query(
      `SELECT rating FROM artist_ratings WHERE user_id = $1 AND artist_id = $2`,
      [userId, artistId]
    );

    if (result.rows.length > 0) {
      res.status(200).json({ rating: result.rows[0].rating });
    } else {
      res.status(404).json({ message: 'Rating not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the rating' });
  }
};

async function getAverageRatingForArtist(req, res) {
  const { id: artistId } = req.params;

  try {
    const result = await db.query(
      `SELECT AVG(rating) as average_rating FROM artist_ratings WHERE artist_id = $1`,
      [artistId]
    );

    if (result.rows.length > 0) {
      res.status(200).json({ averageRating: parseFloat(result.rows[0].average_rating).toFixed(2) });
    } else {
      res.status(404).json({ message: 'No ratings found for this artist' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while calculating the average rating' });
  }
};

module.exports = {
  rateArtist,
  getUserRatingForArtist,
  getAverageRatingForArtist
};