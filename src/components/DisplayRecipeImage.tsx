import Image from 'next/image'
import React from 'react'

import { shimmer, toBase64 } from '@/components/imgBackgroundSVG'

function DisplayRecipeImage({ imgUrl }: { imgUrl: string }) {
  return (
    <a>
      <Image
        src={imgUrl}
        width={276}
        height={345}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        alt=""
      />
    </a>
  )
}

export default DisplayRecipeImage
