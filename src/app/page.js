import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/rpm/rpm_deg_white.svg"
        alt="RPM Code Logo"
        width={800}
        height={24}
        priority
      />
    </main>
  )
}
