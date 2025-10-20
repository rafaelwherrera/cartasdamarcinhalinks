import { MysticProfile } from "@/components/mystic-profile"
import { TarotCard } from "@/components/tarot-card"
import { MoonPhase } from "@/components/moon-phase"
import { MysticLinks } from "@/components/mystic-links"
import { ConstellationField } from "@/components/constellation-field"
import { SocialLinks } from "@/components/socialLinks"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-mystic-deep to-background">
      <ConstellationField />

      <div className="relative z-10 mx-auto max-w-2xl px-4 py-12">
        <MysticProfile />

        <div className="mt-8 space-y-6">
          <MysticLinks />
          <TarotCard />
          <MoonPhase />
        </div>

        <div className="mt-10">
          <SocialLinks />
        </div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p className="animate-twinkle">✨ As estrelas guiam seu caminho ✨</p>
        </footer>
      </div>
    </main>
  )
}
