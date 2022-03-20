import Image from 'next/image'
import React from 'react'

import { shimmer, toBase64 } from '@/components/imgBackgroundSVG'

function DisplayRecipeImage({ imgUrl }: { imgUrl: string }) {
  return (
    <a>
      <Image
        src={imgUrl}
        layout="responsive"
        width="92px"
        height="115px"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        alt=""
      />
    </a>
  )
}

export default DisplayRecipeImage
