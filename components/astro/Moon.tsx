import { Forecast } from '@/lib/interface/types'
import { IconMoon, IconMoonset } from '../icons/icons'

export default function Moon({ forecast }: { forecast: Forecast }) {
  return (
    <>
      <div className='flex flex-col px-4 py-2 gap-4 rounded-lg hover:bg-[#27272a] border transition-all duration-500'>
        <h2 className='font-medium text-sm'>Moonrise & Moonset</h2>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <div className='bg-stone-700 rounded-sm py-1 px-2'>
              <IconMoon />
            </div>{' '}
            <span>{forecast.forecastday[0].astro.sunrise}</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='bg-stone-700 rounded-sm py-1 px-2'>
              <IconMoonset />
            </div>{' '}
            <span>{forecast.forecastday[0].astro.sunset}</span>
          </div>
        </div>
      </div>
    </>
  )
}
