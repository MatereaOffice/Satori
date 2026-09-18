# Satori

This project installs and demonstrates [Satori](https://github.com/vercel/satori), Vercel's library for converting HTML/CSS-like JSX layouts into SVG (commonly used to generate Open Graph images).

## Installation

Satori is installed as a dependency via npm:

```bash
npm install
```

## Usage

Run the included example to generate an SVG:

```bash
npm start
```

This renders a simple layout (`example.mjs`) using the bundled `assets/Inter-Regular.woff` font and writes the result to `output.svg`.

Satori requires a font to render any text, and only supports the TTF, OTF, and WOFF formats (not WOFF2). To use your own layout, edit `example.mjs`, following the [Satori documentation](https://github.com/vercel/satori#usage) for the supported JSX/CSS subset.
