import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

export default function ChangeTabs({
  locat,
  lat,
  long
}: {
  locat: string
  lat: string
  long: string
}) {
  return (
    <Tabs defaultValue='account' className=''>
      <TabsList>
        <Link
          href={{
            query: {
              ...(locat ? { locat } : {}),
              ...(lat ? { lat } : {}),
              ...(long ? { long } : {}),
              grad: 'C'
            }
          }}>
          <TabsTrigger value='account'>C °</TabsTrigger>
        </Link>
        <Link
          href={{
            query: {
              ...(locat ? { locat } : {}),
              ...(lat ? { lat } : {}),
              ...(long ? { long } : {}),
              grad: 'F'
            }
          }}>
          <TabsTrigger value='password'>F °</TabsTrigger>
        </Link>
      </TabsList>
    </Tabs>
  )
}
