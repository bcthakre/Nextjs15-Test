
'use client'

import { useRouter } from 'next/navigation'

export default function OrderProduct() {

    const router = useRouter()

    const handleClick = () => {
        console.log("Order Product")
        // router.push('/')
        // router.back()
        // router.forward()
        router.replace('/product')

    
    }
    return (
        <div>
            <h2>Order Product</h2>
            <button onClick={handleClick}>Place Order </button>
        </div>
    )
}