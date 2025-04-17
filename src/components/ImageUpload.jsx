import React from 'react'

export default function ImageUpload(props) {
    
const showImageHandler = (e) => {
    const file = e.target.files[0]
    if(file){
        props.UploadImageHandler(file)
    }
}
    return (
        <>
            <div className='bg-white shadow-lg rounded-2xl p-6 w -full max-w-2xl'>
                <label htmlFor="file-input" 
                 className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 
                 text-center hover:border-blue-500 transition-all'>
                    <input 
                        type="file" 
                        id='file-input' 
                        className='hidden'
                        onChange={showImageHandler}
                    />
                    <span className='text-lg font-medium text-gray-600'>
                        Click or Drag to upload your Image
                    </span>
                </label>
            </div>
        </>
    )
}
