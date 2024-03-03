import React from "react"
import cn from "classnames"
import styled from "./styled.module.scss"
import {  useUploadFileMutation } from "../../store/api"
import Popup from "../UI-Kit/Popup";

const EditPicture: React.FC = () => {
  const [picture, setPicture] = React.useState<File | null>(null)
  const [show, setShow] = React.useState(true)
  const [file, setFile] = React.useState({})

  const [uploadFile, { isLoading, isSuccess }] = useUploadFileMutation()

  const handleSubmit = async () => {
    if(!picture) return

    const formData = new FormData();
    formData.append("file", picture);

    const resp = await uploadFile(formData).unwrap();
    setFile({ ...resp })
    console.log('resp', resp)
  };

  const handleUploadPicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedPicture = event.target.files ? event.target.files[0] : null
    setPicture(uploadedPicture)
  }

  console.log('picture', picture)

  React.useEffect(() => {
    handleSubmit()
  }, [picture])

  return (
    <>
      <div className={styled.inputFile}>
        {isLoading
          ? <p>Loading...</p>
          : <React.Fragment>
              <label htmlFor="picture" className={cn(styled.label)}>

                <span className={styled.inputFileRow}>
                  <p>Upload a picture</p>
                </span>

              </label>
              <input
                onChange={handleUploadPicture}
                type="file"
                name=""
                id="picture"
                className={styled.input}
                accept="image/*"
              />
            </React.Fragment>}
      </div>

      {isSuccess && <Popup show={show} onClose={() => setShow(false)}>
          <div className={styled.popup}>
            <img src={file?.url} width='162' height='162' alt="" />
          </div>
        </Popup>}
    </>
  );
};

export default EditPicture;
