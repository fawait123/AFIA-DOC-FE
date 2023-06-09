import React, { useState } from 'react'

interface RegisterFormProps {
    visible: boolean;
}

interface IState {
    user: {
        name: string,
        email: string,
        password: string,
        password_confirmation: string,
    }
}

export default function RegisterForm({ visible }: RegisterFormProps) {

  const [state, setState] = useState<IState>({
    user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    setState({
        user: {
            ...state.user,
            [e.target.name]: e.target.value,
        }
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
    e.preventDefault()
    fetch('url_target', {
        method: 'POST',
        body: JSON.stringify(state.user),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((data) => {
        // Handle respons dari server
        console.log(data);
    })
    .catch((error) => {
        // Handle error
        console.error('Error:', error);
    });
  }

  if (!visible) return null

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm -mt-4">
            <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
                Register
            </h2>
        </div>
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </label>
                    <div className="mt-2">
                        <input
                        id="name"
                        name="name"
                        type="text"
                        value={state.user.name}
                        onChange={handleChange}
                        autoComplete="none"
                        required
                        className="focus:outline-none block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        value={state.user.email}
                        onChange={handleChange}
                        autoComplete="none"
                        required
                        className="focus:outline-none block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        value={state.user.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                        className="focus:outline-none block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password_confimation" className="block text-sm font-medium leading-6 text-gray-900">
                        Password Confirmation
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password_confimation"
                        name="password_confimation"
                        type="password"
                        value={state.user.password_confirmation}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                        className="focus:outline-none block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-[#4650c0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
