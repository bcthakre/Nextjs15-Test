// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//      <div>{ children }</div>
//      <UserAnalytics />
//      <RevenueMetrics />
//      <NotificationMetrics />
//     </html>
//   );
// }

export default function Layout({ children, revenue, users, notifications }) {
  return (
    <html lang="en">
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </html>
  );
}
