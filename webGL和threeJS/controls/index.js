const basicType = {
  color: {
    method: 'addColor',
    getValue: item => item.color.getStyle(),
    setValue: (item, value) => item.color.setStyle(value)
  },
  intensity: {
    extends: [0, 10],
    getValue: item => item.intensity,
    setValue: (item, value) => item.intensity = +value
  },
  distance: {
    extends: [0, 2],
    getValue: item => item.distance,
    setValue: (item, value) => item.distance = +value
  },
  angle: {
    extends: [0, Math.PI / 2],
    getValue: item => item.angle,
    setValue: (item, value) => item.angle = +value
  },
  exponent: {
    extends: [0, 20],
    getValue: item => item.exponent,
    setValue: (item, value) => item.exponent = +value
  },
}

const itemType = {
  SpotLight: ['color', 'intensity', 'distance', 'angle', 'exponent']
}

function initControls (item) {
  const typeList = itemType[item.type]

  const controls = {}
  if (!typeList.length) {
    return
  }

  const gui = new dat.GUI()

  for (let i = 0; i < typeList.length; i++) {
    const child = basicType[typeList[i]]
    console.log(child, 'child')
    if (child) {
      controls[typeList[i]] = child.getValue(item)

      const childExtends = child.extends || []

      gui[child.method || 'add'](controls, typeList[i], ...childExtends).onChange(value => {
        child.setValue(item, value)
      })

    }
  }
}