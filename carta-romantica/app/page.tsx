import { FloatingHearts } from '@/components/love/floating-hearts'
import { Hero } from '@/components/love/hero'
import { Acrostic } from '@/components/love/acrostic'
import { Timeline } from '@/components/love/timeline'
import { Reasons } from '@/components/love/reasons'
import { Coupons } from '@/components/love/coupons'
import { OpenWhen } from '@/components/love/open-when'
import { MainLetter } from '@/components/love/main-letter'
import { Dreams } from '@/components/love/dreams'
import { Closing } from '@/components/love/closing'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      <FloatingHearts />
      <Hero />
      <Acrostic />
      <Timeline />
      <Reasons />
      <Coupons />
      <OpenWhen />
      <MainLetter />
      <Dreams />
      <Closing />
    </main>
  )
}
