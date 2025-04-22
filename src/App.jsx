import { Routes, Route } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogDetail from './components/BlogDetail'

export default function App() {
  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">Notefy Blog</h1>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  )
}
