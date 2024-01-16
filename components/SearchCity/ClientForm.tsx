'use client'

import { Country, State } from 'country-state-city'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CaretSortIcon,
  CheckIcon,
  MagnifyingGlassIcon,
  ReloadIcon
} from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { IconFlag, IconState } from '@/components/icons/icons'

const FormSchema = z.object({
  city: z.object({
    name: z.string(),
    lat: z.string(),
    long: z.string()
  }),
  state: z.object({
    name: z.string(),
    latitud: z.string(),
    longitud: z.string()
  })
})

export function ClientForm({ grad }: { grad: string }) {
  const [open, setOpen] = useState(false)
  const [opens, setOpens] = useState(false)
  const [loading, setLoading] = useState(false)

  const [countr, setCountr] = useState('US')

  const router = useRouter()

  const country = Country.getAllCountries()
  const states = State.getStatesOfCountry(countr)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true)
      if (data) {
        router.push(
          `/?locat=${data.state.name}&lat=${data.state.latitud.slice(
            0,
            8
          )}&long=${data.state.longitud.slice(0, 8)}&grad=${grad}`
        )
      }
    } catch (error: any) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-4'>
        <FormField
          control={form.control}
          name='city'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={cn(
                        'w-[200px] justify-between',
                        !field.value && 'text-muted-foreground'
                      )}>
                      {field.value
                        ? country.find((coun) => coun.name === field.value.name)
                            ?.name
                        : 'Select Country'}
                      <IconFlag />
                      <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0'>
                  <Command>
                    <CommandInput
                      placeholder='Search country...'
                      className='h-9'
                    />
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup className='max-h-[360px] min-h-10'>
                      {country.map((item) => (
                        <CommandItem
                          value={item.name}
                          key={item.isoCode}
                          onSelect={() => {
                            form.setValue('city', {
                              lat: item.latitude,
                              long: item.longitude,
                              name: item.name
                            })
                            setOpen(false)
                            setCountr(item.isoCode)
                          }}>
                          {item.name}
                          <CheckIcon
                            className={cn(
                              'ml-auto h-4 w-4',
                              item.name === field.value?.name
                                ? 'opacity-100'
                                : 'opacity-0'
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='state'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <Popover open={opens} onOpenChange={setOpens}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={cn(
                        'w-[200px] justify-between',
                        !field.value && 'text-muted-foreground'
                      )}>
                      {field.value
                        ? states.find((sta) => sta.name === field.value.name)
                            ?.name
                        : 'Select State'}
                      <IconState />
                      <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 ' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0'>
                  <Command>
                    <CommandInput
                      placeholder='Search state...'
                      className='h-9'
                    />
                    <CommandEmpty>No state found.</CommandEmpty>
                    <CommandGroup className='max-h-[480px] min-h-10'>
                      {states.map((sta) => (
                        <CommandItem
                          value={sta.name}
                          key={sta.isoCode}
                          onSelect={() => {
                            form.setValue('state', {
                              latitud: sta.latitude || '',
                              longitud: sta.longitude || '',
                              name: sta.name
                            })
                            setOpens(false)
                          }}>
                          {sta.name}
                          <CheckIcon
                            className={cn(
                              'ml-auto h-4 w-4',
                              sta.name === field.value?.name
                                ? 'opacity-100'
                                : 'opacity-0'
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} type='submit' variant='outline'>
          {loading ? (
            <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            <MagnifyingGlassIcon className='mr-2 h-4 w-4 opacity-85' />
          )}
          Search
        </Button>
      </form>
    </Form>
  )
}
