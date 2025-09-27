import { HeroSection } from '@/components/hero-section'
import { ProblemsSection } from '@/components/problems-section'
import { FeaturesSection } from '@/components/features-section'
import { BenefitsSection } from '@/components/benefits-section'
import { TechnicalSection } from '@/components/technical-section'
import { OpenSourceSection } from '@/components/open-source-section'
import { SocialSection } from '@/components/social-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <HeroSection />
      <ProblemsSection />
      <FeaturesSection />
      <BenefitsSection />
      <TechnicalSection />
      <OpenSourceSection />
      <SocialSection />
      <Footer />
    </main>
  )
}
