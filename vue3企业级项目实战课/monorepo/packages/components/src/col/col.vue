<template>
  <div :class="{ [baseClassName]: true, [spanClassName]: true }">
    <slot v-if="$slots.default"></slot>
  </div>
</template>

<script setup lang="ts">
import { prefixName } from '../theme';

const props = defineProps({
  span: Number
});

function getSpan(propspan: number | undefined): number {
  if (typeof propspan === 'number') {
    const span: number = Math.ceil(Number(propspan));
    if (span >= 1 && span <= 24) {
      return span;
    }
  }

  return 1;
}

const baseClassName = `${prefixName}-col`;
const spanClassName = `${prefixName}-col-${getSpan(props.span)}`;
</script>

<style lang="less" scoped></style>
