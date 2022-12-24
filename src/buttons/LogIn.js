import { useContext } from "react"
import AuthContext from "../context/auth"

export default function LogIn() {
  const { login } = useContext(AuthContext)

  return (
    <>
      <button
        onClick={login}
        className="bg-white py-2 px-6 rounded text-base hover:bg-blue-500  text-gray-800 transition-all duration-500  shadow-lg hover:text-white"
      >
        Zaloguj się
      </button>
    </>
  )
}
