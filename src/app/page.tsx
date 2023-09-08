import Image from 'next/image'
import Hero from './components/Hero/Hero'
import Newtabs from './components/Newtabs/Newtabs'
import Findtrend from './components/Findtrend/Findtrend'
import Partner from './components/Partner/Partner'


export default function Home() {
  return (
    <main>
      <Hero/>
      <Newtabs/>
      <Findtrend/>
      <Partner/>
    </main>
  )
}
