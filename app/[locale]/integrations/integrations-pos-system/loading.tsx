import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='h-screen w-screen relative z-[2000] flex items-center justify-center bg-white text-white'>
      <Image alt='Logo - BrandPos' src="/Logo.svg" width={145} height={44} />
    </div>
  )
}

export default loading