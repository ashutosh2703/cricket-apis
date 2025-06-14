const express = require("express");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Import all API functions
const {
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
} = require("./api");

// Welcome route
app.get("/", (req, res) => {
  return res.status(200).send({ message: "Welcome to Cricket Sports API - Node.js" });
});

// Home and Series routes
app.get("/api/home-list", async (req, res) => {
  try {
    const data = await fetchHomeList();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch home list" });
  }
});

app.get("/api/series-list", async (req, res) => {
  try {
    const data = await fetchSeriesList();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch series list" });
  }
});

app.get("/api/all-series-list", async (req, res) => {
  try {
    const data = await fetchAllSeriesList();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch all series list" });
  }
});

// Match routes
app.get("/api/live-matches", async (req, res) => {
  try {
    const data = await fetchLiveMatchList();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch live matches" });
  }
});

app.get("/api/upcoming-matches", async (req, res) => {
  try {
    const data = await fetchUpcomingMatches();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch upcoming matches" });
  }
});

app.get("/api/recent-matches", async (req, res) => {
  try {
    const data = await fetchRecentMatches();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch recent matches" });
  }
});

// Series-specific match routes
app.post("/api/upcoming-matches-by-series", async (req, res) => {
  try {
    const { series_id } = req.body;
    
    if (!series_id) {
      return res.status(400).send({ error: "series_id is required" });
    }
    const data = await fetchUpcomingMatchesBySeriesId(series_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch upcoming matches by series" });
  }
});

app.post("/api/recent-matches-by-series", async (req, res) => {
  try {
    const { series_id } = req.body;
    if (!series_id) {
      return res.status(400).send({ error: "series_id is required" });
    }
    const data = await fetchRecentMatchesBySeriesId(series_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch recent matches by series" });
  }
});

// Match details routes
app.post("/api/scorecard", async (req, res) => {
  try {
    const { match_id } = req.body;
    if (!match_id) {
      return res.status(400).send({ error: "match_id is required" });
    }
    const data = await fetchScorecardByMatchId(match_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch scorecard" });
  }
});

app.post("/api/match-info", async (req, res) => {
  try {
    const { match_id } = req.body;
    if (!match_id) {
      return res.status(400).send({ error: "match_id is required" });
    }
    const data = await fetchMatchInfoByMatchId(match_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch match info" });
  }
});

app.post("/api/playing-xi", async (req, res) => {
  try {
    const { match_id } = req.body;
    if (!match_id) {
      return res.status(400).send({ error: "match_id is required" });
    }
    const data = await fetchPlayingXiByMatchId(match_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch playing XI" });
  }
});

app.post("/api/impact-players", async (req, res) => {
  try {
    const { match_id } = req.body;
    if (!match_id) {
      return res.status(400).send({ error: "match_id is required" });
    }
    const data = await fetchImpactPlayersByMatchId(match_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch impact players" });
  }
});

app.post("/api/bench-players", async (req, res) => {
  try {
    const { match_id } = req.body;
    if (!match_id) {
      return res.status(400).send({ error: "match_id is required" });
    }
    const data = await fetchBenchPlayersByMatchId(match_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch bench players" });
  }
});

app.post("/api/match-fancy", async (req, res) => {
  try {
    const { match_id } = req.body;
    if (!match_id) {
      return res.status(400).send({ error: "match_id is required" });
    }
    const data = await fetchMatchFancyByMatchId(match_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch match fancy data" });
  }
});

app.post("/api/live-match", async (req, res) => {
  try {
    const { match_id } = req.body;
    if (!match_id) {
      return res.status(400).send({ error: "match_id is required" });
    }
    const data = await fetchLiveMatchByMatchId(match_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch live match data" });
  }
});

app.post("/api/commentary", async (req, res) => {
  try {
    const { match_id } = req.body;
    if (!match_id) {
      return res.status(400).send({ error: "match_id is required" });
    }
    const data = await fetchCommentary(match_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch commentary" });
  }
});

// Points table routes
app.post("/api/points-table", async (req, res) => {
  try {
    const { series_id } = req.body;
    if (!series_id) {
      return res.status(400).send({ error: "series_id is required" });
    }
    const data = await fetchPointsTable(series_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch points table" });
  }
});

app.get("/api/group-points-table", async (req, res) => {
  try {
    const data = await fetchGroupPointsTable();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch group points table" });
  }
});

// News routes
app.get("/api/news", async (req, res) => {
  try {
    const data = await fetchNewsList();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch news" });
  }
});

app.post("/api/news-detail", async (req, res) => {
  try {
    const { news_id } = req.body;
    if (!news_id) {
      return res.status(400).send({ error: "news_id is required" });
    }
    const data = await fetchNewsDetail(news_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch news detail" });
  }
});

app.post("/api/news-by-series", async (req, res) => {
  try {
    const { series_id } = req.body;
    if (!series_id) {
      return res.status(400).send({ error: "series_id is required" });
    }
    const data = await fetchNewsBySeriesId(series_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch series news" });
  }
});

app.post("/api/series-news-detail", async (req, res) => {
  try {
    const { news_id } = req.body;
    if (!news_id) {
      return res.status(400).send({ error: "news_id is required" });
    }
    const data = await fetchSeriesNewsDetail(news_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch series news detail" });
  }
});

// Match analysis routes
app.post("/api/match-odd-history", async (req, res) => {
  try {
    const { match_id } = req.body;
    if (!match_id) {
      return res.status(400).send({ error: "match_id is required" });
    }
    const data = await fetchMatchOddHistory(match_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch match odd history" });
  }
});

app.post("/api/match-odd-history-v1", async (req, res) => {
  try {
    const { match_id } = req.body;
    if (!match_id) {
      return res.status(400).send({ error: "match_id is required" });
    }
    const data = await fetchMatchOddHistoryV1(match_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch match odd history v1" });
  }
});

app.post("/api/match-over-history", async (req, res) => {
  try {
    const { match_id } = req.body;
    if (!match_id) {
      return res.status(400).send({ error: "match_id is required" });
    }
    const data = await fetchMatchOverHistory(match_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch match over history" });
  }
});

app.post("/api/match-stats", async (req, res) => {
  try {
    const { match_id } = req.body;
    if (!match_id) {
      return res.status(400).send({ error: "match_id is required" });
    }
    const data = await fetchMatchStats(match_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch match stats" });
  }
});

// Rankings routes
app.post("/api/player-ranking", async (req, res) => {
  try {
    const { type } = req.body;
    if (!type) {
      return res.status(400).send({ error: "type is required" });
    }
    const data = await fetchPlayerRanking(type);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch player ranking" });
  }
});

app.post("/api/team-ranking", async (req, res) => {
  try {
    const { type } = req.body;
    if (!type) {
      return res.status(400).send({ error: "type is required" });
    }
    const data = await fetchTeamRanking(type);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch team ranking" });
  }
});

// Awards routes
app.post("/api/man-of-the-match", async (req, res) => {
  try {
    const { match_id } = req.body;
    if (!match_id) {
      return res.status(400).send({ error: "match_id is required" });
    }
    const data = await fetchManOfTheMatch(match_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch man of the match" });
  }
});

app.post("/api/man-of-the-series", async (req, res) => {
  try {
    const { series_id } = req.body;
    if (!series_id) {
      return res.status(400).send({ error: "series_id is required" });
    }
    const data = await fetchManOfTheSeries(series_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch man of the series" });
  }
});

// Player and venue routes
app.post("/api/player-info", async (req, res) => {
  try {
    const { player_id } = req.body;
    if (!player_id) {
      return res.status(400).send({ error: "player_id is required" });
    }
    const data = await fetchPlayerInfo(player_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch player info" });
  }
});

app.post("/api/venues-by-series", async (req, res) => {
  try {
    const { series_id } = req.body;
    if (!series_id) {
      return res.status(400).send({ error: "series_id is required" });
    }
    const data = await fetchVenuesBySeriesId(series_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch venues by series" });
  }
});

app.post("/api/venue-detail", async (req, res) => {
  try {
    const { venue_id } = req.body;
    if (!venue_id) {
      return res.status(400).send({ error: "venue_id is required" });
    }
    const data = await fetchVenueDetail(venue_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch venue detail" });
  }
});

app.post("/api/recent-matches-by-venue", async (req, res) => {
  try {
    const { venue_id } = req.body;
    if (!venue_id) {
      return res.status(400).send({ error: "venue_id is required" });
    }
    const data = await fetchRecentMatchesByVenueId(venue_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch recent matches by venue" });
  }
});

// Team comparison routes
app.post("/api/team-form", async (req, res) => {
  try {
    const { team_a_id, team_b_id, match_type } = req.body;
    if (!team_a_id || !team_b_id || !match_type) {
      return res.status(400).send({ 
        error: "team_a_id, team_b_id, and match_type are required" 
      });
    }
    const data = await fetchTeamFormByTeamId(team_a_id, team_b_id, match_type);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch team form" });
  }
});

app.post("/api/head-to-head", async (req, res) => {
  try {
    const { team_a_id, team_b_id, match_type } = req.body;
    if (!team_a_id || !team_b_id || !match_type) {
      return res.status(400).send({ 
        error: "team_a_id, team_b_id, and match_type are required" 
      });
    }
    const data = await fetchHeadToHead(team_a_id, team_b_id, match_type);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch head-to-head data" });
  }
});

app.post("/api/team-comparison", async (req, res) => {
  try {
    const { team_a_id, team_b_id, match_type } = req.body;
    if (!team_a_id || !team_b_id || !match_type) {
      return res.status(400).send({ 
        error: "team_a_id, team_b_id, and match_type are required" 
      });
    }
    const data = await fetchTeamComparison(team_a_id, team_b_id, match_type);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch team comparison" });
  }
});

app.post("/api/toss-comparison", async (req, res) => {
  try {
    const { team_a_id, team_b_id, match_type } = req.body;
    if (!team_a_id || !team_b_id || !match_type) {
      return res.status(400).send({ 
        error: "team_a_id, team_b_id, and match_type are required" 
      });
    }
    const data = await fetchTossComparison(team_a_id, team_b_id, match_type);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch toss comparison" });
  }
});

// Series stats route
app.post("/api/series-stats", async (req, res) => {
  try {
    const { series_id, type, sub_type } = req.body;
    if (!series_id || !type || !sub_type) {
      return res.status(400).send({ 
        error: "series_id, type, and sub_type are required" 
      });
    }
    const data = await fetchSeriesStats(series_id, type, sub_type);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch series stats" });
  }
});

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).send({ 
    status: "OK", 
    message: "Cricket API is running", 
    timestamp: new Date().toISOString() 
  });
});

// 404 handler - must be after all other routes
app.use((req, res) => {
  res.status(404).send({ 
    error: "Route not found", 
    message: "The requested endpoint does not exist" 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ 
    error: "Internal server error", 
    message: "Something went wrong!" 
  });
});

module.exports = { app };