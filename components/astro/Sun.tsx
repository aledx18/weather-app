import { Forecast } from '@/lib/interface/types'
import { IconSunrise, IconSunset } from '../icons/icons'

export default function Sun({ forecast }: { forecast: Forecast }) {
  return (
    <>
      <div className='flex flex-col p-4 gap-4 border rounded-lg hover:bg-[#f4f4f5] dark:hover:bg-[#27272a] dark:bg-[#27272a] transition-all duration-500'>
        <h2 className='font-medium text-sm px-3'>Sunrise & Sunset</h2>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <div className='bg-[#53482b] rounded-sm py-1 px-2'>
              <IconSunrise />
            </div>{' '}
            <span>{forecast.forecastday[0].astro.sunrise}</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='bg-[#53482b] rounded-sm py-1 px-2'>
              <IconSunset />
            </div>{' '}
            <span>{forecast.forecastday[0].astro.sunset}</span>
          </div>
        </div>
      </div>
    </>
  )
}
