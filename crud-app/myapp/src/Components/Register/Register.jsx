import React from 'react'
import { ArrowRight } from 'lucide-react'

function Register() {

  return (
    <section>
      <div className="pt-10">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md shadow-xl p-5 rounded-lg shadow-blue-300">
          <h2 className="text-3xl font-bold leading-tight text-blue-700 sm:text-4xl">Sign up</h2>
          <p className="mt-2 text-base text-blue-700">
            Already have an account?
            <a href="#" title="" className="font-medium text-blue-700 ml-2 transition-all duration-200 hover:underline">
              Sign In
            </a>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5 text-start">
              <div>
                <label htmlFor="name" className="text-base font-medium text-blue-700 text-start">
                  Full Name
                </label>
                <div className="mt-2">
                  <input className="flex h-10 w-full rounded-md border border-blue-700 px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="First Name" id="name"></input>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-blue-700">
                  Email address
                </label>
                <div className="mt-2">
                  <input className="flex h-10 w-full rounded-md border border-blue-700 px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="email" placeholder="Email" id="email"></input>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="password" className="text-base font-medium text-blue-700">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input className="flex h-10 w-full rounded-md border border-blue-700 px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="password" placeholder="Password" id="password"></input>
                </div>
              </div>
              <div>
                <label htmlFor="gender" className="text-base font-medium text-blue-700">
                  Gender
                </label>
                <div className="mt-2">
                  <input className="flex h-10 w-full rounded-md border border-blue-700 px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="gender" placeholder="Gender" id="gender"></input>
                </div>
              </div>
              <div>
                <button type="button" className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-gray-100 hover:text-blue-700 hover:duration-500 hover:shadow-lg hover:shadow-blue-500/50">
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register