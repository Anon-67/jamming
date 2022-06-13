const clientId = "a6f1d237b8bf4bd0ac46f65a365faddc"
const redirectUrl = "http://localhost:3000"

let accessToken;


const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken
        }


        const accessTokenMatch = window.location.href.match(/access_token=({^&}*)/)
        const expiresInMatch = window.location.href.match(/expires_in=({^&}*)/)

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1])
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState("Access Token", null, "/")
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`
            window.location = accessUrl
        }
    },

    search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        const headers = {
          Authorization: `Bearer ${accessToken}`
        };
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {headers: headers}).then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Request failed!');
        }, networkError => {
          console.log(networkError.message);
        }).then(jsonResponse => {
          if (!jsonResponse.tracks) {
            return [];
          }
          return jsonResponse.tracks.items.map(track => ({id: track.id, name: track.name, artist: track.artists[0].name, album: track.album.name, uri: track.uri}));
        });
      }
}

export default Spotify