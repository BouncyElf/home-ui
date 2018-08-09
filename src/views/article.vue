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
			this.article = {
				id: that.article_id,
				title: '假装有个文章标题',
				content: '阿克苏的骄傲立刻觉得你俩额' +
				'U币放你离开手机电脑才俩USB地方；'+
				'卡就是你的吃俩技能的分配；按时吃'+
				'欧安；的付出呢；啊速度传播阿里算法来的素材'+
				'不良爱神的箭部分六十多分别我路段收费比例SDF',
				tags:[
					that.type,
					'live',
					'ok'
				]
			};
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
