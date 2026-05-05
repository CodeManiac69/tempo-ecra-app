export const metadata = {
  title: "Tempo de Ecrã Família",
  description: "App familiar para gerir tempo de ecrã"
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
