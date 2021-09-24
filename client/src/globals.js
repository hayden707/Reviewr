export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'

export const DEEZER_BASE_URL =
  process.env.REACT_APP_USE_DEEZER === 'true'
    ? 'https://api.deezer.com'
    : 'https://deezerdevs-deezer.p.rapidapi.com'
