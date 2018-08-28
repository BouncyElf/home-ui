<template>
	<el-container>
		<el-row v-if="mode === 'list'">
			<article-list :list_articles="list_articles" :title_limit="title_limit" @goto_article="goto_article"></article-list>
		</el-row>
		<el-row v-if="mode === 'article'">
			<article-content :article="article" @tag_search="tag_search"></article-content>
		</el-row>
	</el-container>
</template>

<script>
import Qs from 'qs';

export default {
	data() {
		return {
			type:this.$route.params.tag,
			article_id:this.$route.params.article_id,
			title_limit:10,
			mode:'list',
			article:{},
			list_articles:[]
		}
	},
	methods: {
		goto_article(id) {
			let that = this;
			window.location.href='#/'+that.type+'/'+id;
		},
		change_title(title) {
			if (title === undefined || title === null) {
				return false;
			}
			title = title.substring(0,1).toUpperCase() + title.substring(1);
			window.document.title = title+' - BouncyElf\'s Personal Website.';
		},
		reload_data() {
			let that = this;
			if (that.article_id === undefined || that.article_id === '0') {
				that.mode = 'list';
				that.reload_list();
				return false;
			}
			that.mode = 'article';
			that.reload_article();
			return false;
		},
		reload_list() {
			this.$message({
				message:'reload list',
				type:'info'
			});
			this.list_articles = [
				{
					id:123,
					title:'test',
					ctime:'2018-08-01 15:04'
				},
				{
					id:123,
					title:'tttttttttttttttttttttttttt',
					ctime:'2018-08-01 15:04'
				},
				{
					id:123,
					title:'一二三四五六七八九十十一',
					ctime:'2018-08-01 15:04'
				}
			];
		},
		reload_article() {
			let that = this;
			this.$message({
				message:'reload article',
				type:'info'
			});
			let article_api = that.$url_prefix + '/api/article/get';
			console.log("in article");
			console.log(that.$api_list);
			that.$ajax.post(
				article_api,
				Qs.stringify({
					article_id:that.article_id
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
				that.article = {
					id: data.ID,
					title: data.Title,
					content: data.Content,
					tags:data.Tag.split(';')
				}
			}).catch(function(res) {
				console.log('错误的 res ', res);
				that.$message({
					message:res,
					type:'error'
				});
			});
		},
		tag_search(tag) {
			console.log(tag);
			this.$message({
				message: '搜索' + tag,
				type:'info'
			});
		}
	},
	watch: {
		'$route' (to, from) {
			this.type = this.$route.params.tag;
			this.article_id = this.$route.params.article_id;
			this.change_title(this.type);
			this.reload_data();
		}
	},
	mounted:function() {
		this.type = this.$route.params.tag;
		this.article_id = this.$route.params.article_id;
		this.change_title(this.type);
		this.reload_data();
	}
}
</script>
