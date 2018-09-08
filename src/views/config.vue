<template>
	<el-container>
		<el-input v-model="bio" placeholder="请输入新的tag">
		</el-input>
		<el-button plain type="primary" @click="update_bio">确定</el-button>
	</el-container>
</template>

<script>
import Qs from 'qs';
export default {
	data() {
		return {
			bio:""
		}
	},
	methods: {
		update_bio() {
			let that = this;
			if (that.bio === undefined || that.bio === '') {
				that.$message({
					message:'请输入bio',
					type:'info'
				});
				return false;
			}
			let bio_api = that.$url_prefix + '/api/info/update';
			that.$ajax.post(
				bio_api,
				Qs.stringify({
					type:"add",
					bio:that.bio
				})
			).then(function(res) {
				if (res.data.error_msg !== undefined && res.data.error_msg !== '') {
					console.log('错误的 res ', res);
					that.$message({
						message:res.data.error_msg,
						type:'error'
					});
					return false;
				}
				console.log(res);
				let data = res.data.data;
				console.log(data);
			}).catch(function(res) {
				console.log('错误的 res ', res);
				that.$message({
					message:res,
					type:'error'
				});
			});
		}
	}
};
</script>

