import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Category = () => {
  const router = useRouter();
  const location = router.query.location;
  const category = router.query.category;

  return (
    <div>
      <h1>{category} в {location}</h1>
    </div>
  )
}

export default Category