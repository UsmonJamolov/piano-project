const pianoKeys = document.querySelectorAll(".piano-keys .key"),
      volumeSlider = document.querySelector(".volume-slider input"),
      keysCheckBox = document.querySelector(".keys-checkbox input")

let allKeys = [],
    audio = new Audio("../tunes/a.wav") // by default, audio src is "a" tune 

const playTune = (key) => {
    audio.src = `../tunes/${key}.wav` // passing audio src based on key passed
    audio.play(); // playing audio

    const clickkedKey = document.querySelector(`[data-key="${key}"]`) // getting clickked key element
    clickkedKey.classList.add("active") // adding active class to the clickked key element
    setTimeout(() => { // removing active class after 150ms from the clickked key element
        clickkedKey.classList.remove("active")
    }, 4)
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key) // adding data-key value to the allKeys array
    // calling playTune function with passing data-key values as an argument
    key.addEventListener("click", () => playTune(key.dataset.key))
})

const handleVolume = (e) => {
    audio.volume = e.target.value // passing the range slider values as an audio volume
} 

const showHideKeys = () => {
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => {key.classList.toggle("hide")})
}

const pressedKey = (e) => {
    // if the pressed keys is in the allKeys array, only call the playTune function
    if (allKeys.includes(e.key)) playTune(e.key)
}

keysCheckBox.addEventListener("input", showHideKeys)
volumeSlider.addEventListener("input", handleVolume)
document.addEventListener("keydown", pressedKey)
