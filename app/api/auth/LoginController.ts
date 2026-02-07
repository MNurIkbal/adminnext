// "use client"

// import { signIn } from "next-auth/react"

// export async function loginController(
//   e: React.FormEvent<HTMLFormElement>
// ) {
//   e.preventDefault()

//   const form = e.currentTarget
//   const email = (form.email as HTMLInputElement).value
//   const password = (form.password as HTMLInputElement).value

//   await signIn("credentials", {
//     email,
//     password,
//     redirect: true,
//     callbackUrl: "/dashboard",
//   })
// }

"use client"

import { signIn } from "next-auth/react"

export const loginController = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault()

  const form = e.currentTarget

  await signIn("credentials", {
    email: (form.email as HTMLInputElement).value,
    password: (form.password as HTMLInputElement).value,
    redirect: true,
    callbackUrl: "/page/dashboard",
  })
}
