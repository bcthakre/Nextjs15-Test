export default function Layout({
  children,
  revenue,
  users,
  notifications,
  login,
}) {
  // Logic should be placed outside of the return statement
  const isLoggedIn = false;

  return isLoggedIn ? (
    // Typically, you should use a <div> or <React.Fragment> instead of <html>
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
