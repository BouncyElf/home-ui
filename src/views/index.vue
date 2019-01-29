<template>
	<el-row class="index text-center">
		<el-row class="avatar-big">
			<img src="../assets/avatar.png" />
		</el-row>
		<el-row class="bio">
			<p class="name">BouncyElf</p>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item v-for="b in bios">
					<a @click="tag_search(b)">
						<el-tag>{{ b }}</el-tag>
					</a>
				</el-breadcrumb-item>
			</el-breadcrumb>
			<p class="value">{{ value }}</p>
		</el-row>
	</el-row>
</template>

<script>
import Qs from 'qs';
export default {
	data() {
		return {
			bios:[],
			value:'',
		}
	},
	methods: {
		tag_search(tag) {
			// TODO: search tag
			this.$message({
				message: '搜索' + tag,
				type:'info'
			});
		},
		get_info() {
			let bio_api = this.$url_prefix + '/api/info';
			this.$ajax.get(bio_api).then((res) => {
				console.log(res);
				this.bios = res.data.data;
			}).catch((res) => {
				console.log('错误的 res ', res);
				this.$message({
					message:res,
					type:'error'
				});
			});
		}
	},
	mounted: function() {
		window.document.title = 'Home - BouncyElf\'s Personal Website'
		this.get_info();
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
