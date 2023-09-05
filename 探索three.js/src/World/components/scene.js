import { Color, Scene, TextureLoader } from 'https://cdn.skypack.dev/three@0.136.0';

function createScene() {
  var textureLoader = new TextureLoader();
  // 加载背景图片
  var texture = textureLoader.load('/assets/textures/bg.jpg')

  const scene = new Scene();

  // scene.background = new Color('skyblue');
  scene.background = texture

  return scene;
}

export { createScene };