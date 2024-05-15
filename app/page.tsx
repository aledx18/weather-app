import { ClientForm } from '@/components/SearchCity/ClientForm'
import { ModeToggle } from '@/components/theme/ModeToggle'
import ChangeTabs from '@/components/Tabs/ChangeTabs'
import CurrentCondition from '@/components/condition/CurrentCondition'
import Footer from '@/components/Footer'
import Forecastday from '@/components/hours/Forecastday'
import getClima from '@/components/SearchCity/getClima'
import LocalTIme from '@/components/condition/LocalTIme'
import MapL from '@/components/maps/MapL'
import Moon from '@/components/astro/Moon'
import NextDays from '@/components/hours/NextDays'
import Sun from '@/components/astro/Sun'
import Wind from '@/components/current/Wind'
import Zone from '@/components/condition/Zone'
import { headers } from 'next/headers'

export default async function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const latitud = headers().get('x-latitude')
  const longitud = headers().get('x-longitude')
  console.log('latitudxd', latitud, 'longitudxd', longitud)

  const grad = typeof searchParams.grad === 'string' ? searchParams.grad : 'C'
  const locat = typeof searchParams.locat === 'string' ? searchParams.locat : ''
  const lat = typeof searchParams.lat === 'string' ? searchParams.lat : ''
  const long = typeof searchParams.long === 'string' ? searchParams.long : ''

  const res = await getClima(lat, long)

  const current = res?.current
  const forecast = res?.forecast
  const location = res?.location

  return (
    <main>
      <section className='grid p-4 gap-4 grid-cols-1 md:grid-cols-2 lg:max-w-screen-2xl lg:m-auto lg:h-screen lg:gap-4 group lg:grid-cols-8 lg:grid-rows-8 [&>*]:min-h-[4rem] [&>*]:rounded-xl [&>*]:transition [&>*]:duration-300 [&>*]:dark:bg-[#131315]'>
        <div className='shadow-sm font-medium flex flex-col lg:gap-0 gap-2 lg:py-0 py-2 lg:flex-row justify-between items-center px-2 lg:col-span-8 lg:row-span-1 border dark:border-none'>
          <div className='px-2 items-center flex gap-2'>
            <ModeToggle />
          </div>
          <ClientForm grad={grad} />
          <ChangeTabs locat={locat} lat={lat} long={long} />
        </div>
        <div className='flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between shadow-md lg:col-span-5 lg:row-span-2'>
          <Zone location={location} />
          <CurrentCondition grad={grad} current={current} forecast={forecast} />
          <LocalTIme location={location} />
        </div>
        <div className='flex font-medium gap-4 lg:col-span-3 lg:row-span-2'>
          <MapL locat={locat} />
        </div>
        <div className='flex flex-col px-4 lg:py-0 py-2 lg:gap-0 gap-2 shadow-md justify-evenly lg:col-span-2 lg:row-span-3'>
          <Wind current={current} />
        </div>
        <div className='flex p-2 flex-col justify-around lg:col-span-4 lg:row-span-3 shadow-md'>
          <h1 className='text-lg font-medium'>Weather Prediction</h1>
          <NextDays forecast={forecast} grad={grad} />
        </div>
        <div className='flex flex-col gap-1 py-2 shadow-md justify-between px-4 lg:col-span-2 lg:row-span-3'>
          <Moon forecast={forecast} />
          <Sun forecast={forecast} />
          <Footer />
        </div>
        <div className='flex lg:flex-row flex-wrap lg:gap-0 gap-4 justify-center lg:justify-between shadow-md p-4 lg:col-span-8 lg:row-span-2'>
          <h3 className='lg:block hidden text-lg font-medium'>Today</h3>
          <Forecastday forecast={forecast} grad={grad} />
        </div>
      </section>
    </main>
  )
}
