<script setup>
import { onMounted } from 'vue';


onMounted(() => {
  console.log('add logic to copy the link')
});
</script>

<template>
  <div class="service-box-bg m-all t-1of2 d-1of4">
    <div class="inner-service-box-bg">
      <div class="service-title">
        <h2 class="service-box-1-title">Individualized Customized Consulting</h2>
      </div><!--service-title-->
      <div class="service-content">
        <p><a href="https://www.yourwholesomehealthcoach.com/our-services/"><img src="https://www.yourwholesomehealthcoach.com/wp-content/uploads/2023/04/vitality.jpg" decoding="async" class=" lazyloaded" data-eio-rwidth="600" data-eio-rheight="450"></a></p>
      </div><!--service-content-->
      <div class="service-button">
        <a href="https://www.yourwholesomehealthcoach.com/our-services/" aria-label="">Learn More</a>
      </div><!--service-button-->
    </div><!--inner-service-box-bg-->
  </div>
</template>

<style lang="scss" scoped>

.service-box-bg {
  .service-button {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0;

    > a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .inner-service-box-bg {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 200px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    background: #fff;
  }

  .service-title {
    position: relative;
    z-index: 3;
    width: 100%;
    padding: 1rem; // 16px
    color: $white;
  }

  .service-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      overflow: hidden;
      content: '';
      background-color: rgba($color: $black, $alpha: 50%);
      border-radius: $border-radius-alt;
    }

    > p {
      width: 100%;
      height: 100%;
      margin: 0;

      > a {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: $border-radius-alt;

        > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border: 0;
          @include transition(all 0.3s ease-in-out);
        }
      }
    }
  }

  &:hover .service-content > p > a > img {
    transform: scale(1.05);
  }

}

</style>
