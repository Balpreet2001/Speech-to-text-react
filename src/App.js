
import './App.css';
import  SpeechRecognition ,{useSpeechRecognition}  from 'react-speech-recognition'
import useClipboard from 'react-use-clipboard'
import {useState} from 'react'
const App = () => {
const [textToBeCopied, setTextToBeCopied] = useState('')
const [isCopied, setCopied] = useClipboard(textToBeCopied)
const startListening = () => SpeechRecognition.startListening({continuous : true,language :'en-IN'})
const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition()
if(!browserSupportsSpeechRecognition){
  return null
}

  return (
    <div>
      <div className="container">
        <h2>Speech to Text converter</h2>
        <br />
        <p>
          React hook that converts speech from the microphone and make it
          available at your react component
        </p>

        <div className="main-content" onClick={() => setTextToBeCopied(transcript)}>
          <p>
            click here before copying
          </p>
          {transcript}
        </div>
        <div className="btn-style">
          <button onClick={setCopied}>{isCopied? "Copied" : "Copy to Clipboard"}</button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        </div>
      </div>
    </div>
  );
}

export default App;
