<template>
  <div class="style-guide">
    <header class="header">
      <div class="logo-container">
        <LogoVertical />
      </div>
      <h1>Brand Guidelines</h1>
    </header>
    <div class="logo-section">
      <h1>Logos</h1>
      <h2>Logo and Wordmark Vertical</h2>
      <div class="logo-container">
        <img src="@/assets/logos/logo-and-wordmark-vertical.svg?external" alt="Logo" />
      </div>
      <h2>Logo and Wordmark Horizontal</h2>
      <div class="logo-container">
        <img src="@/assets/logos/logo-and-wordmark-horizontal.svg?external" alt="Logo" />
      </div>
      <h2>Logo Only</h2>
      <div class="logo-container">
        <img src="@/assets/logos/logo-only.svg?external" alt="Logo" />
      </div>
      <h2>Logo and Wordmark Vertical - Black and White</h2>
      <div class="logo-container">
        <img src="@/assets/logos/logo-and-wordmark-vertical-black.svg?external" alt="Logo" />
      </div>
      <h2>Do's and Do Not's</h2>
      <ul>
        <li>
          DO only use the following colors:
          <ul>
            <li>Blue and green</li>
            <li>Black</li>
            <li>Shades of gray</li>
            <li>White</li>
          </ul>
        </li>
        <li>DO NOT use other colors in logo</li>
        <li>DO only use the versions of the logo seen above</li>
        <li>DO NOT skew or stretch the logo</li>
      </ul>
      <h2>Download</h2>
      <p><a :href="`${baseUrl}files/logos.zip`" class="btn btn-primary">Download All Logos</a></p>
    </div>
    <div class="colors">
      <h1>Color Palette</h1>

      <div class="color-swatches">
        <div class="color-swatch swatch1">
          Blue<br />
          #06659e
        </div>
        <div class="color-swatch swatch2">
          Green<br />
          #529040
        </div>
        <div class="color-swatch swatch3">
          Black<br />
          #000
        </div>
      </div>
    </div>
    <div class="typography">
      <h1>Typography</h1>
      <h1>Heading 1</h1>
      <p class="details">Font: Quicksand</p>

      <hr />

      <h2>Heading 2</h2>
      <p class="details">Font: Quicksand</p>

      <hr />

      <h3>Heading 3</h3>
      <p class="details">Font: Quicksand</p>

      <hr />

      <p>Body Text</p>
      <p>
        Lorem ipsum dolor sit amet, quis quam, fusce duis. Montes vestibulum esse, tristique dui lorem. Wisi cubilia.
        Nonummy justo, eros aliquet elit, nulla sollicitudin ut. Iaculis sit lacus, nisi orci nunc, pede convallis
        vestibulum.
      </p>
      <p>
        Sed tellus. Posuere est quis, lacus sit nec. Ultricies vehicula arcu, nunc nonummy id. Vivamus odio neque,
        faucibus duis. Non diam amet, elit nec semper.
      </p>
      <p class="details">Font: Source Sans Pro</p>

      <p><a :href="`${baseUrl}files/fonts.zip`" class="btn btn-primary">Download All Fonts</a></p>
    </div>
  </div>
</template>

<script>
import LogoVertical from '@/components/LogoVertical.vue';
export default {
  components: {
    LogoVertical,
  },
  computed: {
    baseUrl() {
      return import.meta.env.BASE_URL;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #000;

  h1 {
    font-weight: 700;
  }

  .logo-container {
    max-width: 300px;
    height: auto;
    margin-right: auto;
    margin-left: auto;
  }
}

.style-guide {
  grid-gap: 30px;
  padding: 1rem;
  @media (min-width: $grid-md) {
    display: grid;

    // grid-template-rows: repeat(, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }

  header.header {
    // grid-column: span 1 / 2;
    grid-column-start: span 2;
    grid-column-end: 3;
  }

  .logo-section {
    grid-row-start: span 3;

    // grid-row-end: 3;
    // grid-column: span 2 / 3;
  }
}

.logo-section {
  .logo-container {
    max-width: 500px;
    max-height: 500px;
    margin-bottom: 2rem;

    svg,
    img {
      max-width: 500px;
      max-height: 500px;
      object-fit: contain;
    }
  }
}
</style>
