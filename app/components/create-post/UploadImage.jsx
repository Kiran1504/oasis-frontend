import { useCallback } from "react";
import { useDropzone } from 'react-dropzone';

// Component for the upload image { uses library named react-dropzone }

export default function UploadImage({ uploadedImage, setUploadedImage }) {

  // Basic syntax for the dropzone library
  
  // acceptedFiles[0] makes sure to accept only the latest file selected
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];

    // The reader is used to display the selected image on the DOM
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedImage(reader.result);
    }

    reader.readAsDataURL(file);

  }, [uploadedImage]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <section {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      {uploadedImage ? (
        <img src={uploadedImage.toString()} alt="Uploaded" width="150px" />
      ) : (
        <div className="w-full min-h-[250px] flex flex-col items-center justify-center border-4 border-dashed border-gray-600 rounded-lg"><img src="/image-regular.svg" alt="Tick" width="70px"></img>
          <span className="mt-3 text-white text-xl">Drag & Drop your images here</span>
          <span className="text-gray-500 text-md">or <u className="cursor-pointer text-white">browse</u> from gallery</span>
        </div>
      )}
    </section>
  )
}
