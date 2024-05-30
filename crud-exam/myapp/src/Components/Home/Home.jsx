import React from 'react'

const people = [
  {
    name: 'John Doe',
    title: 'Front-end Developer',
    department: 'Engineering',
    email: 'john@devui.com',
    role: 'Developer',
    image:
      'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  },
  {
    name: 'Jane Doe',
    title: 'Back-end Developer',
    department: 'Engineering',
    email: 'jane@devui.com',
    role: 'CTO',
    image:
      'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
]

function Home() {
  return (
    <>
      <section className="mx-auto w-full px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-end md:space-y-0"> 
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new employee
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                    <th scope="col" className="px-4 py-3.5 text-left text-md font-semibold">
                        First Name
                      </th>
                      <th scope="col" className="px-12 py-3.5 text-left text-md font-semibold">
                        Last Name
                      </th>

                      <th scope="col" className="px-4 py-3.5 text-left text-md font-semibold">
                        Age
                      </th>

                      <th scope="col" className="px-4 py-3.5 text-left text-md font-semibold">
                        City
                      </th>

                      <th scope="col" className="px-4 py-3.5 text-left text-md font-semibold">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-blue-700">{person.firstname}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4 text-start">
                          <div className="text-sm text-blue-700">{person.lastname}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-start">
                          <span className="inline-flex rounded-full bg-blue-200 px-2 text-xs font-semibold leading-5 text-blue-700">
                            {person.age}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-blue-700 text-start">
                          {person.city}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 space-x-2 text-right text-sm font-medium text-start">
                          <a className="hover:underline cursor-pointer">
                            Edit
                          </a>
                          <a className="hover:underline cursor-pointer">
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