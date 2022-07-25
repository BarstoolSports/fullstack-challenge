import type { FC } from 'react'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

interface HeaderProps {
  league: 'MLB' | 'NBA'
  setLeague: Dispatch<SetStateAction<'MLB' | 'NBA'>>
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <header className='flex items-center mb-12'>
      <div className='relative h-24 mr-10 w-44'>
        <Image src='https://i.imgur.com/Zo6KQb0.png' layout='fill' alt='logo' />
      </div>
      <button
        onClick={() => props.setLeague('MLB')}
        className={`mx-3 px-5 py-2 rounded-lg text-lg text-white ${
          props.league === 'MLB' ? 'bg-[#c42030]/100' : 'bg-[#c42030]/50'
        } `}
      >
        Baseball
      </button>
      <button
        onClick={() => props.setLeague('NBA')}
        className={`mx-3 px-5 py-2 rounded-lg text-lg text-white ${
          props.league === 'NBA' ? 'bg-[#c42030]/100' : 'bg-[#c42030]/50'
        } `}
      >
        Basketball
      </button>
    </header>
  )
}

export default Header
