 import { register } from '@/app/auth/actions'
 import Link from 'next/link'
 
 export default function RegisterPage({
   searchParams,
 }: {
   searchParams: { message: string }
 }) {
   return (
     <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
       <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
         <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
           Register Employee
         </h1>
         <form action={register} className="flex flex-col gap-4">
           <label className="text-sm font-medium text-gray-600" htmlFor="email">
             Email
           </label>
           <input
             className="rounded-md border bg-gray-50 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
             name="email"
             type="email"
             placeholder="you@example.com"
             required
           />
           <label className="text-sm font-medium text-gray-600" htmlFor="password">
             Password
           </label>
           <input
             className="rounded-md border bg-gray-50 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
             type="password"
             name="password"
             placeholder="••••••••"
             required
           />
           <button className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
             Sign Up
           </button>
           {searchParams?.message && (
             <p className="mt-4 rounded-md border border-red-300 bg-red-50 p-3 text-center text-sm text-red-600">
               {searchParams.message}
             </p>
           )}
         </form>
         <p className="mt-6 text-center text-sm text-gray-600">
           Already have an account?{' '}
           <Link href="/login" className="font-medium text-blue-600 hover:underline">
             Log In
           </Link>
         </p>
       </div>
     </div>
   )
 }