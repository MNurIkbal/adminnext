import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getServerSession()

  if (session) {
    redirect("/page/dashboard")
  }

  redirect("/auth")

}
