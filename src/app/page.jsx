
import Link from 'next/link';

export default function Home() {
    return (
        <>
        <h1>Home Page</h1>
        <Link href='/blog'>Blog</Link><br/>
        <Link href='/product'>Product</Link><br/>
        <Link href='/order-product'>Order Product</Link>
        </>
    )
}