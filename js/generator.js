// Created a list of songs in an array
const tracks = [
    {
        title: "Jazzy Javascript",
        src: "./music/jazz.mp3",
        image: "./img/jazz.jpg",
        artist: "Isaiah Henry",
        genre: "Jazz",
    },
    {
        title: "Responsive Rock",
        src: "./music/rock.mp3",
        image: "./img/rock.jpg",
        artist: "Isaiah Henry",
        genre: "Rock",
    },
    {
        title: "2 Dimensional",
        src: "./music/VideoGame.mp3",
        image: "./img/retro.jpg",
        artist: "Isaiah Henry",
        genre: "Video Game Music",
    },
    {
        title: "Breakpoints",
        src: "./music/edm.mp3",
        image: "./img/edm.jpg",
        artist: "Isaiah Henry",
        genre: "EDM",
    },
    {
        title: "Cascading Style Beat",
        src: "./music/drill.mp3",
        image: "./img/trap.jpg",
        artist: "Isaiah Henry",
        genre: "Rap",
    },
    {
        title: "Array Of Sunshine",
        src: "./music/neo.mp3",
        image: "./img/jazzguitar.jpg",
        artist: "Isaiah Henry",
        genre: "Neo Soul",
    },
    {
        title: "Fantastic Frontend",
        src: "./music/classical.mp3",
        image: "./img/piano.jpg",
        artist: "Isaiah Henry",
        genre: "Classical",
    },
    {
        title: "3 Dimensional",
        src: "./music/bgm.mp3",
        image: "./img/game.jpg",
        artist: "Isaiah Henry",
        genre: "Video Game Music",
    },
];
// Function to obtain genre of each index of given array
const getGenres = (array = []) =>{
    const res = [];
    for (let i = array.length;i--;){
       if (res.indexOf(array[i].genre) < 0) {
          res.push(array[i].genre);
       };
    }
    return res;
};
// Creating an array containing every unique genre from
const genres = getGenres(tracks);
// Creating objects to target necessary html elements
const player = document.querySelector('.music')
const songlist = document.querySelector('.songlist')
const genrelist = document.querySelector('#genre')
const filter = document.querySelector('#filter')
const songs = document.querySelectorAll('.song');
// Populating table in html for every track
tracks.forEach(element => {
    songlist.innerHTML +=`
    <tr class="song" title="${element.title}" onclick="switchSong(this)">
    <td>${element.title}</td>
    <td>${element.artist}</td>
    <td>${element.genre}</td>
    </tr>
    `
});
// Populating table in html for selected 
genres.forEach(value => {
    genrelist.innerHTML+=`
    <option value="${value}">${value}</option>
    `
})
// The replacing the player with one with the corresponding attributes
const switchSong = function(e){
    tracks.forEach(element =>{
        if(element.title === e.title){
            player.innerHTML =`
            <div id="player">
                    <img src='${element.image}' alt='${element.title}'>
                    <audio-player
                    title='${element.title}'
                    src="${element.src}"
                    bar-width="5"
                    bar-gap="2"
                    autoplay></audio-player>
            </div>
            `
        }
    })
    
};
// Populating table in html for genre selected from filter form
const selectTracks = function(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    songlist.innerHTML = `<tr>
    <th>Song Title</th>
    <th>Artist</th>
    <th>Genre</th>
    </tr>
    `
    const data = Object.fromEntries(new FormData(e.target).entries());
    let currentGenre = data.genre;
// Generating necessary rows based on the genre selected
    tracks.forEach(element =>{
        if(currentGenre === "all"){
                songlist.innerHTML +=`
                <tr class="song" title="${element.title}" onclick="switchSong(this)">
                <td>${element.title}</td>
                <td>${element.artist}</td>
                <td>${element.genre}</td>
                </tr>
                `
            ;
        } else if(element.genre === currentGenre) {
            songlist.innerHTML +=`
    <tr class="song" title="${element.title}" onclick="switchSong(this)">
    <td>${element.title}</td>
    <td>${element.artist}</td>
    <td>${element.genre}</td>
    </tr>
    `
        }
    })
};
// Adding an eventlistener to the filter form
filter.addEventListener('submit', selectTracks)
