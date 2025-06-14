const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

// Helper function to create form data
const createFormData = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });
  return formData;
};

/**
 * Fetch home list
 */
const fetchHomeList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/homeList/${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching home list:', error.message);
    return null;
  }
};

/**
 * Fetch series list
 */
const fetchSeriesList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/seriesList/${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching series list:', error.message);
    return null;
  }
};

/**
 * Fetch all series list
 */
const fetchAllSeriesList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/allSeriesList/${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all series list:', error.message);
    return null;
  }
};

/**
 * Fetch upcoming matches by series ID
 */
const fetchUpcomingMatchesBySeriesId = async (seriesId) => {
  try {
    const formData = createFormData({ series_id: seriesId });
    
    const response = await axios.post(
      `${BASE_URL}/upcomingMatchesBySeriesId/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching upcoming matches:', error.message);
    return null;
  }
};

/**
 * Fetch recent matches by series ID
 */
const fetchRecentMatchesBySeriesId = async (seriesId) => {
  try {
    const formData = createFormData({ series_id: seriesId });
    
    const response = await axios.post(
      `${BASE_URL}/recentMatchesBySeriesId/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching recent matches:', error.message);
    return null;
  }
};

const fetchLiveMatchList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/liveMatchList/${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching live match list:', error.message);
    return null;
  }
};

const fetchUpcomingMatches = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/upcomingMatches/${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching upcoming matches list:', error.message);
    return null;
  }
};

// GET: Recent Matches
const fetchRecentMatches = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/recentMatches/${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recent matches:', error.message);
    return null;
  }
};

// POST: Scorecard by Match ID
const fetchScorecardByMatchId = async (matchId) => {
  try {
    const formData = createFormData({ match_id: matchId });
    
    const response = await axios.post(
      `${BASE_URL}/scorecardByMatchId/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching scorecard:', error.message);
    return null;
  }
};

// POST: Match Info by Match ID
const fetchMatchInfoByMatchId = async (matchId) => {
  try {
    const formData = createFormData({ match_id: matchId });
    
    const response = await axios.post(
      `${BASE_URL}/matchInfo/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching match info:', error.message);
    return null;
  }
};

// POST: Playing XI by Match ID
const fetchPlayingXiByMatchId = async (matchId) => {
  try {
    const formData = createFormData({ match_id: matchId });
    
    const response = await axios.post(
      `${BASE_URL}/playingXiByMatchId/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching playing XI:', error.message);
    return null;
  }
};

// POST: Impact Players by Match ID
const fetchImpactPlayersByMatchId = async (matchId) => {
  try {
    const formData = createFormData({ match_id: matchId });
    
    const response = await axios.post(
      `${BASE_URL}/impactPlayersByMatchId/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching impact players:', error.message);
    return null;
  }
};

// POST: Bench Players by Match ID
const fetchBenchPlayersByMatchId = async (matchId) => {
  try {
    const formData = createFormData({ match_id: matchId });
    
    const response = await axios.post(
      `${BASE_URL}/benchPlayersByMatchId/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching bench players:', error.message);
    return null;
  }
};

// POST: Match Fancy/Feeds by Match ID
const fetchMatchFancyByMatchId = async (matchId) => {
  try {
    const formData = createFormData({ match_id: matchId });
    
    const response = await axios.post(
      `${BASE_URL}/matchFancy/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching match fancy data:', error.message);
    return null;
  }
};

// POST: Live Match Data by Match ID
const fetchLiveMatchByMatchId = async (matchId) => {
  try {
    const formData = createFormData({ match_id: matchId });
    
    const response = await axios.post(
      `${BASE_URL}/liveMatch/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching live match data:', error.message);
    return null;
  }
};

// POST: Points Table by Series ID
const fetchPointsTable = async (seriesId) => {
  try {
    const formData = createFormData({ series_id: seriesId });
    
    const res = await axios.post(
      `${BASE_URL}/pointsTable/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching points table:', error.message);
    return null;
  }
};

// POST: Group Points Table V1
const fetchGroupPointsTable = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/groupPointsTable/${API_KEY}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching group points table:', error.message);
    return null;
  }
};

const fetchNewsList = async () => {
  try {
    const formData = new FormData();
    
    const res = await axios.post(
      `${BASE_URL}/news/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching news:', error.message);
    return null;
  }
};

const fetchNewsDetail = async (newsId) => {
  try {
    const formData = createFormData({ news_id: newsId });
    
    const res = await axios.post(
      `${BASE_URL}/newsDetail/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching news detail:', error.message);
    return null;
  }
};

const fetchMatchOddHistory = async (matchId) => {
  try {
    const formData = createFormData({ match_id: matchId });
    
    const res = await axios.post(
      `${BASE_URL}/matchOddHistory/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching odd history:', error.message);
    return null;
  }
};

const fetchMatchOddHistoryV1 = async (matchId) => {
  try {
    const formData = createFormData({ match_id: matchId });
    
    const res = await axios.post(
      `${BASE_URL}/matchOddHistoryV1/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching odd history v1:', error.message);
    return null;
  }
};

const fetchMatchOverHistory = async (matchId) => {
  try {
    const formData = createFormData({ match_id: matchId });
    
    const res = await axios.post(
      `${BASE_URL}/matchOverHistory/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching over history:', error.message);
    return null;
  }
};

const fetchMatchStats = async (matchId) => {
  try {
    const formData = createFormData({ match_id: matchId });
    
    const res = await axios.post(
      `${BASE_URL}/matchStats/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching match stats:', error.message);
    return null;
  }
};

const fetchPlayerRanking = async (type) => {
  try {
    const formData = createFormData({ type });
    
    const res = await axios.post(
      `${BASE_URL}/playerRanking/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching player ranking:', error.message);
    return null;
  }
};

const fetchTeamRanking = async (type) => {
  try {
    const formData = createFormData({ type });
    
    const res = await axios.post(
      `${BASE_URL}/teamRanking/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching team ranking:', error.message);
    return null;
  }
};

const fetchCommentary = async (matchId) => {
  try {
    const formData = createFormData({ match_id: matchId });
    
    const res = await axios.post(
      `${BASE_URL}/commentary/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching commentary:', error.message);
    return null;
  }
};

const fetchManOfTheMatch = async (matchId) => {
  try {
    const formData = createFormData({ match_id: matchId });
    
    const res = await axios.post(
      `${BASE_URL}/manOfTheMatch/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching MOTM:', error.message);
    return null;
  }
};

const fetchManOfTheSeries = async (seriesId) => {
  try {
    const formData = createFormData({ series_id: seriesId });
    
    const res = await axios.post(
      `${BASE_URL}/manOfTheSeriesV1/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching MOTS:', error.message);
    return null;
  }
};

const fetchPlayerInfo = async (playerId) => {
  try {
    const formData = createFormData({ player_id: playerId });
    
    const res = await axios.post(
      `${BASE_URL}/playerInfo/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching player info:', error.message);
    return null;
  }
};

const fetchVenuesBySeriesId = async (seriesId) => {
  try {
    const formData = createFormData({ series_id: seriesId });
    
    const res = await axios.post(
      `${BASE_URL}/venuesBySeriesId/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching venues:', error.message);
    return null;
  }
};

const fetchVenueDetail = async (venueId) => {
  try {
    const formData = createFormData({ venue_id: venueId });
    
    const res = await axios.post(
      `${BASE_URL}/venuesDetail/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching venue detail:', error.message);
    return null;
  }
};

const fetchNewsBySeriesId = async (seriesId) => {
  try {
    const formData = createFormData({ series_id: seriesId });
    
    const res = await axios.post(
      `${BASE_URL}/newsBySeriesId/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching series news:', error.message);
    return null;
  }
};

const fetchSeriesNewsDetail = async (newsId) => {
  try {
    const formData = createFormData({ news_id: newsId });
    
    const res = await axios.post(
      `${BASE_URL}/seriesNewsDetail/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching series news detail:', error.message);
    return null;
  }
};

const fetchTeamFormByTeamId = async (teamAId, teamBId, matchType) => {
  try {
    const formData = createFormData({
      team_a_id: teamAId,
      team_b_id: teamBId,
      match_type: matchType
    });
    
    const res = await axios.post(
      `${BASE_URL}/teamFormByTeamId/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching team form:', error.message);
    return null;
  }
};

const fetchHeadToHead = async (teamAId, teamBId, matchType) => {
  try {
    const formData = createFormData({
      team_a_id: teamAId,
      team_b_id: teamBId,
      match_type: matchType
    });
    
    const res = await axios.post(
      `${BASE_URL}/headToHeadByTeamId/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching H2H:', error.message);
    return null;
  }
};

const fetchTeamComparison = async (teamAId, teamBId, matchType) => {
  try {
    const formData = createFormData({
      team_a_id: teamAId,
      team_b_id: teamBId,
      match_type: matchType
    });
    
    const res = await axios.post(
      `${BASE_URL}/teamComparisonByTeamId/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching team comparison:', error.message);
    return null;
  }
};

const fetchTossComparison = async (teamAId, teamBId, matchType) => {
  try {
    const formData = createFormData({
      team_a_id: teamAId,
      team_b_id: teamBId,
      match_type: matchType
    });
    
    const res = await axios.post(
      `${BASE_URL}/tossComparisonByTeamId/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching toss comparison:', error.message);
    return null;
  }
};

const fetchRecentMatchesByVenueId = async (venueId) => {
  try {
    const formData = createFormData({ venue_id: venueId });
    
    const res = await axios.post(
      `${BASE_URL}/recentMatchesByVenueId/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching venue matches:', error.message);
    return null;
  }
};

const fetchSeriesStats = async (seriesId, type, sub_type) => {
  try {
    const formData = createFormData({
      series_id: seriesId,
      type,
      sub_type
    });
    
    const res = await axios.post(
      `${BASE_URL}/seriesStatsBySeriesId/${API_KEY}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching series stats:', error.message);
    return null;
  }
};

// Export all functions
module.exports = {
  fetchHomeList,
  fetchSeriesList,
  fetchAllSeriesList,
  fetchUpcomingMatchesBySeriesId,
  fetchRecentMatchesBySeriesId,
  fetchLiveMatchList,
  fetchUpcomingMatches,
  fetchRecentMatches,
  fetchScorecardByMatchId,
  fetchMatchInfoByMatchId,
  fetchPlayingXiByMatchId,
  fetchImpactPlayersByMatchId,
  fetchBenchPlayersByMatchId,
  fetchMatchFancyByMatchId,
  fetchLiveMatchByMatchId,
  fetchPointsTable,
  fetchGroupPointsTable,
  fetchNewsList,
  fetchNewsDetail,
  fetchMatchOddHistory,
  fetchMatchOddHistoryV1,
  fetchMatchOverHistory,
  fetchMatchStats,
  fetchPlayerRanking,
  fetchTeamRanking,
  fetchCommentary,
  fetchManOfTheMatch,
  fetchManOfTheSeries,
  fetchPlayerInfo,
  fetchVenuesBySeriesId,
  fetchVenueDetail,
  fetchNewsBySeriesId,
  fetchSeriesNewsDetail,
  fetchTeamFormByTeamId,
  fetchHeadToHead,
  fetchTeamComparison,
  fetchTossComparison,
  fetchRecentMatchesByVenueId,
  fetchSeriesStats
};