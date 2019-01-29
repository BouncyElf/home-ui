<template>
	<el-container class="config">
		<el-row v-if="islogin">
			<el-upload
				drag
				class="uploader"
				:name="filename"
				:action="uploadArticle"
				:on-success="uploadSuccess"
				:on-error="uploadError"
				:on-progress="uploading"
				:multiple="false">
			</el-upload>
		</el-row>
		<el-row v-else>
			<el-input
				placeholder="昵称"
				v-model="username"
				clearable>
			</el-input>
			<el-input
				placeholder="密码"
				v-model="password"
				type="password"
				clearable>
			</el-input>
			<el-button plain
				@click="login"
				type="primary">登录</el-button>
		</el-row>
	</el-container>
</template>

<script>
import Qs from 'qs';
export default {
	data() {
		return {
			uploadArticle:'',
			filename:'',
			islogin:false,
			username:'',
			password:''
		}
	},
	methods: {
		uploadSuccess(res) {
			let code = res.code;
			if (code === undefined || code !== 0) {
				this.$message({
					message:'文件上传失败',
					type:'error'
				});
				console.log(res);
				return false;
			}
			this.$message({
				message:'文件上传成功',
				type:'success'
			});
		},
		uploadError(err) {
			this.$message({
				message:'文件上传失败',
				type:'error'
			});
			console.log(err);
		},
		uploading(evt) {
			console.log(evt);
		},
		get_login_status() {
			let login_api = this.$url_prefix + '/api/user/islogin';
			this.$ajax.post(
				login_api,
				Qs.stringify({})
			).then((res) => {
				console.log(res);
				this.islogin = true;
			}).catch((res) => {
				console.log('错误的 res ', res);
				this.islogin = false;
			});
			this.islogin = false;
		},
		login() {
			if (this.username === '' || this.password === '') {
				this.$message({
					message:'请填写完整用户名和密码',
					type:'error'
				});
				return false;
			}
			let login_api = this.$url_prefix + '/api/user/login';
			this.$ajax.post(
				login_api,
				Qs.stringify({
					username:this.username,
					password:this.password
				})
			).then((res) => {
				console.log(res);
				this.islogin = true;
				this.$message({
					message:'登录成功',
					type:'success'
				});
			}).catch((res) => {
				console.log('错误的 res ', res);
				this.$message({
					message:res,
					type:'error'
				});
			});
		}
	},
	mounted:function(){
		this.uploadArticle = this.$url_prefix + '/api/article/upload';
		this.filename='article_file';
		this.get_login_status();
	}
};
</script>

<style>
.config {
	margin-top:9rem;
}
.uploader {
	margin:0 auto;
	text-align:center;
}
</style>
