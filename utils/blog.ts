import dayjs from 'dayjs'
import { FrontMatter } from 'interfaces'

export const slugFromFrontmatter = (frontMatter: FrontMatter): string =>
  frontMatter.__resourcePath.replace('blog/', '').replace(/\.mdx?$/, '')

export const postDate = (frontMatter: FrontMatter) =>
  dayjs(frontMatter.date, 'yyyy-mm-dd')

export const formatPostDate = (frontMatter: FrontMatter) =>
  postDate(frontMatter).format('DD. MMM, YYYY')
