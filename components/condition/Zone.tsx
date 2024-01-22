import { Location } from '@/lib/interface/types'
import { Ubication } from '../icons/icons'

export default function Zone({ location }: { location: Location }) {
  return (
    <div className='px-2 py-0.5'>
      <h1 className='text-xl font-semibold flex items-center gap-1'>
        <Ubication /> {location.region}
      </h1>
      <p className='text-md text-[#8a8a93]'>{location.country} </p>
    </div>
  )
}
