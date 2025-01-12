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

/*** Landing Page ***/
/* Enter workout into the selected workout line by pressing on button */
function clickWorkout(x) {
    document.getElementById("workout-select").value = x;
}

/*** Playlist Page ***/


/*** Side Navigation Menu ***/
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openMenu() {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeMenu() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

/* Activate the dark-mode class in the style sheet on the body */
function darkMode() {
    const x = document.body;
    x.classList.toggle("dark-mode");
}


