const API_KEY = process.env.API_KEY!;

type Fetch = {
  title: string;
  url: string;
};

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },

  fetchMysteryMovies: {
    title: "Mystery",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
};
