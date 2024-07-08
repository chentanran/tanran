import { createApp, h } from 'vue';
import { DialogComponent } from './dialog';

type Dialogprops = {
  text: string;
  onOk: () => void;
};

type DialogReturn = {
  close: () => void;
};

export { Dialogprops, DialogReturn };

function createDialog(props: Dialogprops): DialogReturn {
  const dom = document.createElement('div');
  const body = document.querySelector('body') as HTMLBodyElement;
  body.appendChild(dom);

  const app = createApp({
    render() {
      return h(DialogComponent, props);
    }
  });

  app.mount(dom);

  return {
    close: () => {
      app.unmount();
      dom.remove();
    }
  };
}

const Dialog: { createDialog: typeof createDialog } = {
  createDialog
};

export default Dialog;
