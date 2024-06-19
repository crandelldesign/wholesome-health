<template>
  <header class="article-header">
    <h1 class="page-title">RN Functional Medicine Nutritionist and Bioenergy wellness consultant in Michigan</h1>
    <div class="featured-img">
      <img loading="lazy" src="https://www.yourwholesomehealthcoach.com/wp-content/uploads/2023/05/IMG_6785-2.jpg" alt="About Us"  class=" ls-is-cached lazyloaded">
    </div>
  </header>
</template>

<style lang="scss" scoped>
header.article-header {
  position: relative;
  margin-bottom: 1.5rem; // 24px
  overflow: hidden;
  background: $green;
  @media (min-width: $grid-md) {
    display: flex;
    align-items: stretch;
    min-height: 300px;
    margin-bottom: 2rem; // 32px
  }
  @media (min-width: $grid-xl) {
    min-height: 350px;
    margin-bottom: 2.5rem; // 40px
  }

  .featured-img {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 250px;
    @media (min-width: $grid-md) {
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
    }
    @media (min-width:$grid-lg) {
      width: 40%;
    }

     img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
     }
  }

  .page-title {
    position: relative;
    z-index: 2;

    // height: 200px;
    padding: 1rem;
    margin-bottom: 50px;
    color: $white;
    @media (min-width: $grid-md) {
      display: flex;
      align-items: center;
      width: 50%;
      margin-bottom: 0;
    }

    @media (min-width:$grid-lg) {
      width: 60%;
      padding: 2rem; // 32px
    }

    &::after {
      display: block;
      padding-bottom: 250px;
      margin-right: -1rem; // 16px
      margin-left: -1rem; // 16px
      content: '';
      background: linear-gradient(180deg, $green 25%, rgb(255 255 255 / 0%) 75%);
      @media (min-width: $grid-md) {
        position: absolute;
        top: 0;
        right: -74px;
        bottom: 0;
        z-index: 2;
        width: 75px;
        padding: 0;
        margin: 0;
        background: linear-gradient(90deg, $green 25%, rgb(255 255 255 / 0%) 75%);
      }
      @media (min-width:$grid-lg) {
        // width: 100px;
        right: -99px;
        width: 100px;
      }
    }
  }
}
</style>
