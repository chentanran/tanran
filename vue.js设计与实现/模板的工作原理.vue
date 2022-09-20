<template>
	<div @click="handler">
		click me
	</div>
</template>

<script>
export default {
	data() {},
	methods: {
		handler: () => {}
	},
	render() {
		return h('div', { onClick: handler }, 'click me')
	}
}
</script>
