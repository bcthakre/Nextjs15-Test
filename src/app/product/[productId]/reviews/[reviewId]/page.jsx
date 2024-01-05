export default function ProductReview({ params }) {

    console.log(params)
    return (
        <div>
            <h1>Review with {params.reviewId} about Product Name {params.productId}</h1>
        </div>
    )
}