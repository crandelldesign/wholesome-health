<script setup>
import { computed } from 'vue';
const props = defineProps({
  colorSwatch: {
    type: Object,
    default() {
      return {}
    },
  },
});

const style = computed(() => {
  const style = `
    color: ${getContrast(props.colorSwatch.hex)};
    background-color: ${props.colorSwatch.hex};
  `;
  return style;
});

function getContrast(hexcolor) {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1)
  }

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split('')
      .map(function (hex) {
        return hex + hex
      })
      .join('')
  }

  // Convert to RGB value
  const r = parseInt(hexcolor.substr(0, 2), 16)
  const g = parseInt(hexcolor.substr(2, 2), 16)
  const b = parseInt(hexcolor.substr(4, 2), 16)

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000

  // Check contrast
  return yiq >= 128 ? 'black' : 'white'
}
</script>
<template>
  <div
    class="color-swatch"
    :style="style"
  >
    {{ colorSwatch.name }}<br>
    {{ colorSwatch.hex }}
  </div>
</template>
<style lang="scss" scoped>
.color-swatch {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  min-height: 100px;
  aspect-ratio: 1/1;
  padding: 15px;
  font-size: 1rem;
  color: #fff;
  text-align: center;
  background-color: #eee;

  // margin-bottom: 15px;
  // border: 5px solid #fff;
  border-radius: 50%;

  // @include box-shadow(3);
}
</style>
