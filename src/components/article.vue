<template>
	<el-container class="data-article">
		<el-header class="article-info">
			<el-row>{{ article.title }}</el-row>
			<el-breadcrumb separator="/" class="article-tag">
				<el-breadcrumb-item v-for="tag in article.tags"><a @click="tag_search(tag)"><el-tag>{{ tag_label(tag) }}</el-tag></a></el-breadcrumb-item>
			</el-breadcrumb>
		</el-header>
		<el-main class="article-content">
			<el-row>{{ article.content }}</el-row>
		</el-main>
	</el-container>
</template>

<script>
export default {
	props:['article'],
	data() {
		return {
		}
	},
	methods: {
		tag_search(tag) {
			this.$emit('tag_search', tag);
		},
		tag_label(tag) {
			return tag.substring(0,1).toUpperCase() + tag.substring(1).toLowerCase();
		}
	}
}
</script>

<style>
.data-article {
	max-width:1180px;
	margin:.5rem auto;
}
.article-info {
	text-align:center;
}
.article-tag {
	width:fit-content;
	margin:1rem 0;
	margin-right:3rem;
}
.article-tag .el-tag {
	font-weight:400;
	cursor:pointer;
}
.article-content {
	width:fit-content;
	max-width:100%;
	margin:0 auto;
}
</style>
