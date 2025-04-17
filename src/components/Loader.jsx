import React from 'react'

export default function Loader(props) {
    
    return (
        <>
            <div className='flex justify-center items-center h-full'>
                <div className='animate-spin border-4 border-t-transparent w-15 h-15
                scale-150 rounded-full border-blue-700'></div>
            </div>
        </>
    )
}
