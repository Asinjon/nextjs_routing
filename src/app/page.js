import Link from "next/link";

export default function Home() {
  return (
      <main style={{display: 'flex', gap: '10px'}}>
        <Link href='/ufa'>
          Уфа
        </Link>
        <Link href='/krasnodar'>
          Краснодар
        </Link>
        <Link href='/kazan'>
          Казань
        </Link>
      </main>
  )
}
