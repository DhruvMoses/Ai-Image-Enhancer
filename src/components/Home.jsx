 import React from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { useState } from 'react'
import { enhancedImageAPI } from '../utilities/enhancedImageAPI'
import DownloadImage from './DownloadImage'; 
 
 export default function Home(props) {
    
    const[uploadImage, setUploadImage] = useState(null)
    const[enhancedImage, setEnhancedImage] = useState(null)
    const [loader, setloader] = useState(false)

    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file))   //creates a link for  the image
        setloader(true)
        try {
            const enhancedURL = await enhancedImageAPI(file)
            setEnhancedImage(enhancedURL.image)
            setloader(false)
        } catch (error) {
            console.log(error);
            alert("An Error occurred. Please try again later")
        }
    }

    return (
        <>
        <ImageUpload UploadImageHandler={UploadImageHandler}/>
        <ImagePreview
            loading = {loader}
            uploaded = {uploadImage}
            enhanced = {enhancedImage}
        />
        {enhancedImage && !loader && <DownloadImage enhancedImage={enhancedImage} />}
        </>
    )
 }
 