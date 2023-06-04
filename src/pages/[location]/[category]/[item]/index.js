import { useRouter } from 'next/router'
import React from 'react'

const Item = () => {
    const router = useRouter();

    return (
        <h1>Item {router.query.item} в {router.query.location} / {router.query.category}</h1>
    )
}

export default Item