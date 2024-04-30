import { defineStore } from "pinia"

const serializer = {
  serialize: JSON.stringify,
  deserialize: JSON.parse,
}

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter()

  // logged in user
  const token = ref<String>("")
  const userProfile = ref<any>({})

  const toggleDarkMode = () => {
    localStorage.removeItem("authToken")
    router.push("/auth/login")
  }

  return {     token,
  }
})
