import { notFound } from "next/navigation"


export default function ProductReview({ params }) {

    console.log(params)

    if ((parseInt(params.productId) >20 || parseInt(params.reviewId) > 100)) {
        notFound()
    }
    return (
        <div>
            <h1>Review with {params.reviewId} about Product Name {params.productId}</h1>
        </div>
    )
}

