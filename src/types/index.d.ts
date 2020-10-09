export interface articleData {
  articleId: number,
  articleTitle: string,
  articleDesc: string,
  articleImage: string,
  articleTime: string,
  articleTags: Array,
  comments: number,
  pageView: number,
  author: string,
  headerImg: string
}

export interface responseData {
  code: number,
  data: object,
  message: string
}