import { Current } from '@/lib/interface/types'
import { IconHum, IconPrec, IconTemp, IconWInd } from '../icons/icons'

export default function Wind({ current }: { current: Current }) {
  return (
    <>
      <div className='flex items-center gap-5 border px-4 py-2 rounded-lg hover:bg-[#f4f4f5] dark:hover:bg-[#27272a] transition-all duration-500'>
        <div className='rounded-sm p-2 bg-[#e4c135] dark:bg-[#a855f725] '>
          <IconWInd strok='#53482b' />
        </div>
        <div className='flex flex-col'>
          <p className='text-[#A9A9A9]'>Wind</p>
          <span>
            {current.wind_kph} <span className='font-medium'>Km/h</span>
          </span>
        </div>
      </div>

      <div className='flex items-center gap-5 border px-4 py-2 rounded-lg hover:bg-[#f4f4f5] dark:hover:bg-[#27272a] transition-all duration-500'>
        <div className='rounded-sm p-2 bg-[#4686ff] dark:bg-[#4686ff25]'>
          <IconPrec />
        </div>
        <div className='flex flex-col'>
          <p className='text-[#A9A9A9]'>Humidity</p>
          <span>
            {current.humidity} <span className='font-medium'>%</span>
          </span>
        </div>
      </div>

      <div className='flex items-center gap-5 border px-4 py-2 rounded-lg dark:hover:bg-[#27272a] hover:bg-[#f4f4f5] transition-all duration-500'>
        <div className='rounded-sm p-2 bg-[#8cc563] dark:bg-[#22c55e25]'>
          <IconTemp />
        </div>
        <div className='flex flex-col'>
          <p className='text-[#A9A9A9]'>Pressure</p>
          <span>
            {current.pressure_mb} <span className='font-medium'>mb</span>
          </span>
        </div>
      </div>

      <div className='flex items-center gap-5 border px-4 py-2 rounded-lg hover:bg-[#f4f4f5] dark:hover:bg-[#27272a] transition-all duration-500'>
        <div className='rounded-sm p-2 bg-[#db737a] dark:bg-[#db737a25]'>
          <IconHum />
        </div>
        <div className='flex flex-col'>
          <p className='text-[#A9A9A9]'>Precipitation</p>
          <span>
            {current.precip_mm} <span className='font-medium'>mm</span>
          </span>
        </div>
      </div>
    </>
  )
}

// #2e3a53
// icon #4686ff
// red #693d3e
