<template>
	<el-container class="config">
		<el-row>
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
	</el-container>
</template>

<script>
import Qs from 'qs';
export default {
	data() {
		return {
			uploadArticle:'',
			filename:''
		}
	},
	methods: {
		uploadSuccess(res) {
			let that = this;
			let code = res.code;
			if (code === undefined || code !== 0) {
				that.$message({
					message:'文件上传失败',
					type:'error'
				});
				console.log(res);
				return false;
			}
			that.$message({
				message:'文件上传成功',
				type:'success'
			});
		},
		uploadError(err) {
			let that = this;
			that.$message({
				message:'文件上传失败',
				type:'error'
			});
			console.log(err);
		},
		uploading(evt) {
			console.log(evt);
		}
	},
	mounted:function(){
		let that = this;
		that.uploadArticle = that.$url_prefix + '/api/article/upload';
		that.filename='article_file';
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
