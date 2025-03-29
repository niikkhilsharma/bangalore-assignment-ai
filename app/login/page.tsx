import { LoginForm } from '@/components/login-form'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
	const session = await auth()
	const user = session?.user

	if (user) {
		redirect('/')
	}

	return (
		<div className="container flex min-h-screen flex-col items-center justify-center mx-auto">
			<div className="mx-auto w-full max-w-md space-y-6">
				<div className="space-y-2 text-center">
					<h1 className="text-3xl font-bold">Login</h1>
					<p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account</p>
				</div>
				<LoginForm />
			</div>
		</div>
	)
}
