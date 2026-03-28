import { logos } from '@/db/data'
import Image from 'next/image'

export default function LogoScroller() {
  const track = [...logos, ...logos]

  return (
    <div className='w-full overflow-hidden bg-black p-5 border border-r-6 border-r-primary border-l-6 border-l-primary'>
      <div className='marquee marquee-reverse flex w-max'>
        {track.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt=''
            width={120}     
            height={60}  
            className='h-6 w-auto shrink-0 mr-16 last:mr-0'
          />
        ))}
      </div>
    </div>
  )
}
