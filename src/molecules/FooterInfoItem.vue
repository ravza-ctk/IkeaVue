<template>
  <div class="f-info-col">
    <div class="f-head">
      <div class="icon-wrapper">
        <slot name="icon"></slot>
      </div>
      <h4>{{ title }}</h4>
    </div>
    
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterInfoItem',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.f-info-col {
  flex: 1;
  min-width: 200px; 
}

.f-head {
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 16px;
  color: #111;
}

.icon-wrapper {
  display: flex;
  align-items: center;
}

.content-wrapper {
  font-size: 14px;
  line-height: 1.5;
  color: #484848;
}

:deep(a) {
  color: #111;
  text-decoration: underline;
  font-weight: 700;
  cursor: pointer;
}

:deep(p) {
  margin: 0 0 5px 0;
}
</style>