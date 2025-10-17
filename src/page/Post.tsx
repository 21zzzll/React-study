import React from 'react'
import { useParams, Link } from 'react-router-dom'
import type { BlogPost } from '../data/blog-posts' // 类型导入
import { blogPosts } from '../data/blog-posts' // 普通值导入
import useFetch from '../hooks/useFetch' // 引入自定义 Hook

const Post = () => {
  // 使用 React Router 的 useParams Hook 获取 URL 参数
  const { id } = useParams<{ id: string }>()

  // 使用自定义的 useFetch Hook 获取文章数据

  const { data: post, loading, error } = useFetch<BlogPost>(`/api/posts/${id}`)

  // 模拟本地数据查找（替代真实 API）
  React.useEffect(() => {
    if (id) {
      const foundPost = blogPosts.find((p) => p.id === Number(id))
      if (foundPost) {
        // 将找到的文章存入全局变量
        ;(window as any).fakeFetchData = foundPost
      }
    }
  }, [id])

  if (loading) {
    return <div className="post-loading">加载文章中...</div>
  }

  if (error || !post) {
    return (
      <div className="post-error">
        <p>错误：{error || '文章不存在'}</p>
        <Link to="/" className="back-link">
          返回首页
        </Link>
      </div>
    )
  }

  return (
    <article className="post-page">
      <Link to="/" className="back-link">
        ← 返回首页
      </Link>
      <h1>{post.title}</h1>
      <div className="post-meta">
        <span>发布日期：{post.date}</span>
        <span>作者：{post.author}</span>
      </div>
      <div className="post-content">{post.content}</div>
    </article>
  )
}

export default Post
