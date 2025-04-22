// import { useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'

// export default function BlogDetail() {
//   const { id } = useParams()
//   const [blog, setBlog] = useState(null)
//   const [countryInfo, setCountryInfo] = useState(null)

//   useEffect(() => {
//     const blogs = [
//       { id: 1, title: "Exploring France", content: "France is lovely.", country: "France" },
//       { id: 2, title: "Visiting Japan", content: "Japan is amazing.", country: "Japan" }
//     ]

//     const found = blogs.find(b => b.id.toString() === id)
//     setBlog(found)

//     if (found) {
//       fetch(`https://restcountries.com/v3.1/name/${found.country}`)
//         .then(res => res.json())
//         .then(data => setCountryInfo(data[0]))
//     }
//   }, [id])

//   if (!blog) return <p>Loading blog...</p>

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
//       <p className="mb-2">{blog.content}</p>
//       <h3 className="text-lg font-semibold mt-4">Country: {blog.country}</h3>
//       {countryInfo ? (
//         <div className="mt-2">
//           <p><strong>Capital:</strong> {countryInfo.capital?.[0]}</p>
//           <p><strong>Population:</strong> {countryInfo.population}</p>
//           <p><strong>Region:</strong> {countryInfo.region}</p>
//         </div>
//       ) : (
//         <p>Loading country info...</p>
//       )}
//     </div>
//   )
// }





import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function BlogDetail() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [countryInfo, setCountryInfo] = useState(null)

  useEffect(() => {
    const blogs = [
      { id: 1, title: "Exploring France", content: "France is lovely.", country: "France" },
      { id: 2, title: "Visiting Japan", content: "Japan is amazing.", country: "Japan" }
    ]

    const found = blogs.find(b => b.id.toString() === id)
    setBlog(found)

    if (found) {
      fetch(`https://restcountries.com/v3.1/name/${found.country}`)
        .then(res => res.json())
        .then(data => setCountryInfo(data[0]))
    }
  }, [id])

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading blog...</p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold mb-4 text-indigo-600">{blog.title}</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">{blog.content}</p>

      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Country Info: {blog.country}</h3>
        {countryInfo ? (
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-medium">Capital:</span> {countryInfo.capital?.[0]}</li>
            <li><span className="font-medium">Population:</span> {countryInfo.population.toLocaleString()}</li>
            <li><span className="font-medium">Region:</span> {countryInfo.region}</li>
          </ul>
        ) : (
          <p className="text-sm text-gray-500">Loading country info...</p>
        )}
      </div>
    </div>
  )
}
