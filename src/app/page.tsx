import Weather from '@/components/weather'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* image overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[1] "/>

      {/* background image */}
      <Image src={"https://images.unsplash.com/photo-1563974318767-a4de855d7b43?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        alt="background "
        layout='fill'
        className='object-cover'
      />
      {/* weather data hear */}
      <div className='relative z-10 mt-16 '>
        <Weather />
      </div>
      
    </div>
  )
}
