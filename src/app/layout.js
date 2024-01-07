export const metadata = {
  title: "this is not description",
  description: "Layout file from the upper most level",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <p
            style={{
              backgroundColor: "indigo",
              color: "white",
            }}
          >
            Header
          </p>
        </header>
        {children}
        <footer>
          <p
            style={{
              backgroundColor: "lavender",
              color: "black",
            }}
          >
            Footer
          </p>
        </footer>
      </body>
    </html>
  );
}
