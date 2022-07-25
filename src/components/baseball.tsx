import type { NextPage } from 'next'
import { trpc } from '../utils/trpc'
import GameHeader from './gameHeader'

interface gameData {
  league: string
  away_period_scores: number[]
  home_period_scores: number[]
  away_team: {
    abbreviation: string
    full_name: string
  }
  home_team: {
    abbreviation: string
    full_name: string
  }
  away_batter_totals: {
    runs: string
  }
  home_batter_totals: {
    runs: string
  }
}

const Baseball: NextPage = () => {
  const getGame = trpc.useQuery(['game.get', { league: 'MLB' }])

  if (getGame.isLoading) return null
  return (
    <>
      <GameHeader
        team1={(getGame.data as gameData).home_team.full_name}
        team2={(getGame.data as gameData).away_team.full_name}
        points={`${getGame.data.home_batter_totals.runs}-${getGame.data.away_batter_totals.runs}`}
        status='9th'
        league={(getGame.data as gameData).league}
      />

      <table className='w-full table-fixed bg-[#fafafa] text-center'>
        <thead className='border-b'>
          <tr>
            <th className='bg-[#efefef] border-r'></th>
            {(getGame.data as gameData).home_period_scores.map((_, i) => (
              <th key={i}>{i + 1}</th>
            ))}
            <th className='border-l bg-[#efefef]'>R</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='bg-[#efefef] border-r'>
              {(getGame.data as gameData).home_team.abbreviation}
            </td>
            {(getGame.data as gameData).home_period_scores.map((v, i) => (
              <td key={i}>{v}</td>
            ))}
            <td className='bg-[#efefef] border-l'>
              {(getGame.data as gameData).home_batter_totals.runs}
            </td>
          </tr>

          <tr>
            <td className='bg-[#efefef] border-r rounded-bl-lg'>
              {(getGame.data as gameData).away_team.abbreviation}
            </td>
            {(getGame.data as gameData).away_period_scores.map((v, i) => (
              <td key={i}>{v}</td>
            ))}
            <td className='bg-[#efefef] border-l rounded-br-lg'>
              {(getGame.data as gameData).away_batter_totals.runs}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Baseball
