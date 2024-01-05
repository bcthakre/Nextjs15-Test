import { notFound } from "next/navigation"

export default function ProductDetail({ params }) {

    console.log(params)

    if (parseInt(params.productId) > 20) {
        notFound()
    }
    return (
        <div>
            <h1>Product Details {params.productId}</h1>
        </div>
    )
}