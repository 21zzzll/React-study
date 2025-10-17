import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts' //引入模拟数据
import type { BlogPost } from '../data/blogPosts' //引入类型

const Home = () => {
  //通过useState 管理博客列表和搜索状态
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  //通过useEffect 用定时器模拟异步加载博客数据
  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setPosts(blogPosts)
      setLoading(false)
    }
    loadData()
  }, [])

  // 搜索功能：根据输入筛选文章
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (loading) {
    return <div className="post-loading">加载博客列表中...</div>
  }

  return (
    <div className="home-page">
      <h1>我的博客</h1>
      <input
        type="text"
        placeholder="搜索"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '80%', padding: '8px', marginBottom: '20px' }}
      ></input>
      {/* 文章列表 */}
      {filteredPosts.length === 0 ? (
        <p>没有找到匹配文章</p>
      ) : (
        <div className="post-list">
          {filteredPosts.map((post) => (
            <article className="post-item">
              <h2>{post.title}</h2>
              <div className="post-info">
                <span>{post.date}</span>
                <span>{post.author}</span>
              </div>
              <p className="post-overview">{post.overview}</p>

              <Link to={'/post/' + post.id} className="read-more">
                阅读更多...
              </Link>
            </article>
          ))}
        </div>
      )}
      <Outlet />
    </div>
  )
}

export default Home
