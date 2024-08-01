<template>
  <footer class="footer" role="contentinfo">
    <div id="inner-footer" class="wrap cf">
      <div id="footer-columns">
        <div class="contact-info footer-1 d-1of3 t-1of3 m-all">
          <a name="contact"></a>
          <div class="footer-col-title" style="color:  !important;">Contact Us</div>
          <div class="business-info-item business-name">	</div>
          <div class="business-info-item phone-number"><span class="contacts">Phone: </span><a href="tel:844-846-4674">844-846-4674</a></div>
          <div class="business-info-item email"><span class="contacts">Email: </span><a href="mailto:cindywholesomehealth@gmail.com">cindywholesomehealth@gmail.com</a></div>
          <div class="business-info-item address">
            <span class="contacts">Address: </span>		<br>Clarkston, MI
          </div>
        </div><!--contact-info-->
        <div class="footer-2 d-1of3 t-1of3 m-all">
          <div class="footer-col-title" style="color:  !important;"></div>
          <a href="https://www.yourwholesomehealthcoach.com"><img itemprop="logo" src="@/assets/logos/logo-and-wordmark-vertical-white.svg?external" alt="Wholesome Health Logo" class=" ls-is-cached lazyloaded"></a>
        </div><!--footer-2-->
        <div class="contact-info footer-3 d-1of3 t-1of3 m-all">
          <div class="footer-col-title" style="color:  !important;">Business Hours</div>
          <div class="hours">
            <!--<div style="margin-bottom: 0px;">Hours:</div>-->
            <div class="cf">
              <div class="open-close">
                <span class="weekday monday">Monday:</span>
                Closed
              </div>
            </div>
            <div class="cf">
              <div class="open-close">
                <span class="weekday">Tuesday:</span>
                11:00 am
              </div> -
              <div class="open-close">5:00 pm</div>
            </div>
            <div class="cf">
              <div class="open-close">
                <span class="weekday">Wednesday:</span>
                12:00 pm</div> -
                <div class="open-close">8:00 pm</div>
              </div>
              <div class="cf">
                <div class="open-close">
                  <span class="weekday">Thursday:</span>
                  11:00 am
                </div> -
              <div class="open-close">5:00 pm</div>
            </div>
            <div class="cf">
              <div class="open-close">
                <span class="weekday">Friday:</span>
                Closed
              </div>
            </div>
            <div class="cf">
              <div class="open-close">
                <span class="weekday weekend">Saturday:</span>
                Closed
              </div>
            </div>
            <div class="cf">
              <div class="open-close">
                <span class="weekday weekend">Sunday:</span>
                Closed
              </div>
            </div>
          </div><!--hours-->
          <!--
          <div class="footer-social">
            <a href="https://www.facebook.com/profile.php?id=100087834792525" target="_new"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.google.com/maps?cid=10391047241639210482" target="_new"><i class="fab fa-google" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/cindycrandell/" target="_new"><i class="fab fa-instagram"></i></a>
            <a href="https://www.pinterest.com/cindywholesomehealth/" target="_new"><i class="fab fa-pinterest-square"></i></a>
          </div> --><!--footer-social-->
        </div><!--footer-3-->
      </div><!--footer-columns-->
    </div><!--inner-footer-->
    <div class="bottom-bar source-org copyright">
      © 2024 Wholesome Health |
      <div class="Bottom Bar Navigation">
        <a href="https://www.yourwholesomehealthcoach.com/sitemap/">Sitemap</a> | <a href="https://www.yourwholesomehealthcoach.com/privacy-policy/">Privacy Policy</a>
      </div>
      &nbsp;|&nbsp;<div title="Social Media Links" class="bottom-bar-social">
        <a href="https://www.facebook.com/profile.php?id=100087834792525" target="_new" title="Visit Wholesome Health Facebook Page (Opens in new tab)"><span class="fab fa-facebook-square"></span></a>
        <a href="https://www.google.com/maps?cid=10391047241639210482" target="_new" title="Visit Wholesome Health Google Page (Opens in new tab)"><span class="fab fa-google" aria-hidden="true"></span></a>
        <a href="https://www.instagram.com/cindycrandell/" target="_new" title="Visit Wholesome Health Instagram Page (Opens in new tab)"><span class="fab fa-instagram"></span></a>
        <a href="https://www.pinterest.com/cindywholesomehealth/" target="_new" title="Visit Wholesome Health Pinterest Page (Opens in new tab)"><span class="fab fa-pinterest-square"></span></a>
      </div><!--bottom-bar-social-->
    </div>
  </footer>
</template>


<style lang="scss" scoped>

footer.footer {
  text-align: center;

  #inner-footer {
    padding: 2rem 1rem; // 32px 16px
    font-size: 0.875rem; // 14px
    color: $white;
    background-color: $green;
    @media (min-width: $grid-lg) {
      padding-right: 2rem; // 32px
      padding-left: 2rem; // 32px
    }
  }

  #footer-columns {
    width: 100%;
    @media (min-width: $grid-md) {
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1rem; // 16px
    }

    .footer-col-title {
      margin-bottom: 1rem; // 16px
      font-size: 1.125rem; // 18px
      font-weight: bold;
    }
  }

  .contact-info {
    a {
      color: $white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .business-info-item {
      margin-bottom: 0.375rem; // 6px
    }
  }

  .footer-1 {
    margin-bottom: 1.625rem; // 26px
    @media (min-width: $grid-md) {
      margin-bottom: 0;
    }
  }

  .footer-2 {
    margin-bottom: 1.625rem; // 26px
    @media (min-width: $grid-md) {
      margin-bottom: 0;
    }

    /* stylelint-disable-next-line no-descending-specificity */
    .footer-col-title {
      display: none;
    }
    /* stylelint-disable-next-line no-descending-specificity */
    a {
      display: block;
      max-width: 70%;
      margin-right: auto;
      margin-left: auto;
      @media (min-width: $grid-md) {
        max-width: 160px;
      }
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .hours {
    > div {
      display: flex;
      justify-content: center;
      width: 100%;

      .open-close:first-child {
        margin-right: 0.4em;
      }

      .open-close:last-child {
        margin-left: 0.4em;
      }
    }
  }

  .bottom-bar {
    padding: 1rem; // 16px
    text-align: center;

    /* stylelint-disable-next-line no-descending-specificity */
    a {
      color: $body-color;
    }

    > div {
      display: inline-block;
    }

    .bottom-bar-social a {
      margin-right: 0.4em;
    }
  }

  #footer-column .footer-col-title {
    @media (min-width: $grid-md) {
      margin-bottom: 0;
    }
  }
}



</style>
