import React from "react";
import cn from "classnames";
import styled from "./Dashboard.module.scss";
import Popup from "../../../../components/UI-Kit/Popup";
import IconButton from "../../../../components/UI-Kit/IconButton";
import { MdDeleteOutline } from "react-icons/md"
import { useUpdateUserMutation, useUploadFileMutation } from "../../../../store/api";
import Button from "../../../../components/UI-Kit/Button";
import useAppSelector from "../../../../hooks/useAppSelector";
import { selectCurrentUser, updateCredentials } from "../../../../store/slice/auth.slice";
import useAppDispatch from "../../../../hooks/useAppDispatch";

const EditPicture: React.FC = () => {
  const [show, setShow] = React.useState(false)
  const [picture, setPicture] = React.useState<File | null>(null)
  const user = useAppSelector(selectCurrentUser)
  const dispatch = useAppDispatch()

  const [uploadFile] = useUploadFileMutation()
  const [updateUser] = useUpdateUserMutation()

  const handleUploadPicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedPicture = event.target.files ? event.target.files[0] : null
    setPicture(uploadedPicture)
  }

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('file', picture)

    const resp = await uploadFile(formData).unwrap()
    const { data } = await updateUser({ ...{avatar: resp.id}, id: user?.id })
    dispatch(updateCredentials(data))
  }

  console.log('Show popup', show)

  return (
    <>
      <button
        className={cn("base-button", styled.button)}
        onClick={() => setShow(true)}
      >
        Edit
      </button>

      <Popup
        show={show}
        onClose={() => setShow(false)}
        className={styled.editPicture}
      >
        <form action="#" onSubmit={handleSubmit}>
          <div className={styled.inputFile}>
            <label htmlFor="picture" className={cn("form-field", styled.label)}>
              <span className={styled.inputFileRow}>
                <p>Choose File</p>
                {picture ? <p>{picture?.name}</p> : <p>No file chosen</p>}
              </span>

              <IconButton
                onClick={() => setPicture(null)}
                className={styled.iconDelete}
                type="button"
              >
                <MdDeleteOutline />
              </IconButton>
            </label>
            <input
              onChange={handleUploadPicture}
              type="file"
              name=""
              id="picture"
              className={styled.input}
              accept="image/*"
            />
          </div>
          <Button type="submit" className={styled.buttonSubmit}>
            save changes
          </Button>
        </form>
      </Popup>
    </>
  );
};

export default EditPicture;
