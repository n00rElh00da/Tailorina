import ImageUploader from "./ImageUploader";
import GarmentAnalyser from "./GarmentAnalyser";
import { useState } from 'react';


function App() {
  const [image, setImage] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [analysed, setAnalyzed] = useState(false);
  

  function onImageChange (file) {
    setImage(file);
    setAnalyzed(false);
    setConfirm(false);
  }

  function handleConfirm() {
    setConfirm(true);
  };

  function handleAnalyse() {
    setAnalyzed(true);
  }

  function handleDelete() {
    setImage(null) ;
    setAnalyzed(false);
    setConfirm(false);
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

        {analysed && (<GarmentAnalyser />)}
        {analysed && (<button id="analyseBtn" onClick={handleAnalyse}>Confirm Results</button>)}
      </div>

    </div>
  );
}

export default App


