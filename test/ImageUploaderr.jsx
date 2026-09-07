
function ImageUploader({image , setImage}) {
    return (
        <>
        <input type="file" accept="image/*" onChange={(event)=>setImage(event.target.files[0])} />
        {image && (<button onClick={()=>setImage(null)}>remove</button>)}
        {image ?(
            <>
            <p>selected: {image.name}</p>
            <img src={URL.createObjectURL(image)} alt="" />
            </>
        )
             :(
                <img src="timg\no-image-icon-23485.png" alt="upload photo" />
             )
    }
        
        </>
    );
}
export default ImageUploader;