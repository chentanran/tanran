<template>
  <Box class="example">
    <div class="btn-list">
      <Button :type="'primary'" @click="open">打开 message</Button>
      <Button :type="'success'" @click="normallyopen">message 不消失</Button>
      <Button :type="'warning'" @click="close">关闭 message</Button>
    </div>
  </Box>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Button, Message } from '../src';

const msg = ref(null);

const open = () => {
  Message.open({
    text: '这是一个success类型的消息提醒组件，5秒后自动关闭',
    type: 'success',
    duration: 5000
  });
};

const normallyopen = () => {
  msg.value = Message.open({
    text: '这是一个success类型的消息提醒组件，请手动关闭',
    type: 'info',
    duration: 0
  });
};

const close = () => {
  if (msg.value) {
    msg.value.close();
  }
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
