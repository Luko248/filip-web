# Photos / images

The site is designed to look complete using CSS-generated artwork, so no
third-party photos are bundled (to avoid copyright issues).

## Adding real photos of Filip / ddbfilio

1. Drop image files in this folder, e.g. `gallery-1.jpg`, `hero.jpg`.
2. Reference them from a component. For the gallery tiles
   (`src/components/Gallery.astro`), add a background image to a tile's inline
   `style`:

   ```astro
   style="background-image:url('/images/gallery-1.jpg');background-size:cover;background-position:center"
   ```

3. For a hero portrait, add an `<img src="/images/hero.jpg" />` inside
   `src/components/Hero.astro`.

Good sources for official photos: the artist's Spotify artist page, Instagram
(@ddbfilio), and the Dreamdivenboy YouTube channel. Use only images you have
the right to use.
