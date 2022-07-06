# Getting Started with Create React App

This project was bootstrapped with Create React App and built as part of the Codecademy Pro "Build Front-End Web Applications from Scratch" course but refactored to remove class components and using Redux for a global state store.   


# Features

-Spotify Login — the first time a user searches for a song, album, or artist, Spotify will ask them to log in or set up a new account.
-Search by Song, Album, or Artist — a user can type the name of a song, artist, or album into the search bar and click the SEARCH button. The app will request song data about the user's input from the Spotify library.
-Populate Results List — Jammming displays the list of returned tracks from the user's query.
-Add Song to a Custom Playlist — users can add a track to their playlist by selecting a + sign on the right side of the track's display container.
-Remove Song from Custom Playlist — users can remove a track from their playlist by selecting a - sign on the right side of the track's display container.
-Change Playlist Title — users can change the title of their custom playlist.
-Save Playlist to Account — users can save their custom playlist by clicking a button called SAVE TO SPOTIFY.

## Instructions
1. Download or clone repo.
2. Navigate to the project folder in terminal.
3. Run `npm install`.
4. Modify the `client_id` on line 1 of 'src/util/Spotify.js' to a client id to a registered app in developer.spotify.com (instructions here: https://developer.spotify.com/dashboard/applications and https://developer.spotify.com/documentation/general/guides/authorization/)
5. Modify the `redirect_uri` variable on line 2 of 'src/util/Spotify.js' to the URL where you will be deploying the application.
6. Run `npm start` in the terminal.