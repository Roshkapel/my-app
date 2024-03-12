import React, {useState, useCallback, useEffect} from "react";
import axios from "axios";

export const UploadData = () => {

  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc:0});
  const [msg, setMsg] = useState(null)

  function handleUpload(){
    if(!file){
      setMsg('no file selected');
      return;
    }

    const fd = new FormData();
    fd.append('file', file);
  
    setMsg("Uploading...");
    setProgress(prevState => {
      return {...prevState, started: true}
    })
    axios.post('http://httpbin.org/post', fd, {
      onUploadProgress: (progressEvent) => { setProgress(prevState => {
        return {...prevState, pc: progressEvent.progress * 100}
      }) },
      headers: {
        "Custom-Header": "value",
      }
    })
    .then(res => {
      setMsg('Uploaded successfully')
      console.log(res.data);
    })
    .catch(err => {
      setMsg("Upload failed")
      console.log(err);
    });
  }

  return (

   <div className="myUpload">
     <button onClick={handleUpload}>Upload</button>
     { progress.started && <progress max="100" value={progress.pc}></progress>}
     { msg && <span>{msg}</span>}

   </div>
  )
}


