<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" click="getInfo()"></image>
		<view class="text-area">
			<text>{{ data[0].name }}</text>
			<button @click="increment">Count is: {{ count }}</button>
		</view>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0);
let data = ref([{ value: 5 }, { value: 2 }, { value: 3 }, { value: 4 }]);


// 用来修改状态、触发更新的函数
function increment() {
	count.value++;
	const db = wx.cloud.database();
	const infos = db.collection('info');
	infos.get().then(res => {
        console.log(res.data);
		data.value  = res.data;
    })
	console.log("-------", data.value)
}

// 生命周期钩子
onMounted(() => {
	console.log(`The initial count is ${count.value}.`)
})
</script>


<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
