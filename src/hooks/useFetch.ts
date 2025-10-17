//自定义 Hook 用于请求数据
import { useState, useEffect } from 'react'

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    //初始化状态
    setLoading(true)
    setError(null)

    //异步请求函数
    const fetchData = async () => {
      try {
        //模拟请求接口
        const response = await fetch(url)
        if (!response.ok) throw new Error('请求失败')
        //成功接收数据更新数据
        const result = await response.json()
        setData(result)
      } catch (err) {
        //请求失败更新错误状态
        setError(err instanceof Error ? err.message : '未知错误')
      } finally {
        //请求完成更新加载状态
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
  //返回数据、加载状态、错误状态
  return { data, loading, error }
}
export default useFetch
