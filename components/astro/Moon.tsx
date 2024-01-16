import { Forecast } from '@/lib/interface/types'
import { IconMoon, IconMoonset } from '../icons/icons'

export default function Moon({ forecast }: { forecast: Forecast }) {
  return (
    <>
      <div className='flex flex-col p-4 gap-4 border rounded-lg hover:bg-[#f4f4f5] dark:hover:bg-[#27272a] dark:bg-[#27272a] transition-all duration-500'>
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
