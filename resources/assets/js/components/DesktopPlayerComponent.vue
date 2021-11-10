<template>
  <div class="player">
    <div class="player__controls-top">
      <div class="player__left-control">
        <div class="player__button">
          <inline-svg src="public/images/icons/like.svg" />
        </div>
        <div class="player__button">
          <inline-svg src="public/images/icons/playlist.svg" />
        </div>
        <div class="player__button">
          <inline-svg src="public/images/icons/expand.svg" />
        </div>
      </div>
      <div class="player__center-control">
        <div class="repeat">
          <inline-svg src="public/images/icons/repeat.svg" />
        </div>
        <div class="prev">
          <inline-svg src="public/images/icons/prev.svg" />
        </div>
        <div class="play-pause">
          <inline-svg src="public/images/icons/pause.svg" />
        </div>
        <div class="next">
          <inline-svg src="public/images/icons/next.svg" />
        </div>
        <div class="shuffle">
          <inline-svg src="public/images/icons/shuffle.svg" />
        </div>
      </div>
      <div class="player__right-control">
        <div class="min-volume">
          <inline-svg src="public/images/icons/min-volume.svg" />
        </div>
        <progress-bar class="volume_progress" />
        <div class="max-volume">
          <inline-svg src="public/images/icons/max-volume.svg" />
        </div>
      </div>
    </div>
    <div class="player__controls-bottom">
      <div class="duration">
        <span>0:58</span>
      </div>
      <progress-bar class="duration_progress" />
      <div class="total">
        <span>5:18</span>
      </div>
    </div>
  </div>
</template>
<script>
import ProgressBar from "./ProgressBarComponent";

export default {
  components: {
    ProgressBar,
  },
};
</script>
<style lang="scss" scoped>
@import "../../scss/components/player";
</style>
