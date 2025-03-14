import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { FaGoogle, FaGithub, FaDiscord } from 'react-icons/fa';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="flex flex-col items-center space-y-6 bg-gray-900 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white">Welcome Back!</h2>
                <p className="text-gray-400">Log in to continue your journey with us.</p>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-500">
                        {status}
                    </div>
                )}

                <div className="w-full flex flex-col space-y-3">
                    <a href="/auth/google/redirect" className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                        <FaGoogle className="mr-2" /> Sign in with Google
                    </a>
                    <a href="/auth/github/redirect" className="flex items-center justify-center w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                        <FaGithub className="mr-2" /> Sign in with GitHub
                    </a>
                    <a href="/auth/discord/redirect" className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                        <FaDiscord className="mr-2" /> Sign in with Discord
                    </a>
                </div>

                <div className="flex items-center w-full text-gray-500 mt-4">
                    <hr className="flex-grow border-gray-700" />
                    <span className="px-2">or</span>
                    <hr className="flex-grow border-gray-700" />
                </div>

                <form onSubmit={submit} className="w-full">
                    <div>
                        <InputLabel htmlFor="email" value="Email" className="text-gray-400" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full bg-gray-800 text-white border-gray-700"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" className="text-gray-400" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full bg-gray-800 text-white border-gray-700"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4 block">
                        <label className="flex items-center text-gray-400">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked || false)
                                }
                            />
                            <span className="ms-2 text-sm">Remember me</span>
                        </label>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm text-blue-400 hover:text-blue-500"
                            >
                                Forgot your password?
                            </Link>
                        )}
                        <PrimaryButton className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                </form>

                <div className="mt-2 text-center w-full">
                    <p className="text-gray-400 text-sm">
                        Don't have an account?{' '}
                        <Link
                            href={route('register')}
                            className="text-blue-400 hover:text-blue-500 font-medium"
                        >
                            Register now
                        </Link>
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
}
