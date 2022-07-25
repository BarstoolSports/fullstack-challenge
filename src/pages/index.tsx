import type { NextPage } from 'next'
import { useState } from 'react'
import Baseball from '../components/baseball'
import Basketball from '../components/basketball'
import Header from '../components/main/header'

const Home: NextPage = () => {
  const [league, setLeague] = useState<'MLB' | 'NBA'>('MLB')

  return (
    <>
      <Header league={league} setLeague={setLeague} />
      <div className='flex flex-col w-11/12 mx-auto'>
        {league === 'MLB' && <Baseball />}
        {league === 'NBA' && <Basketball />}
      </div>
    </>
  )
}

export default Home
