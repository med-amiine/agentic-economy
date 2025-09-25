import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Fix for Chrome extension ethereum property error - Run early
              (function() {
                if (typeof window !== 'undefined') {
                  try {
                    // Pre-emptively define ethereum property before extensions can
                    if (!window.ethereum) {
                      Object.defineProperty(window, 'ethereum', {
                        value: {},
                        writable: true,
                        configurable: true,
                        enumerable: true
                      });
                    }
                  } catch (e) {
                    // Ignore errors
                  }
                }
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
        <meta name="theme-color" content="#2C5BFF" />
        <meta name="color-scheme" content="light" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
