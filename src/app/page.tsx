import Image from 'next/image'
import Hero from './components/Hero/Hero'
import Newtabs from './components/Newtabs/Newtabs'


export default function Home() {
  return (
    <main>
      <Hero/>
      <Newtabs/>
    </main>
  )
}
