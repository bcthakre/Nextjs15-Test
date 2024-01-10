import { notFound } from "next/navigation"

function getRandomInt(count) {
    return Math.floor(Math.random() * count)
}


export default function ProductReview({ params }) {

    console.log(params)

    const random = getRandomInt(2)

    console.log(random)

    if (random === 1){
        throw new Error('Error created by me')
    }

    if ((parseInt(params.productId) >20 || parseInt(params.reviewId) > 100)) {
        notFound()
    }
    return (
        <div>
            <h1>Review with {params.reviewId} about Product Name {params.productId}</h1>
        </div>
    )
}

