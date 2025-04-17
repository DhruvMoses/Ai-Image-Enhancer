// import React from 'react'
// import Loader from './Loader'

// export default function ImagePreview(props) {
    

//     return (
//         <>
//             <div className='mt-8 grid grid-col-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>

//             {/* Original Image */}
//                 <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
//                     <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2'>
//                         Original Image
//                     </h2>
                
//                     {props.uploaded ? ( 
//                         <img 
//                             src={props.uploaded} 
//                             className='w-full h-full object-cover' 
//                         /> 
//                     )
//                         : 
//                     (
//                         <div className='flex items-center justify-center h-80 bg-gray-200'>
//                             No image selected
//                         </div>
//                     ) 
//                     }
//                 </div>

//             {/* Enhanced Image */}
//                 <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
//                     <h2 className='text-xl font-semibold text-center bg-blue-800 text-white py-2'>
//                         Enhanced Image
//                     </h2>

//                     {props.enhanced && !props.loading && ( 
//                         <img 
//                             src={props.enhanced} 
//                             className='w-full h-full  object-cover'
//                         />
//                     )}

//                     {props.loading ? ( 
//                         <Loader/> 
//                     ) : (
//                         <div className='flex items-center justify-center h-80 bg-gray-200'>
//                             No Enhanced Image
//                         </div>
//                     )}                    
//                 </div>

//             </div>
//         </>
//     )
// }

//------------>

// import React from 'react'
// import Loader from './Loader'

// export default function ImagePreview(props) {
//     return (
//         <>
//             <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>

//                 {/* Original Image */}
//                 <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
//                     <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2'>
//                         Original Image
//                     </h2>

//                     {props.uploaded ? (
//                         <div className='flex items-center justify-center h-[500px] bg-white'>
//                             <img 
//                                 src={props.uploaded} 
//                                 className='max-h-full max-w-full object-contain' 
//                                 alt="Original"
//                             />
//                         </div>
//                     ) : (
//                         <div className='flex items-center justify-center h-[500px] bg-gray-200'>
//                             No image selected
//                         </div>
//                     )}
//                 </div>

//                 {/* Enhanced Image */}
//                 <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
//                     <h2 className='text-xl font-semibold text-center bg-blue-800 text-white py-2'>
//                         Enhanced Image
//                     </h2>

//                     {props.loading ? (
//                         <div className='flex items-center justify-center h-[500px]'>
//                             <Loader />
//                         </div>
//                     ) : props.enhanced ? (
//                         <div className='flex items-center justify-center h-[500px] bg-white'>
//                             <img 
//                                 src={props.enhanced} 
//                                 className='max-h-full max-w-full object-contain' 
//                                 alt="Enhanced"
//                             />
//                         </div>
//                     ) : (
//                         <div className='flex items-center justify-center h-[500px] bg-gray-200'>
//                             No Enhanced Image
//                         </div>
//                     )}
//                 </div>

//             </div>
//         </>
//     )
// }
import React, { useEffect, useState } from 'react'
import Loader from './Loader'

export default function ImagePreview(props) {
    const [imgDimensions, setImgDimensions] = useState({ width: 500, height: 450 });

    // Detect original image size and store
    useEffect(() => {
        if (props.uploaded) {
            const img = new Image();
            img.src = props.uploaded;
            img.onload = () => {
                setImgDimensions({
                    width: img.width > 500 ? 500 : img.width,
                    height: img.height > 400 ? 400 : img.height,
                });
            }
        }
    }, [props.uploaded]);

    return (
        <div className="mt-8 flex flex-col md:flex-row gap-6 items-start justify-center w-full pb-15">

            {/* Original Image */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
                    Original Image
                </h2>

                <div
                    className="flex items-center justify-center bg-gray-100 p-4"
                    style={{
                        width: `${imgDimensions.width}px`,
                        height: `${imgDimensions.height}px`
                    }}
                >
                    {props.uploaded ? (
                        <img
                            src={props.uploaded}
                            className="object-contain w-full h-full"
                            alt="Original"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            No image selected
                        </div>
                    )}
                </div>
            </div>

            {/* Enhanced Image */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
                    Enhanced Image
                </h2>

                <div
                    className="flex items-center justify-center bg-gray-100 p-4"
                    style={{
                        width: `${imgDimensions.width}px`,
                        height: `${imgDimensions.height}px`
                    }}
                >
                    {props.loading ? (
                        <Loader />
                    ) : props.enhanced ? (
                        <img
                            src={props.enhanced}
                            className="object-contain w-full h-full"
                            alt="Enhanced"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            No Enhanced Image
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
