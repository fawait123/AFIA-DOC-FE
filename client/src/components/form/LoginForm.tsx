import React, { useState } from 'react'

interface LoginFormProps {
    visible: boolean;
}

interface IState {
    user: {
        email: string,
        password: string,
    }
}

export default function LoginForm({ visible }: LoginFormProps) {

    const [state, setState] = useState<IState>({
        user: {
            email: "",
            password: "",
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
                Login
            </h2>
        </div>
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
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
                        autoComplete="email"
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
                        <div className="text-sm">
                        <a href="#" className="font-semibold text-[#4650c0] hover:text-[#4650c0]">
                            Lupa password?
                        </a>
                        </div>
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
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-[#4650c0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
