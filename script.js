let voice = new SpeechSynthesisUtterance();//This object represents a speech request in the form of text that can be passed to the speech synthesis service.

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voice.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change",() =>{
    voice.voice = voices[voiceSelect.value];
});
document.querySelector("button").addEventListener("click",() => {
    voice.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(voice);
})
