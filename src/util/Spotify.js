const clientId = ""
const redirectUrl = "http://localhost:3000"
let accessToken;


const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken
    }


    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

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
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
      headers: headers
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        } else {
          return jsonResponse.tracks.items.map(track => ({ id: track.id, name: track.name, artist: track.artists[0].name, album: track.album.name, uri: track.uri }));
        }
      });
  },

  savePlaylist(playlistName, trackURIs) {

    if (playlistName && trackURIs.length) {
      const accessToken = Spotify.getAccessToken();
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      let userID;
      let playlistID;
      return fetch('https://api.spotify.com/v1/me', {
        headers: headers
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(jsonResponse => {
          userID = jsonResponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ name: playlistName })
          })
            .then(response => {
              if (response.ok) {
                return response.json();
              }
            })
            .then(jsonResponse => {
              playlistID = jsonResponse.id;
              return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ uris: trackURIs })
              })
                .then(response => {
                  if (response.ok) {
                    return response.json();
                  }
                })
                .then(jsonResponse => jsonResponse);
            });
        });

    } else {
      return;
    }
  }
}

export default Spotify