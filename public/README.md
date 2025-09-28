# Favicon Files

Place your favicon files in the `/public` directory with these exact names:

## Required Files:
- `favicon.ico` - The main favicon (16x16, 32x32, 48x48 pixels)
- `favicon-16x16.png` - 16x16 PNG version
- `favicon-32x32.png` - 32x32 PNG version
- `apple-touch-icon.png` - 180x180 for iOS devices
- `android-chrome-192x192.png` - 192x192 for Android
- `android-chrome-512x512.png` - 512x512 for Android

## Optional Files:
- `site.webmanifest` - Web app manifest file
- `browserconfig.xml` - For Windows tiles

## File Structure:
```
/public
  ├── favicon.ico
  ├── favicon-16x16.png
  ├── favicon-32x32.png
  ├── apple-touch-icon.png
  ├── android-chrome-192x192.png
  ├── android-chrome-512x512.png
  ├── site.webmanifest (optional)
  └── browserconfig.xml (optional)
```

## How to Generate Favicons:
1. Create a high-resolution logo (512x512 or larger)
2. Use online tools like:
   - https://realfavicongenerator.net/
   - https://favicon.io/
   - https://www.favicon-generator.org/
3. Download the generated files
4. Place them in the `/public` directory

The favicon is already referenced in `pages/_document.tsx` with:
```html
<link rel="icon" href="/favicon.ico" />
```
