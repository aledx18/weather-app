import { CalendarIcon } from '@radix-ui/react-icons'
import { GetFormatter } from '../hours/GetTIme'
import { Location } from '@/lib/interface/types'

export default function LocalTIme({ location }: { location: Location }) {
  const fechaFormateada = GetFormatter(location.localtime)

  return (
    <div className='flex flex-col justify-between text-[#8a8a93]'>
      <div className='flex items-center py-1 px-2 gap-1 justify-center'>
        <CalendarIcon className='text-white' />
        <h1>{fechaFormateada.fechaFormateada} </h1>
      </div>
      <div />
    </div>
  )
}
