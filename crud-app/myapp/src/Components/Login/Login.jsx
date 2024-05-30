import React from 'react'
import { ArrowRight } from 'lucide-react'

function Login() {
  return (
    <section>
        <div className="pt-10">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md shadow-xl p-5 rounded-lg shadow-blue-300">
            <h2 className="text-3xl font-bold leading-tight text-blue-700 sm:text-4xl">
              Log in
            </h2>
            <p className="mt-2 text-sm text-blue-700">
              Don't have an account?
              <a href="#" title="" className="font-semibold text-blue-700 ml-2 transition-all duration-200 hover:underline">
                Create a free account
              </a>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div className='text-start'>
                  <label htmlFor="" className="text-base font-medium text-blue-700">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input className="flex h-10 w-full rounded-md border border-blue-700 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="email" placeholder="Email"></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-blue-700">
                      Password
                    </label>
                    <a href="#" title="" className="text-sm font-semibold text-blue-700 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2">
                    <input className="flex h-10 w-full rounded-md border border-blue-700 bg-transparent px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="password" placeholder="Password"></input>
                  </div>
                </div>
                <div>
                  <button type="button" className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-gray-100 hover:text-blue-700 hover:duration-500 hover:shadow-lg hover:shadow-blue-500/50">
                    Get started <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Login