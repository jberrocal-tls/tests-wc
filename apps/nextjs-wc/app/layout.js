import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web Components Demo - Lit & Stencil",
  description: "Demonstrating Lit.js and Stencil web components in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="importmap" dangerouslySetInnerHTML={{__html: JSON.stringify({
          imports: {
            "lit": "/components/lit/index.js",
            "lit/": "/components/lit/",
            "@lit/reactive-element": "/components/@lit/reactive-element/reactive-element.js",
            "@lit/reactive-element/": "/components/@lit/reactive-element/",
            "lit-html": "/components/lit-html/lit-html.js",
            "lit-html/": "/components/lit-html/",
            "lit-element": "/components/lit-element/lit-element.js",
            "lit-element/": "/components/lit-element/"
          }
        })}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
