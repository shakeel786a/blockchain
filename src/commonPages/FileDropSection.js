import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

function FileDropSection(props) {
  const {
    accept = 'image/*',
    name,
    formatText = '(* PDF, JPEG, PNG format)',
    selectedFile
  } = props

  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept,
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
      selectedFile({ file: acceptedFiles[0] })
    }
  })

  useEffect(() => () => files.forEach(file => URL.revokeObjectURL(file.preview)), [])

  console.log('Files=============', files)

  return (
      <div {...getRootProps({ className: 'dropzone cursor-pointer' })}>
        <input {...getInputProps()} />

        <button type="submit" class="btn btn-info">{name}</button>
        <input type="text" readonly class="form-control-plaintext" value={formatText} />

      </div>
  )
}

export default FileDropSection