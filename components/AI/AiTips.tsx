'use client'
import { Current } from '@/lib/interface/types'
import { getPepe } from './getPepe'
import { useCompletion } from 'ai/react'

export default function AiTips({ current }: { current: Current }) {
  const { completion, input, error } = useCompletion()

  const res = getPepe({
    text: current.condition.text,
    condition: current.feelslike_c.toString()
  }).then((res) => console.log(res))

  return (
    <div className='flex flex-col w-full max-w-md py-24 mx-auto stretch'>
      <h4 className='text-lg font-bold text-gray-900 md:text-xl pb-2'>
        useCompletion Example
      </h4>
      {error && (
        <div className='fixed top-0 left-0 w-full p-4 text-center bg-red-500 text-white'>
          {error.message}
        </div>
      )}
      {error?.message}

      {completion}
    </div>
  )
}
