import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';

const Locations = () => {
  const router = useRouter();

  return (
    <div style={{display: 'flex', gap: '10px'}}>
        <Link href={`/${router.query.location}/mototsikly_i_mototehnika`}>
            Мотоциклы и мототехника
        </Link>
        <Link href={`/${router.query.location}/animals`}>
            Животные
        </Link>
    </div>
  )
}

export default Locations