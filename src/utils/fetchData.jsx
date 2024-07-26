export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
  },
};

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 2000; // 2 seconds delay

export const fetchData = async (url, options, retries = MAX_RETRIES) => {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      if (res.status === 429 && retries > 0) {
        // Handle rate limit error
        console.warn(`Rate limit exceeded. Retrying in ${RETRY_DELAY_MS / 1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS));
        return fetchData(url, options, retries - 1); // Retry with reduced retries
      } else {
        const errorText = await res.text();
        throw new Error(`Error ${res.status}: ${errorText}`);
      }
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null; // Return null or handle error as needed
  }
};
