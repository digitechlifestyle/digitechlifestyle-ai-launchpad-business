export const metadata = {
  title: "AI Launchpad",
  description: "AI business audit platform"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}