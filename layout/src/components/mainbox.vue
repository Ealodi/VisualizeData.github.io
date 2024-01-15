<template>
  <div class="mainbox">
    <div class="column" style="flex: 2;">1</div>
    <div class="column" style="flex: 3;">2</div>
    <div class="column" style="flex: 2;">
    <MainContainer/>
    </div>
  </div>
</template>

<script>
import MainContainer from './MainContainer.vue'

export default {
  name: 'mainbox',
  components: {
   MainContainer
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.mainbox {
  display: flex;
  min-height: 768px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
}

.mainbox .column {
  flex: 1;
  margin-right: 0.125rem; /* Adjust spacing between columns, if necessary */
}

.mainbox .column:last-child {
  margin-right: 0; /* Remove margin from the last column */
}
</style>
