'use client'
import { useState } from 'react'

export default function Room() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = async () => {
		console.log('Нажата кнопка GO')
		try {
			const response = await fetch('http://localhost:3001/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			})

			console.log('Ответ от сервера получен', response)

			const data = await response.json()
			if (response.ok) {
				console.log('Login successful', data)
			} else {
				console.log('Login failed', data)
			}
		} catch (error) {
			console.error('Ошибка при логине', error)
		}
	}

	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='flex flex-col items-center justify-center'>
				<div className='text-5xl'>SIGN IN</div>
				<input
					type='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					className='my-2 rounded-md border-white bg-transparent border-2'
					placeholder='Email'
				/>
				<input
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					className='my-2 rounded-md border-white bg-transparent border-2'
					placeholder='Password'
				/>
				<button
					onClick={handleLogin}
					className='my-2 rounded-md border-white bg-transparent border-2 px-6'
				>
					GO
				</button>
			</div>
		</div>
	)
}
// go
