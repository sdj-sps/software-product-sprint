// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*** Workout Selection ***/
// Enter a workout into the selected workout line by pressing on a button 
function clickWorkout(x) {
    document.getElementById("workout-select").value = x;
}

/*** Playlist ***/
function showPlaylist() {
    document.getElementById("playlist-contents").style.display = "flex";
}

function hidePlaylist() {
    document.getElementById("playlist-contents").style.display = "none";
}

/*** Side Navigation Menu ***/
// Set the width of the side navigation to 250px and the left margin of the page content to 250px 
function openMenu() {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("side-menu").style.boxShadow = "black 0px 0px 10px";
    document.getElementById("main").style.marginLeft = "250px";
}

// Set the width of the side navigation to 0 and the left margin of the page content to 0 
function closeMenu() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("side-menu").style.borderRight = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function sunToggle() {
    document.getElementById("moon-toggle").style.display = "none";
    document.getElementById("sun-toggle").style.display = "flex";
}

function moonToggle() {
    document.getElementById("moon-toggle").style.display = "flex";
    document.getElementById("sun-toggle").style.display = "none";
}

function darkMode() {
    const x = document.body;
    x.classList.toggle("dark-mode-gray");
}

/*** Footer ***/
//Get the button
let mybutton = document.getElementById("scroll-top-button");

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*** Spotify ***/
const _getToken = async () => {

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)

        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
}
async function fetchId() {
    const bpmToPlaylistId = { '90': '5fQuCLAEcNtHbFTdyiEJDd', '120': '0StaxvjifcoNPeIM8stp4p', '128': '28p4zE67Svf2S1OIZlp0rh', '135': '26ZtghULwqbNzZK3yi3Txx', '150': '37i9dQZF1DX0hWmn8d5pRe' };
    const workoutNameToBpm = { 'Pilates': '90', 'Jogging': '120', 'Sit-Ups': '128', 'Aerobics': '135', 'Treadmill': '150', };
    const workoutElement = document.getElementById('workout-select');
    const workoutName = workoutElement.value;
    const bpm = workoutNameToBpm[workoutName];
    const playlistId = bpmToPlaylistId[bpm];

    const accessToken = 'BQCT1earqzC1mA6DQGw8d15isgeIrdp8aNZ92SPiZdGv-Ldq0rZS_rLBGFYk1TvgpkdP0WqbeRDQe8-7puAXQao1-b2yN1nRuKekoaCCegb0rUDtY25BPjp_Oez0ZsJ8Mu5k24YqK1P4BVFOJNWgO30gStRZkfo';


    const response = await fetch('https://api.spotify.com/v1/playlists/' + playlistId, {
        method: 'GET', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    });



    const responseJson = await response.json();
    console.log(responseJson);
    const playlistTitleElement = document.getElementById('playlist-title');
    playlistTitleElement.innerText = responseJson.name;
    const playlistLinkElement = document.getElementById('playlist-link');
    playlistLinkElement.href = responseJson.external_urls.spotify;
    const playlistThumbnailElement = document.getElementById('playlist-thumbnail');
    playlistThumbnailElement.src = responseJson.images[0].url;
}