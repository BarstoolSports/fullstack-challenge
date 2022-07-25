import type { FC } from 'react'

interface GameHeaderProps {
  team1: string
  team2: string
  points: string
  status: string
  league: string
}

const GameHeader: FC<GameHeaderProps> = (props) => {
  return (
    <>
      <h1 className='mb-4 text-3xl font-bold tracking-wide text-center'>
        {props.league}
      </h1>
      <div className='flex text-white'>
        <div className='w-screen text-center bg-blue-700 rounded-tl-md'>
          <h2 className='text-xl font-bold uppercase sm:text-2xl'>
            {props.team1}
          </h2>
          <p>{props.points}</p>
        </div>
        <div className='w-[10%] bg-gray-200 text-black flex justify-center items-center'>
          <p className='uppercase'>{props.status}</p>
        </div>
        <div className='w-screen text-center bg-red-700 rounded-tr-md'>
          <h2 className='text-xl font-bold uppercase sm:text-2xl'>
            {props.team2}
          </h2>
          <p>{props.points}</p>
        </div>
      </div>
    </>
  )
}

export default GameHeader
