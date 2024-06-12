import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

function Home() {

  const [data, setpeople] = useState([]);

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

  const [page, setpage] = useState(1);
  const [PerPage] = useState(2);
  const datapage = PerPage;
  const totalpage = data.length;
  const totalPages = Math.ceil(totalpage / datapage);

  const handlePrevious = () => {
    setpage(prevPage => Math.max(prevPage - 1, 1));
  }

  const handleNext = () => {
    setpage(prevPage => Math.min(prevPage + 1, totalPages))
  }

  const handlePageClick = (pageNumber) => {
    setpage(pageNumber);
  };

  // const handleItemsPerPageChange = (event) => {
  //   const value = parseInt(event.target.value);
  //   setPerPage(value);
  //   setpage(1);
  // }

  const indexOfLastItem = page * PerPage;
  const indexOfFirstItem = indexOfLastItem - PerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem)

  // const loadUser = async () => {
  //   const responce = await axios.get('http://localhost:3001/people');
  //   console.log(responce.data, "responce");
  //   setData(responce.data);
  // };

  // useEffect(() => {
  //   loadUser();
  // }, []);

  // const filterData = data.filter(user => user.Firstname.toLowerCase().includes(searchTerm.toLowerCase())
  //   ||
  //   user.Lastname.toLowerCase().includes(searchTerm.toLowerCase())
  // )

  return (
    <>
      <div className='mt-10'>
        <input placeholder='Serch' type='text' style={{color: "#1D4ED8"}} className='w-96 border border-2 h-12 pl-5 rounded bg-blue-100 border-blue-800 focus:outline-none'></input>
      </div>
      <section className="mx-auto px-4 py-4">
        <div className='flex justify-end'>
          <button type="button" className="rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-100 hover:text-blue-700 hover:duration-500 hover:shadow-lg hover:shadow-blue-500/50">
            <Link to='/add'>Add new student</Link>
          </button>
        </div>
        <div className="mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-100 text-blue-400">
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
                    {currentData.map((value) => (
                      <tr key={value.id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            {/* <div className="h-10 w-10 flex-shrink-0">
                              {indexOfFirstItem + index + 1}
                            </div> */}
                            <div className="ml-4">
                              <div className="text-sm text-blue-700">{value.firstname}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4 text-start">
                          <div className="text-sm text-blue-700">{value.lastname}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-start">
                          <span className="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-700">
                            {value.age}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-blue-700 text-start">
                          {value.city}
                        </td>
                        <td className="whitespace-nowrap flex space-x-4 px-4 py-4 text-right text-sm font-medium text-start">
                          <Link to={`/edit/${value.id}`}>
                            <CiEdit className="text-green-500 hover:underline w-auto h-6" />
                          </Link>
                          <a onClick={() => onDelete(value.id)}>
                            <RiDeleteBin6Fill className="text-red-500 hover:underline cursor-pointer w-auto h-5" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-3 my-5 text-blue-700">
            <button onClick={handlePrevious} disabled={page === 1} className="border border-gray-300 py-1.5 px-3 rounded bg-blue-100">Previous</button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index + 1} onClick={() => handlePageClick(index + 1)} className={`border border-gray-300 py-1.5 px-3 rounded bg-blue-100 ${page === index + 1 ? 'active-link' : ''}`}>{index + 1}</button>
            ))}

            <button onClick={handleNext} className="border border-gray-300 py-1.5 px-3 rounded bg-blue-100">Next</button>

            {/* <select className='border border-gray-300 rounded-lg mx-2 text-center' onChange={handleItemsPerPageChange} value={PerPage}> 
              <option value={1}>1</option> 
              <option value={2}>2</option> 
              <option value={3}>3</option> 
              <option value={4}>4</option> 
              <option value={5}>5</option> 
            </select>  */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home