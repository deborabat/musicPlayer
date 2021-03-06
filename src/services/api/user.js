const axios = require('axios');

// eslint-disable-next-line import/prefer-default-export
export async function getUser() {
  const token = localStorage.getItem('accessToken');

  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function getNewReleases() {
  const token = localStorage.getItem('accessToken');

  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/browse/new-releases?country=Br&limit=5&offset=5',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.albums;
  } catch (error) {
    return null;
  }
}
