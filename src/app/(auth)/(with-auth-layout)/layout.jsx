export default function ProductDetailLayout({ children }) {
  return (
    <>
      {children}{" "}
      <h1 style={{ backgroundColor: "red", color: "whitesmoke" }}>
        {" "}
        Group Routes specific to auth-with-layout
      </h1>
    </>
  );
}
