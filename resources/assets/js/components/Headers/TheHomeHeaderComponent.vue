<template>
  <header class="header">
    <auth-modal ref="authModal" />
    <div class="container">
      <div class="header__navbar">
        <div class="header__logo">
          <img src="public/images/logo.png" alt="logo" />
        </div>
        <div class="navbar__right">
          <div class="header__navigation">
            <ul class="navigation__items">
              <li class="navigation__item">
                <a href="#">Premium</a>
              </li>
              <li class="navigation__item">
                <a href="#">Help</a>
              </li>
              <li class="navigation__item">
                <a href="#">Download</a>
              </li>
              <li class="navigation__item">
                <a href="#">Sign up</a>
              </li>
              <li
                class="navigation__item"
                @click.prevent="$refs.authModal.open()"
              >
                <a href="#">Log in</a>
              </li>
            </ul>
          </div>
          <div class="header__select--lang">
            <base-custom-select
              :class="'header__lang'"
              :placeholder="'Выберите язык'"
              :options="[
                {
                  label: 'English',
                  value: 'en',
                },
                {
                  label: 'Russian',
                  value: 'ru',
                },
              ]"
            />
          </div>
        </div>
      </div>
      <div class="header__content">
        <div class="header__content--left">
          <h1>Listening is everything in your life</h1>
          <p>
            Millions of songs and podcasts. No credit card. of songs and
            podcasts. No credit card.
          </p>
          <a href="#" class="header__content--button">Create account</a>
        </div>
        <div class="header__content--right">
          <img src="public/images/mockup.png" alt="mockup" />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import BaseCustomSelect from "../../components/Select/BaseSelectComponent";
import AuthModal from "../../components/Modal/AuthModalComponent";

export default {
  name: "TheHomeHeader",
  components: {
    BaseCustomSelect,
    AuthModal,
  },
};
</script>
