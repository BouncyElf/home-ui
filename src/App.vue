<template>
	<el-container id="home">
		<el-aside id="nav" class="text-center">
			<el-menu
	   default-active="1"
	class="el-menu-vertical"
 @select="changeBackground"
 >
 <el-menu-item index="1" @click="goto('')">
	 <span>主页</span>
 </el-menu-item>
 <el-menu-item index="2" @click="goto('game')">
	 <span>游戏</span>
 </el-menu-item>
 <el-menu-item index="3" @click="goto('code')">
	 <span>代码</span>
 </el-menu-item>
 <el-menu-item index="4" @click="goto('anime')">
	 <span>动漫</span>
 </el-menu-item>
 <el-menu-item index="5" @click="goto('movie')">
	 <span>电影</span>
 </el-menu-item>
 <el-menu-item index="6" @click="goto('live')">
	 <span>生活</span>
 </el-menu-item>
 <el-menu-item index="7" @click="goto('music')">
	 <span>音乐</span>
 </el-menu-item>
			</el-menu>
		</el-aside>
		<el-main id="main-content" :style="main_background">
			<router-view/>
		</el-main>
	</el-container>
</template>

<script>
const color_table = [
	'#ffffff',
	'rgba(117, 120, 130, 0.1)',
	'rgba(92, 193, 179, 0.1)',
	'rgba(110, 247, 203, 0.1)',
	'rgba(213, 238, 255, 0.1)',
	'rgba(208, 239, 181, 0.1)',
	'rgba(255, 246, 246, 0.1)'
];
export default {
	data() {
		return {
			main_background: {
				'background-color':'white'
			}
		}
	},
	methods: {
		goto(uri) {
			window.scrollTo(0,0);
			if (uri === '' || uri === undefined) {
				window.location.href="#/";
				return false;
			}
			window.location.href="#/"+uri+"/0";
		},
		changeBackground(key) {
			console.log('nav key now is', key);
			this.main_background = {
				'background-color':color_table[key-1]
			}
		}
	}
};
</script>

<style>
body {
	margin:0;
	border:0;
}

#home {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	min-width:100%;
	min-height:1080px;
}

.text-center {
	text-align:center;
}

.el-row {
	width:100%;
	margin: 1rem auto;
}

#nav {
	margin-top:11rem;
}

a {
	text-decoration:none;
	cursor:pointer;
}

.main-content {
	min-height:100%;
}
</style>
