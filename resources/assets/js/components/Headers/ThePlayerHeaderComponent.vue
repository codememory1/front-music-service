<template>
  <div class="player__header">
    <div class="player__header_search">
      <div class="search">
        <inline-svg src="public/images/icons/search.svg" />
        <input type="text" placeholder="Search" class="search__input" />
      </div>
    </div>
    <div class="player__header_profile">
      <div class="bell">
        <span tabindex="0" class="bell__button">
          <inline-svg src="public/images/icons/bell.svg" />
        </span>
      </div>
      <div class="profile">
        <img src="public/images/user.png" alt="profile" />
        <inline-svg src="public/images/icons/arrow-bottom.svg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.player__header {
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;

  &_profile {
    display: flex;
    align-items: center;
  }

  &_search {
    display: flex;
    align-items: center;
  }
}

.search {
  position: relative;
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    position: relative;

    ::v-deep path {
      fill: #fff;
      transition: fill 0.3s ease-in-out;
    }
  }

  &__input {
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 14px;
    font-weight: 500;

    ::placeholder {
      color: darken(#fff, 10%);
    }
  }
}

.bell {
  margin-right: 20px;
  cursor: pointer;

  &__button {
    width: 24px;
    height: 24px;
    position: relative;
    display: flex;

    svg {
      width: inherit;
      height: inherit;

      ::v-deep path {
        transition: fill 0.2s ease-in-out;
      }

      &:hover {
        ::v-deep path {
          fill: darken(#fff, 40%);
        }
      }
    }

    &:before {
      content: "";
      position: absolute;
      width: 8.5px;
      height: 8.5px;
      background-color: $accent;
      border: 1px solid #fff;
      top: 3.5px;
      right: 0;
      border-radius: 100%;
    }
  }
}

.profile {
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 10px;
    object-fit: cover;
    border: 2px solid $accent;
  }
}
</style>
