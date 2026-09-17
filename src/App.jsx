import ImageUploader from "./ImageUploader";
import GarmentAnalyser from "./GarmentAnalyser";
import {useState} from 'react';



function App() {
  const [image, setImage] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [analysed, setAnalyzed] = useState(false);


  function onImageChange(file) {
    setImage(file);
    setAnalyzed(false);
    setConfirm(false);
    setAnalysis(null);
  }

 
      async function handleConfirm() {
        //try catch + 500 error (!ok.response)
        try{
        const formData = new FormData();

        formData.append("image", image);

        const response = await fetch("http://127.0.0.1:8000/analyze",
          {
            method: 'POST',
            body: formData
          }
        );

        const data = await response.json();
        if(!response.ok){
          console.log(data.detail);
          return;
        }
        setAnalysis(data)
        setConfirm(true);

        }catch (error) {
          console.log(error);
        }

      }
      
  function handleAnalyse() {
    setAnalyzed(true);
  }

  function handleDelete() {
    setImage(null);
    setAnalyzed(false);
    setConfirm(false);
    setAnalysis(null);
  }

  return (
    <div className="home">
      <h1 className="logo">TAILORINA</h1>

      <div className="boxes">
        <div>
          <ImageUploader
            image={image}
            onImageChange={onImageChange}
            onConfirm={handleConfirm}
            analysed={analysed}
            onDelete={handleDelete}
          />
          {confirm && !analysed && (<button id="analyseBtn" onClick={handleAnalyse}>Analyse Garment</button>)}
        </div>

        {analysed && (<GarmentAnalyser attrs={analysis} />)}
        {analysed && (<button id="analyseBtn" onClick={handleAnalyse}>Confirm Results</button>)}
      </div>

    </div>
  );
}

export default App


