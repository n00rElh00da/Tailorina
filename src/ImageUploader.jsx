
function ImageUploader({ image, onImageChange, onConfirm, analysed, onDelete}) {

    return (
        <div className="box1">

            <div className="imgBox">

                {
                    image
                        ? (
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Selected garment"
                            />
                        )
                        : (
                            <img
                                src="timg/no-image.png"
                                alt="No garment selected"
                            />
                        )
                }

            </div>

            <div>
                {/* Input for the first image */}
                <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={(event) => onImageChange(event.target.files[0])}
                    style={{ display: "none" }}
                />


                {/* Input for changing the image */}
                <input
                    id="other-photo"
                    type="file"
                    accept="image/*"
                    onChange={(event) => onImageChange(event.target.files[0])}
                    style={{ display: "none" }}
                />


                {/* Upload button */}
                {!image && (
                    <label htmlFor="photo-upload" id="btnUp">
                        Upload image
                    </label>
                )}


                {/* Other image button */}
                {image &&(
                    <label htmlFor="other-photo" id="btnOther">
                        Other image
                    </label>
                )}


                {/* Confirm button */}
                {image && !analysed &&(
                    <button onClick={onConfirm} id="btnConf">
                        Confirm
                    </button>
                )}

                {/*delete button*/ }
                {analysed &&(
                    <button onClick={onDelete} id="btnConf">
                        Delete
                    </button>
                )
                }
            </div>

        </div>
    );
}

export default ImageUploader;