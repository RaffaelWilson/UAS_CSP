'use server'

 import { createClient } from '@/utils/supabase/server'
 import { revalidatePath } from 'next/cache'
 import { redirect } from 'next/navigation'
 
 export async function login(formData: FormData) {
   const email = formData.get('email') as string
   const password = formData.get('password') as string
   const supabase = createClient()
 
   const { error } = await supabase.auth.signInWithPassword({
     email,
     password,
   })
 
   if (error) {
     return redirect(`/login?message=${encodeURIComponent(error.message)}`)
   }
 
   revalidatePath('/', 'layout')
   redirect('/dashboard')
 }
 
 export async function register(formData: FormData) {
   const email = formData.get('email') as string
   const password = formData.get('password') as string
   const supabase = createClient()
 
   const { error } = await supabase.auth.signUp({
     email,
     password,
   })
 
   if (error) {
     return redirect(`/register?message=${encodeURIComponent(error.message)}`)
   }
 
   redirect('/login?message=Registration successful. Please log in.')
 }
 
 export async function logout() {
     const supabase = createClient()
     await supabase.auth.signOut()
     redirect('/login')
 }