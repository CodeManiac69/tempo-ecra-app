export const metadata = {
  title: "Tempo de Ecrã Família",
  description: "App familiar para gerir tempo de ecrã",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
