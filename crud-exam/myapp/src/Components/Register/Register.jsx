import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Waring_Alert, Success_Alert, Error_Alert } from '../Alert';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const NavigateLogin = useNavigate()
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const getInputVal = (even) => {
    const { name, value } = even.target;
    setUser((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      }
    })
  }

  const HandelSubmit = (even) => {
    even.preventDefault()

    const { name, email, password } = user
    if (name === "") {
      Waring_Alert("Name Fild Is Required")
    } else if (email === "") {
      Waring_Alert("Email Fild Is Required")
    } else if (password === "") {
      Waring_Alert("Password Fild Is Required")
    } else {
      if (!localStorage.getItem("crudUser")) {
        localStorage.setItem("crudUser", JSON.stringify([user]))
        Success_Alert("User Add SussesFully")
        setTimeout(() => {
          NavigateLogin('/login')
        }, 2200);
      } else {
        const prevLocalData = JSON.parse(localStorage.getItem("crudUser"))
        const findUser = prevLocalData.findIndex((X) => X.email === email)
        if (findUser === -1) {
          localStorage.setItem("crudUser", JSON.stringify([...prevLocalData, user]))
          Success_Alert("User Add SussesFully")
          setTimeout(() => {
            NavigateLogin('/login')
          }, 2200);
        } else {
          Error_Alert("User Is already Exist")
        }
      }

      even.target.reset();
      setUser((preVal => {
        return {
          name: "",
          email: "",
          password: ""
        }
      }))
    }
  }
return (
  <section>
    <ToastContainer/>
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
          <p className="mt-2 text-base text-gray-600">
            Already have an account?{' '}
            <a
              href="#"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </a>
          </p>
          <form onSubmit={HandelSubmit} action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Full Name{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    name='name'
                    onChange={getInputVal}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    name='email'
                    onChange={getInputVal}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    {' '}
                    Password{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    name='password'
                    onChange={getInputVal}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="h-full w-full">
        <img
          className="mx-auto h-full w-full rounded-md object-cover"
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
          alt=""
        />
      </div>
    </div>
  </section>
)
}

export default Register