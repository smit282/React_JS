import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// const people = [ 
//   { 
//     name: 'John Doe', 
//     title: 'Front-end Developer', 
//     department: 'Engineering', 
//     email: 'john@devui.com', 
//     role: 'Developer', 
//     image: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80', 
//   }, 
//   { 
//     name: 'Jane Doe',
//     title: 'Back-end Developer', 
//     department: 'Engineering', 
//     email: 'jane@devui.com', 
//     role: 'CTO', 
//     image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80', 
//   }, 
// ]

function Home() {

  const [people, setpeople] = useState([]);

  const loadUser = async () => {
    const res = await axios.get("http://localhost:3001/data")
    console.log(res.data, "res");
    setpeople(res.data)
    console.log(res, "===")
  }

  useEffect(() => {
    loadUser();
  }, [])

  const onDelete = (id) => {
    axios.delete(`http://localhost:3001/data/${id}`)
      .then((responce) => {
        console.log(responce, "responce")
        loadUser();
      })
      .catch((error) => {
        console.log(error, "error")
      })
  }

  return (
    <>
      <section className="mx-auto px-4 py-4">
        <div className='flex justify-end'>
          <button type="button" className="rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-100 hover:text-blue-700 hover:duration-500 hover:shadow-lg hover:shadow-blue-500/50">
            <Link to='/add' href='#'>Add new employee</Link>
          </button>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3.5 text-left text-md font-semibold text-blue-300">
                        First Name
                      </th>
                      <th scope="col" className="px-12 py-3.5 text-left text-md font-semibold text-blue-300">
                        Last Name
                      </th>

                      <th scope="col" className="px-4 py-3.5 text-left text-md font-semibold text-blue-300">
                        Age
                      </th>

                      <th scope="col" className="px-4 py-3.5 text-left text-md font-semibold text-blue-300">
                        City
                      </th>

                      <th scope="col" className="px-4 py-3.5 text-left text-md font-semibold text-blue-300">
                        Action
                      </th>

                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((value) => (
                      <tr key={value.id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-blue-700">{value.firstname}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4 text-start">
                          <div className="text-sm text-blue-700">{value.lastname}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-start">
                          <span className="inline-flex rounded-full bg-blue-200 px-2 text-xs font-semibold leading-5 text-blue-700">
                            {value.age}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-blue-700 text-start">
                          {value.city}
                        </td>
                        <td className="whitespace-nowrap space-x-4 px-4 py-4 text-right text-sm font-medium text-start">
                          <Link to='/add' href="#" className="text-blue-700">
                            Edit
                          </Link>
                          <a onClick={()=>onDelete(value.id)} href="#" className="text-blue-700 hover:underline">
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home