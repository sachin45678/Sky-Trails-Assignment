import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function BlogList() {
  const [blogs] = useState([
    { id: 1, title: "Exploring France", content: "France is lovely.", country: "France" },
    { id: 2, title: "Visiting Japan", content: "Japan is amazing.", country: "Japan" }
  ])

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id} className="mb-4 border p-3 rounded shadow">
          <h2 className="text-xl font-semibold">
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </h2>
          <p>{blog.content}</p>
          <p className="text-sm text-gray-500">Country: {blog.country}</p>
        </div>
      ))}
    </div>
  )
}
