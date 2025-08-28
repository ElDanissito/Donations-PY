import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Donaciones PY - Desarrollo de Drones para Trabajo de Grado",
  description: "Tu donación contribuye directamente a la compra de insumos para el desarrollo de drones. Apoya mi trabajo de grado y sé parte de este proyecto innovador.",
  keywords: "donaciones, drones, trabajo de grado, desarrollo, innovación, kiire, redeban",
  authors: [{ name: "Donaciones PY" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
