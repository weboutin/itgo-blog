<template>
	<div class="header">
		<div class="logo" @click="backHome">
			<div class="logo-icon">W</div>
			<div class="logo-text">weboutin</div>
		</div>
		<div class="menu">
			<div v-for="menu, index in menus" :key="index" :class="{ 'menu-item': true, 'menu-selected': menu.seleted }"
				@mouseover="mouseOverMenu(index)" @mouseleave="mouseLeaveMenu" @click="clickMenu(menu.key)">{{ menu.text }}
			</div>
			<div class="menu-item mp-wechat" @mouseover="isShowQrCode = true" @mouseleave="isShowQrCode = false">
				公众号
				<div v-if="isShowQrCode" class="qrcode-box">
					<img src="../../assets/mp-wechat.jpg">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import "reset.css"
export default {
	name: 'Header',
	data: () => {
		return {
			isShowQrCode: false,
			selectedMenuKey: '',
			menus: [
				{
					key: 'home',
					text: '首页',
					seleted: false
				},
				{
					key: 'article',
					text: '文章',
					seleted: false
				},
				{
					key: 'laboratory',
					text: '+实验',
					seleted: false
				},
				{
					key: 'about',
					text: '#关于',
					seleted: false
				},
			]

		}
	},
	methods: {
		mouseOverMenu: function (index) {
			this.menus[index].seleted = true
		},
		mouseLeaveMenu: function () {
			this.menus.map(menu => {
				menu.seleted = menu.key === this.selectedMenuKey
			})
		},
		clickMenu: function (menuKey) {
			this.$router.push({
				name: menuKey
			})
		},
		backHome: function () {
			this.$router.push({ name: 'home' })
		}
	},
	mounted() {
		const routeName = this.$route.name
		const selectedMenu = this.menus.find((data) => data.key === routeName);
		this.selectedMenuKey = selectedMenu?.key
		selectedMenu && (selectedMenu.seleted = true)
	}
}
</script>

<style scoped>
.header {
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	box-shadow: 2px 2px 2px 1px rgba(71, 49, 49, 0.2);
	padding: 0 400px;
}

.logo {
	display: flex;
	align-items: center;
	cursor: pointer;
	user-select: none;
}

.logo-icon {
	width: 30px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	font-size: 20px;
	color: rgb(221, 228, 216);
	background:
		linear-gradient(105deg, rgb(162, 145, 201) 39%, rgb(56, 68, 122) 96%), rgb(51, 60, 90);
	border-radius: 5px;
}

.logo-text {
	margin-left: 5px;
	font-size: 20px;
	color: rgb(76, 110, 184);
}

.menu {
	display: flex;
}

.menu-item {
	width: 100px;
	text-align: center;
	height: 40px;
	line-height: 40px;
	cursor: pointer;
	position: relative;
	user-select: none;
}

.menu-selected::after {
	width: 80%;
	height: 2px;
	background: rgb(76, 110, 184);
	border-radius: 10px 10px 0 0;
	position: absolute;
	content: "";
	left: 10%;
	right: 0;
	bottom: 0;
}

.mp-wechat {
	position: relative;
}

.qrcode-box {
	position: absolute;
	width: 200px;
	left: -50px;
	height: 200px;
	top: 70px;
	border: 1px solid rgb(51, 60, 90, 0.5);
}

.qrcode-box img {
	width: 100%;
	height: 100%;
}
</style>