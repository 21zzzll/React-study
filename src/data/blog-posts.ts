// 定义博客文章类型
export interface BlogPost {
  id: number
  title: string
  date: string
  overview: string
  content: string
  author: string
}

// 模拟博客数据
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'React Hook 入门指南',
    date: '2024-10-01',
    overview: '本文介绍 React Hook 的基本使用，包括 useState、useEffect 和自定义 Hook...',
    content: `React Hook 是 React 16.8 引入的特性，允许函数组件使用状态（如 useState）、生命周期（如 useEffect）等原本类组件才有的功能，无需编写类组件即可实现复杂逻辑，让代码更简洁、复用性更高，常见的有 useState 管理状态、useEffect 处理副作用等`,
    author: '技术博主',
  },
  {
    id: 2,
    title: 'TypeScript 与 React 结合实践',
    date: '2024-10-08',
    overview: '如何在 React 项目中优雅地使用 TypeScript，提升代码质量和开发效率...',
    content: `TypeScript 带来的好处
                  1. 类型检查：提前发现错误
                  2. 自动提示：提升开发效率
                  3. 代码文档：类型即文档
                  React 组件类型定义
                  通过 interface 定义 Props 类型，确保传参正确`,
    author: '前端工程师',
  },
]
