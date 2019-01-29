<template>
	<el-container>
		<el-row v-if="mode === 'list'">
			<article-list :list_articles="list_articles"
				:title_limit="title_limit" @goto_article="goto_article">
			</article-list>
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
			window.location.href='#/'+this.type+'/'+id;
		},
		change_title(title) {
			if (title === undefined || title === null) {
				return false;
			}
			title = title.substring(0,1).toUpperCase() + title.substring(1);
			window.document.title = title+' - BouncyElf\'s Personal Website';
		},
		reload_data() {
			if (this.article_id === undefined || this.article_id == 0) {
				this.mode = 'list';
				this.reload_list();
				return false;
			}
			this.mode = 'article';
			this.reload_article();
			return false;
		},
		reload_list() {
			// TODO: pagination
			let list_api = this.$url_prefix + '/api/article/list';
			this.$ajax.post(
				list_api,
				Qs.stringify({
					type:this.type
				})
			).then((res) => {
				console.log(res);
				this.list_articles = res.data.data;
			}).catch((res) => {
				console.log('错误的 res ', res);
				this.$message({
					message:res,
					type:'error'
				});
			});
		},
		reload_article() {
			// TODO: markdown parser
			let article_api = this.$url_prefix + '/api/article/detail';
			this.$ajax.post(
				article_api,
				Qs.stringify({
					article_id:this.article_id
				})
			).then((res) => {
				console.log(res);
				let data = res.data.data;
				this.article = {
					id: data.ID,
					title: data.Title,
					content: data.Content,
					tags:data.Tag.split(';')
				}
			}).catch((res) => {
				console.log('错误的 res ', res);
				this.$message({
					message:res,
					type:'error'
				});
			});
		},
		tag_search(tag) {
			this.$message({
				message: '搜索' + tag,
				type:'info'
			});
		}
	},
	watch: {
		'$route' (to, from) {
			this.type = this.$route.params.tag;
			if (this.$route.params.article_id === undefined) {
				this.$route.params.article_id = 0;
			}
			this.article_id = this.$route.params.article_id;
			this.change_title(this.type);
			this.reload_data();
		}
	},
	mounted:function() {
		this.type = this.$route.params.tag;
		if (this.$route.params.article_id === undefined) {
			this.$route.params.article_id = 0;
		}
		this.article_id = this.$route.params.article_id;
		this.change_title(this.type);
		this.reload_data();
	}
}
</script>
