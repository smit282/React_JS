import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Add() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    age: "",
    city: ""
  })
  const onSubmitStudent = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/data", student)
    // navigate("/");  
  }
  return (
    <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Add student</h2>
            <form action="#" onSubmit={onSubmitStudent} method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="firstname" className="text-base font-medium text-gray-900">
                    {' '}
                    First Name{' '}
                  </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="First Name"
                      id="firstname"
                      onChange={(e) => setStudent({ ...student, firstname: e.target.stud })}
                    ></input>
                  </div>
                </div>
                <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="lastname" className="text-base font-medium text-gray-900">
                    {' '}
                    Last name{' '}
                  </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Last Name"
                      id="lastname"
                      onChange={(e) => setStudent({ ...student, lastname: e.target.stud })}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="age" className="text-base font-medium text-gray-900">
                      {' '}
                      Age{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="number"
                      placeholder="Age"
                      id="age"
                      onChange={(e) => setStudent({ ...student, age: e.target.stud })}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="city" className="text-base font-medium text-gray-900">
                      {' '}
                      City{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="City"
                      id="city"
                      onChange={(e) => setStudent({ ...student, city: e.target.stud })}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Add student
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Add