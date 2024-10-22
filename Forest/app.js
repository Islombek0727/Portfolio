// document.addEventListener("DOMContentLoaded", function () {
//     const video = document.getElementById("myVideo");
//     const playButton = document.getElementById("playButton");

//     playButton.addEventListener("click", function () {
//         if (video.paused) {
//             video.play();
//             playButton.textContent = "Pause";
//         } else {
//             video.pause();
//             playButton.textContent = "Play";
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const toggleNavButton = document.getElementById("toggleNav");
    const navList = document.getElementById("navList");

    toggleNavButton.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});

