<template>
  <Box class="example">
    <div class="btn-list">
      <Button :type="'primary'" @click="open">打开 Dialog</Button>
    </div>
  </Box>
</template>

<script lang="ts" setup>
import { Button, Dialog } from '../src';

const open = () => {
  const dialog = Dialog.createDialog({
    text: '这是一条消息',
    onOk: () => {
      dialog.close();
    }
  });
};
</script>

<style lang="less">
.example {
  width: 960px;
  margin: 30px auto;
  padding: 100px;
  // box-shadow: #0000004f 1px 1px 16px;

  .btn-list {
    margin-bottom: 10px;
    button {
      margin-right: 10px;
    }
  }
}
</style>
