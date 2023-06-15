const db = require('../db');

async function getAllProfiles(req, res) {
  try {
    const results = await db.query('SELECT * FROM profiles');
    console.log(results);

    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        profiles: results['rows'],
      }
    })
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getAllProfiles,
};