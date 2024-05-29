<script setup>
import { onMounted } from 'vue';


onMounted(() => {
  console.log('add logic to copy the aria label into a new element');
  console.log(document.getElementsByClassName('inner-service-box-bg'));
  const boxes = document.getElementsByClassName('inner-service-box-bg');
  Array.from(boxes).forEach((box) => {
    console.log(box.querySelector('.service-button').querySelector('a').ariaLabel);
    const btnLink = box.querySelector('.service-button').querySelector('a');
    const description = btnLink.ariaLabel;
    if (description) {
      box.querySelector('.service-title').insertAdjacentHTML('afterEnd', `<div class="service-description">${description}</div>`);
    }
    btnLink.classList.add('btn', 'btn-primary');

  });
});
</script>

<template>
  <div class="service-box-bg m-all t-1of2 d-1of4">
    <div class="inner-service-box-bg">
      <div class="service-title">
        <h2 class="service-box-1-title">Individualized Customized Consulting</h2>
      </div><!--service-title-->
      <div class="service-content">
        <p>
          <a href="https://www.yourwholesomehealthcoach.com/our-services/?customize_changeset_uuid=b3bb6d6b-def3-4116-ba54-1c08a782b719&amp;customize_autosaved=on&amp;customize_messenger_channel=preview-38"><img src="https://www.yourwholesomehealthcoach.com/wp-content/uploads/2023/04/consultation2.jpg"></a>
        </p>
      </div><!--service-content-->
      <div class="service-button">
        <a href="https://www.yourwholesomehealthcoach.com/our-services/?customize_changeset_uuid=b3bb6d6b-def3-4116-ba54-1c08a782b719&amp;customize_autosaved=on&amp;customize_messenger_channel=preview-38" aria-label="Quick description of the service or product">Learn More</a>
      </div><!--service-button-->
    </div><!--inner-service-box-bg-->
  </div>
</template>

<style lang="scss" scoped>

.inner-service-box-bg {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 1rem; // 16px

  .service-title h2 {
    font-size: 1.625rem; // 26px
    line-height: 1;
  }

  .service-content {
    grid-row-start: 1;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 2;

    p {
      height: 100%;
      margin: 0;
    }

    a {
      display: flex;
      align-items: center;
      height: 100%;
    }

    img {
      max-width: 100%;
    }
  }

  :deep(.service-description) {
    display: -webkit-box;
    margin-bottom: 0.5rem; // 8px
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

</style>
