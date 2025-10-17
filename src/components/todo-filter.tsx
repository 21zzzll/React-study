function TodoFilter({ filter, setFilter }:any) {
  return (
    <div>
      <button onClick={() => setFilter('all')}>全部</button>
      <button onClick={() => setFilter('active')}>待办</button>
      <button onClick={() => setFilter('completed')}>已完成</button>
    </div>
  );
}
export default TodoFilter
