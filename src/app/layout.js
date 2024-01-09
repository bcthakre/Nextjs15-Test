export const metadata = {
  title: {
    default: 'Default title',
    template: (title) => `${title} | My Site`,
    absolute: 'My Site'
  },
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
