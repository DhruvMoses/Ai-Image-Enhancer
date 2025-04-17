import React from 'react';
import "./DownloadImage.css"

export default function DownloadImage({ enhancedImage }) {

    const downloadHandler = () => {
        const link = document.createElement('a');
        link.href = enhancedImage;
        link.download = 'enhanced-image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button 
            onClick={downloadHandler}
            className='btn'
            disabled={!enhancedImage}
        >
            <i className="fa fa-download mr-2"></i>Download Enhanced Image
        </button>
    );
}
