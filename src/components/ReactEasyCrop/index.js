import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Modal } from "reactstrap";
import { getCroppedImg } from "./utils";
import { ExternalContainer, Input, CropperContainer, Image } from "./styles";

export const ReactEasyCrop = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [zoom, setZoom] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState([]);
  const [testImage, setTesteImage] = useState([]);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const onDrop = (event) => {
    if (event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
      // setImage(URL.createObjectURL(event.target.files[0]));
    }
    setZoom(1);
    setIsOpen(true);
  };

  const onCrop = async () => {
    const canvas = await getCroppedImg(image, croppedArea);
    canvas.toBlob((blob) => {
      setTesteImage(URL.createObjectURL(blob));
    });
  };

  return (
    <>
      <input accept="image/*" onChange={onDrop} type="file" />
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ExternalContainer>
          <h1>Editar imagem</h1>
          <CropperContainer>
            <Cropper
              className="Cropper"
              classes={Cropper}
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              cropShape="round"
              showGrid={false}
            ></Cropper>
          </CropperContainer>
          <Input
            type="range"
            min="1"
            value={zoom}
            max="3"
            step="0.05"
            onInput={(e) => {
              setZoom(e.target.value);
            }}
          />
          <div>
            <button
              onClick={() => {
                toggleModal();
              }}
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                onCrop();
              }}
            >
              Crop
            </button>
          </div>
        </ExternalContainer>
      </Modal>
      {testImage ? <Image src={testImage}></Image> : null}
    </>
  );
};
