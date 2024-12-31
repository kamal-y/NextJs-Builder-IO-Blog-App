import React from 'react'
import Image from 'next/image'

interface ThumbnailProps{
    image:string | "";
}

const Thumbnail:React.FC<ThumbnailProps> = ({image}) => {
    return (
        <div className="h-48 md:h-96 pb-16 px-6 rounded-xl w-full overflow-hidden ">
            <img className="object-cover overflow-hidden rounded-xl" src={image} alt="image" />
        </div>
    )
}

export default Thumbnail