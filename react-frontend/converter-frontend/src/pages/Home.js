import React, {useState} from 'react'
import {convertApi} from '../utils/ApiEndpoints'
import BasicFetch from '../utils/BasicFetch'
import {CountRenders} from '../utils/CountRenders'

const Home = () => {
    CountRenders('Home: ')
    const [inputSelected, setInputSelected] = useState(false)
    const [mainSelect, setMainSelect] = useState(() => true)
    const [loading, setLoading] = useState(() => false)
    const [error, setError] = useState(() => false)
    const [convertedFileLink, setConvertedFileLink] = useState(() => false)
    const [originalFile, setOriginalFile] = useState(() => false)

    const handleConvertFile = async () => {
        if(!originalFile) return

        setLoading(() => true)
        const payload = new FormData()
        payload.append('file', originalFile)
        const fetchConfig = {
            method:'POST',
            body:payload
        }

        const {response, data} = await BasicFetch(convertApi, fetchConfig, true)
        setLoading(() => false)
        console.log(data)
        if(response.status === 204){
            setConvertedFileLink(data.file)
        }

        setError(data.error)
    }

    const handleTogglePdfToAudio = () => {
        setInputSelected(true)
        setMainSelect(() => false)
        console.log('toggling')
    }


  return (
<div className='converter-main-container'>
        <div className="w-100 justify-content-center">
            <h1 className='text-white'> Convert Pdf files to Mp3 or Mp3/Wav to text</h1>
        </div>

        <div className = 'converter-selection-wrapper'>
            {mainSelect &&
                <div className='converter-main-selection-div' id='converter-main-selection-div-id'>
                    <button className='display-inline btn-primary' onClick={() => handleTogglePdfToAudio()}> Pdf to Mp3 </button>
                    <button className='display-inline btn-primary' onClick={() => handleTogglePdfToAudio()}> Mp3 / Wav to text </button>
                </div>
            }

            {inputSelected &&
            <div className='pdf-to-audio-input'>
                <div className='btn-main display-inline w-50'>
                    <input className='converter-audio-input' 
                    id='audio-input'
                    onChange={(e)=> setOriginalFile(e.target.files[0])}
                    type='file'
                    />
                </div>
                <div className='display-inline w-50'>
                    <button className='btn-primary' id='convert-btn' onClick={() => handleConvertFile()}><span id='convert-span'>Convert</span></button>
                </div>
            </div>
            }
        </div>

    </div>
  )
}

export default Home