import { readFile, writeFile } from 'node:fs/promises';
import satori from 'satori';

const fontData = await readFile(new URL('./assets/Inter-Regular.woff', import.meta.url));

const svg = await satori(
  {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e1b4b',
        color: '#f8fafc',
        fontSize: 48,
        fontFamily: 'Inter',
      },
      children: 'Hello, Satori!',
    },
  },
  {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        data: fontData,
        weight: 400,
        style: 'normal',
      },
    ],
  }
);

await writeFile(new URL('./output.svg', import.meta.url), svg);
console.log('Wrote output.svg');
