import { useCallback, useState } from "react";
import { useDropzone } from 'react-dropzone';

export default function BannerPic({ BannerImage, setBannerImage }) {

const [displayBanner,setDisplayBanner]=useState();
  
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setBannerImage(file);
    // The reader is used to display the selected image on the DOM
    const reader = new FileReader();

    reader.onload = () => {
       setDisplayBanner(reader.result);
    }

    reader.readAsDataURL(file);

  }, [BannerImage]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <section {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {displayBanner ? (
          <img src={displayBanner.toString()} className="h-[300px] w-full" />
        ) : (
          <div className="cursor-pointer">
            <img src="/default_banner.jpeg" className="h-[300px] w-full" />
          </div>
        )}
      </section>
    </>
  )
}
 