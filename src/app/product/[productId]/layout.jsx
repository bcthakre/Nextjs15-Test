

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

export default function ProductDetailLayout({ children }) {

  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error created by me in the product detail layout");
  }

  console.log("Random number: ", random);
  return (
    <>
      {children} <h1 className="text:green-100"> Feature Product</h1>
    </>
  );
}
