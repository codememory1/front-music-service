<template>
  <div class="music-item">
    <div class="music-item__left-info">
      <img class="music-item__image" :src="image" :alt="name">
      <div class="music-item__names">
        <span class="music-item__name">{{ name }}</span>
        <span class="music-item__author">{{ author }}</span>
      </div>
    </div>
    <div class="music-item__right-info">
      <span class="music-item__time">03:20</span>
      <div class="music-item__buttons">
        <img class="music-item__button--like" src="public/images/icons/like.svg" alt="like">
        <img class="music-item__button--actions" src="public/images/icons/vertical-ellipses.svg" alt="actions">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.music-item {
  width: 100%;
  height: 55px;
  display: flex;
  padding-right: 19px;
  justify-content: space-between;
  transition: background-color 0.4s;
  cursor: pointer;
}

.music-item:hover {
  background-color: #0C1A2C;
}

.music-item__left-info {
  display: flex;
}

.music-item__image {
  width: 80px;
  height: 55px;
}

.music-item__names {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
}

.music-item__name {
  font-size: 16px;
  color: #fff;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 7px;
}

.music-item__author {
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  color: #696969;
}

.music-item__right-info {
  display: flex;
  justify-content: center;
}

.music-item__time {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #696969;
  margin-right: 38px;
  display: flex;
  align-items: center;
}

.music-item__buttons {
  display: flex;
  align-items: center;
}

.music-item__buttons img {
  cursor: pointer;
}

.music-item__button--actions {
  margin-left: 15px;
}
</style>