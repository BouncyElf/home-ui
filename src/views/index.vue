<template>
	<el-row class="index text-center">
		<el-row class="avatar-big">
			<img src="../assets/avatar.png" />
		</el-row>
		<el-row class="bio">
			<p class="name">BouncyElf</p>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item v-for="b in bios"><a @click="tag_search(b.tag)"><el-tag>{{ b.label }}</el-tag></a></el-breadcrumb-item>
			</el-breadcrumb>
		</el-row>
	</el-row>
</template>

<script>
export default {
	data() {
		return {
			bios:[
				{
					label:'Vim',
					tag:'vim'
				},
				{
					label:'Golang',
					tag:'golang'
				},
				{
					label:'Vue',
					tag:'vue'
				}
			]
		}
	},
	methods: {
		tag_search(tag) {
			console.log(tag);
			this.$message({
				message: '搜索' + tag,
				type:'info'
			});
		}
	},
	mounted: function() {
		window.document.title = 'Home - BouncyElf\'s Personal Website.'
	}
}
</script>

<style>
.avatar-big img {
	height:100%;
	border-radius:100%;
}

.index {
	margin-top:9rem;
}

.bio .el-breadcrumb {
	width:fit-content;
	margin:0 auto;
}

.bio .el-tag {
	font-weight:400;
	cursor:pointer;
}
</style>
