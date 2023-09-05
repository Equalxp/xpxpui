import MarkdownIt from 'markdown-it'
import TableContainer from './table'
// @ts-ignore
// https://markdown-it.docschina.org/#%E7%94%A8%E6%B3%95%E7%A4%BA%E4%BE%8B
// https://juejin.cn/post/6844903688536850440
const markdown: MarkdownIt = MarkdownIt({
  breaks: true
})

// @ts-ignore
export const mdPlugin = (md: MarkdownIt) => {
  md.use(TableContainer)
}
