import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Immediate fix for Chrome extension ethereum property error
              (function() {
                if (typeof window !== 'undefined') {
                  // Store original ethereum immediately
                  const originalEthereum = window.ethereum;
                  
                  // Create a safe ethereum object
                  let ethereumValue = originalEthereum || {};
                  
                  // Define ethereum property as configurable from the start
                  try {
                    Object.defineProperty(window, 'ethereum', {
                      get: function() {
                        return ethereumValue;
                      },
                      set: function(value) {
                        ethereumValue = value;
                      },
                      configurable: true,
                      writable: true,
                      enumerable: true
                    });
                  } catch (e) {
                    // If that fails, try to delete and recreate
                    try {
                      delete window.ethereum;
                      window.ethereum = ethereumValue;
                    } catch (e2) {
                      // Last resort: just assign directly
                      window.ethereum = ethereumValue;
                    }
                  }
                  
                  // Override Object.defineProperty to make ethereum always configurable
                  const originalDefineProperty = Object.defineProperty;
                  Object.defineProperty = function(obj, prop, descriptor) {
                    if (obj === window && prop === 'ethereum') {
                      return originalDefineProperty.call(this, obj, prop, {
                        ...descriptor,
                        configurable: true,
                        writable: true
                      });
                    }
                    return originalDefineProperty.call(this, obj, prop, descriptor);
                  };
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
