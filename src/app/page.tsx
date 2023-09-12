import Image from 'next/image'
import Hero from './components/Hero/Hero'
import Newtabs from './components/Newtabs/Newtabs'
import Findtrend from './components/Findtrend/Findtrend'
import Partner from './components/Partner/Partner'
import Platform from './components/Platform/Platform'
import Subscription from './components/Subscription/Subscription'
import Joinemail from './components/Joinemail/Joinemail'


export default function Home() {
  return (
    <main>
      <Hero/>
      <Newtabs/>
      <Findtrend/>
      <Partner/>
      <Platform/>
      <Subscription/>
      <Joinemail/>
    </main>
  )
}
