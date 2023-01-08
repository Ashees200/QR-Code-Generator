import logo from './logo.svg';
import './App.css';
import QRCode from 'qrcode';
import { useState } from 'react';

function App() {
  const [url,setUrl]=useState('');
  const[qrcode,setQrcode]=useState('');

  const GenerateQRCode=()=>{
    QRCode.toDataURL(url,{
      width:400,
      margin:2,
      color:{
        dark:'#000000ff',
        light:'#ffffffff'
      }
    },(err,url)=>{
      if (err) return console.error(err)

      console.log(url)
      setQrcode(url)
    })
  }
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input 
            type="text"
            placeholder="e.g. https://www.google.com/"
            value={url}
            onChange={(evt)=>setUrl(evt.target.value)}></input>
            <button onClick={GenerateQRCode}>Generator</button>
            {qrcode && <>
              <img src={qrcode}></img>
              <a href={qrcode} download="qrcode.png">Download</a>
            </>
            }
    </div>
  );
}

export default App;
