

export class RatingsService {

  static async submitRating(artistId, rating, userToken) {
    try {
      await fetch(`/artists/${artistId}/rate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`, 
        },
        body: JSON.stringify({ rating }),
      });
      console.log('Rating submitted successfully');
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  static async fetchAverageRating(artistId) {
    try {
      const response = await fetch(`/artists/${artistId}/average-rating`);
      const data = await response.json();
      return data.averageRating;
    } catch (error) {
      console.error('Error fetching average rating:', error);
    }
  };
  
  static async fetchUserRating(artistId, userToken) {
    try {
      const response = await fetch(`/artists/${artistId}/user-rating`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      const data = await response.json();
      return data.userRating;
    } catch (error) {
      console.error('Error fetching user rating:', error);
    }
  };

  
}