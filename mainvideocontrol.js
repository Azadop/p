const video = document.querySelector("#video")

document.querySelector(".fa-pause").style.display = "none"

video.addEventListener("timeupdate", () => {
 var s = parseInt(video.currentTime % 60);
    var m = parseInt((video.currentTime / 60) % 60);
  
   var vs = parseInt(video.duration % 60);
    var vm = parseInt((video.duration / 60) % 60);
 document.getElementById("CT").innerHTML = m + ':' + s;
  
document.getElementById("VT").innerHTML = vm + ':' + vs;
  
    let curr = (video.currentTime / video.duration) * 100
    if(video.ended)
  {
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"

    }
    document.querySelector('.inner').style.width = `${curr}%`
})

const play = (e) => {
    if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }
}

const fullScreen = (e) => {
    e.preventDefault()
    video.requestFullscreen()
}

const download = (e) => {
    e.preventDefault()
    let a = document.createElement('a')
    a.href = video.src 
    a.target = "_blank"
    a.download = ""
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

const rewind = (e) => {
    video.currentTime = video.currentTime - ((video.duration/1000) * 5)
}

const forward = (e) => {
    video.currentTime = video.currentTime + ((video.duration/1000) * 5)
}
