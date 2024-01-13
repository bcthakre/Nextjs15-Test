import "./styles.css";

export default function Layout({ modal, children}) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
