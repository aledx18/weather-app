import { Current, Forecast } from '@/lib/interface/types'
import { ArrowDownIcon, ArrowUpIcon } from '@radix-ui/react-icons'

export default async function CurrentCondition({
  grad,
  current,
  forecast
}: {
  grad: string
  current: Current
  forecast: Forecast
}) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex items-center gap-3 rounded-sm'>
        <img src={current.condition.icon} alt='' className='w-18' />
        <div className='flex flex-col'>
          <div className='flex items-center gap-4'>
            <div className='flex items-center'>
              <h2 className='text-7xl font-semibold'>
                {grad === 'C' ? current.temp_c : current.temp_f}{' '}
              </h2>
              <p className='text-2xl text-[#8a8a93] pb-10'>
                {grad === 'C' ? '°C' : '°F'}
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='flex items-center text-md font-semibold'>
                {' '}
                <ArrowUpIcon className='text-red-600' />
                {grad === 'C'
                  ? `${forecast.forecastday[0].day.maxtemp_c}°C`
                  : `${forecast.forecastday[0].day.maxtemp_f}°F`}
              </p>
              <p className='flex items-center text-md font-semibold'>
                <ArrowDownIcon className='text-blue-600' />
                {grad === 'C'
                  ? `${forecast.forecastday[0].day.mintemp_c}°C`
                  : `${forecast.forecastday[0].day.mintemp_f}°F`}
              </p>
            </div>
          </div>
          <p className='text-lg pl-1 text-[#8a8a93] '>
            {current.condition.text}
          </p>
        </div>
      </div>
    </div>
  )
}

// #888891
// text-[#A9A9A9]
