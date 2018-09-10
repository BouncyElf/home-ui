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
						<el-tag>{{ tag_label(b) }}</el-tag>
					</a>
				</el-breadcrumb-item>
			</el-breadcrumb>
		</el-row>
	</el-row>
</template>

<script>
import Qs from 'qs';
export default {
	data() {
		return {
			bios:[]
		}
	},
	methods: {
		tag_search(tag) {
			console.log(tag);
			this.$message({
				message: '搜索' + tag,
				type:'info'
			});
		},
		tag_label(tag) {
			return tag.substring(0,1).toUpperCase() + tag.substring(1).toLowerCase();
		},
		get_bio() {
			let that = this;
			let bio_api = that.$url_prefix + '/api/info/get';
			that.$ajax.post(
				bio_api,
				Qs.stringify({
				})
			).then(function(res) {
				console.log(res);
				let data = res.data.data;
				console.log(data);
				that.bios = data.bios;
			}).catch(function(res) {
				console.log('错误的 res ', res);
				that.$message({
					message:res,
					type:'error'
				});
			});
		}
	},
	mounted: function() {
		window.document.title = 'Home - BouncyElf\'s Personal Website'
		this.get_bio();
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
