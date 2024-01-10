import { notFound } from "next/navigation";

function getRandomInt(count) {
  // Probability condition: 1 out of 4 times, return 1
  if (Math.random() < 0.25) {
    // 25% chance
    return 1;
  } else {
    // For the remaining 75%, return a random integer in the range [0, count)
    // Adjusting the range to exclude 1, as it's already covered in the 25% chance
    let randomInt = Math.floor(Math.random() * (count - 1));
    return randomInt >= 1 ? randomInt + 1 : randomInt;
  }
}

export default function ProductReview({ params }) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error created by me");
  }

  console.log("Random number: ", random);   

  if (parseInt(params.productId) > 20 || parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review with {params.reviewId} about Product Name {params.productId}
      </h1>
    </div>
  );
}
