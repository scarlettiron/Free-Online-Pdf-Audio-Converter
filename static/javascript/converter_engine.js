const btnOptionSelectMainDiv = document.getElementById('converter-main-selection-div-id')
const selectPdfToAudioBtn = document.getElementById('select-pdf-to-audio-id')
const pdfToAudioInputDiv = document.getElementById('pdf-to-audio-input')
const selectAudioToTxtBtn = document.getElementById('select-audio-to-txt-id')
const audioToTxtInputDiv = document.getElementById('audio-to-txt-input')

const togglePdfToAudio = () => {
    btnOptionSelectMainDiv.classList.remove('active')
    pdfToAudioInputDiv.classList.add('active')
}

const toggleAudioToTxt = () => {
    btnOptionSelectMainDiv.classList.add('inactive')

    audioToTxtInputDiv.classList.add('active')
}


