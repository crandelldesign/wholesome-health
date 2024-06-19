<script setup>
import { ref, computed } from 'vue';
import ColorSwatch from '@/components/ColorSwatch.vue';
import ColorSwatches from '@/components/ColorSwatches.vue';
import ImgButton from '@/components/ImgButton.vue';
import LearnMoreBox from '@/components/LearnMoreBox.vue';
import LogoVertical from '@/components/LogoVertical.vue';
import BaseNavbar from '../components/BaseNavbar.vue';
import BaseMasthead from '../components/BaseMasthead.vue';
import ContactForms from '@/components/ContactForms.vue';

const colorPalette = ref([
  {
    name: 'Wavy Navy',
    hex: '#06659e',
  },
  {
    name: 'Fern',
    hex: '#529040',
  },
  {
    name: 'Black',
    hex: '#000000',
  },
  {
    name: 'Jungle Jewels',
    hex: '#64af4e',
  },
  {
    name: 'Dollar Bill',
    hex: '#7fbe6d',
  },
  {
    name: 'Greenhouse',
    hex: '#37612e',
  },
  {
    name: 'Beyond Blue',
    hex: '#107ac5',
  },
  {
    name: 'Dodger Blue',
    hex: '#16A2F6',
  },
  {
    name: 'Dark Sea Blue',
    hex: '#054c77',
  },
]);

const baseUrl = computed(() => {
  return import.meta.env.BASE_URL;
});
</script>

<template>
  <div class="style-guide">
    <header class="site-guide-header">
      <div class="logo-container">
        <LogoVertical />
      </div>
      <h1>Brand Guidelines</h1>
    </header>
    <div class="colors">
      <h1>Color Palette</h1>

      <ColorSwatches>
        <ColorSwatch
          v-for="(colorSwatch, index) in colorPalette"
          :key="colorSwatch.name"
          :class="'swatch' + (index + 1)"
          :color-swatch="colorSwatch"
        />
      </ColorSwatches>
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
    <div>
      <h1>Buttons</h1>
      <p>
        <button
          type="button"
          class="btn btn-lg btn-primary"
        >
          Primary
        </button>
        <button
          type="button"
          class="btn btn-secondary"
        >
          Secondary
        </button>
        <button
          type="button"
          class="btn btn-sm btn-tertiary"
        >
          Tertiary
        </button>
      </p>
      <p style="background-color: #000;">
        <button
          type="button"
          class="btn btn-lg btn-primary"
        >
          Primary
        </button>
        <button
          type="button"
          class="btn btn-secondary"
        >
          Secondary
        </button>
        <button
          type="button"
          class="btn btn-sm btn-tertiary"
        >
          Tertiary
        </button>
      </p>
    </div>
    <div>
      <h1>Image Buttons</h1>
      <div>
        <ImgButton />
      </div>
    </div>
    <div>
      <h1>Learn More Boxes</h1>
      <div>
        <LearnMoreBox />
      </div>
    </div>
    <div>
      <h1>Forms</h1>
      <ContactForms />
    </div>
    <div class="span-2">
      <h1>Nav</h1>
      <BaseNavbar class="full-screen" />
    </div>
    <div class="span-2">
      <h1>Masthead</h1>
      <BaseMasthead class="full-screen" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-guide-header {
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

  .span-2 {
    grid-column: 1 / span 2;
  }

  .site-guide-header {
    // grid-column: span 1 / 2;
    grid-column-start: span 2;
    grid-column-end: 3;
  }

  .logo-section {
    grid-row-start: span 3;

    // grid-row-end: 3;
    // grid-column: span 2 / 3;
  }

  .full-screen {
    margin-right: -1rem; // 16px
    margin-left: -1rem; // 16px
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
