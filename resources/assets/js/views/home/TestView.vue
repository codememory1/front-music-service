<template>
	<progress-indicator-component
		:labels="['1', '2']"
		:activeIndex="1"
	/>
</template>
<script>
import Player from "../../components/PlayerComponent"
import ProgressIndicatorComponent from "../../components/ProgressIndicatorComponent";

export default {
  components: {
	ProgressIndicatorComponent,
	Player
  },
  data: () => ({
	value: [0, 100]
  })
}
</script>