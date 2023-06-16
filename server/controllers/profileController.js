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

async function getProfileById(req, res) {
  try {
    const result = await db.query('SELECT * FROM profiles where id = $1', [
      req.params.id
    ]);
    console.log(result);
    res.status(200).json({
      status: 'success',
      data: {
        profile: result.rows[0]
      }
    })
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProfiles,
  getProfileById,
};