# IsaiahsMusic
## About This Project
Isaiah's Music is a simple static website that consists of 3 pages.(Home/index.html, About.html and Music.html)
The main functionality of this website comes from the Music page where you can select from a list of my songs to listen to. My goal was to make this website responsive so it looks nice on screens down to 300px wide. For the most part, the html on the home and about page isnt too crazy, but the music page is where things get interesting code wise. The music.html file itself looks pretty empty, but that's because it is mainly populated by the generator.js file
## What About Generator.js
This file contains a tracks array and manipulates tha data in that array to populate the table that exists on the music page. This file also gives a unique functionality to the genre filter form to prevent it from reloading the page and make sure the table only shows songs of the selected genre. There are many loops and functions in this file.
## Audio Context
There is a file that the audio-player tag needs to be styled and given some functionality called musicplayer.js. This file uses an API Called Audio Context to assign the properties of an html audio tag to a custom made audio tag element. this is because it is not easy to style an audio tag itself. This API allowed me to add a mini visualizer to my music player. Unfortunately, on github pages the icons have trouble loading for my custom audio-player tag but they have no problem showing up offline.
## My Forms/Regex Validation
This website has 2 forms in total. There's a genre filter form on the music page and a message form on the about page. The message form allows the user to send an email with the subject: question to my alternate email address. This has regex validation for the name and email fields to ensure that the proper characters are being submitted by the user. The message form is connected to my email via a simple backend endpoint called Formsubmit.
## Types of Content
This site makes use of images in the form of icons, jpegs, pngs, and the audio in this site is in the form of mp3. The Music page is referencing the music folder and playing the mp3 files from there.