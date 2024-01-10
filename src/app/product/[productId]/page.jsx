import { notFound } from "next/navigation";

// export const generateMetadata = ({ params }) => ({
//   title: `Product Detail - ${params.productId}`,
// });

export default function ProductDetail({ params }) {
 

  if (params.productId > 120) {
    return notFound();
  }
  return (
    <div>
      <h1> Product Detail about {params.productId}</h1>
    </div>
  );
}
