'use client'
import { BeatLoader } from "react-spinners"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useEffect, useState } from "react"
const BASE_URL = 'http://3.110.161.150:4000'
import axios from "axios"
import { useRouter } from "next/navigation"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

export default function Form() {
    const [mode,setMode]=useState("Sign In")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [conpassword,setConpassword]=useState("")
    const [message,setMessage]=useState("")
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const signIn = async () => {
        try {
            setLoading(true);
            const response = await axios.post(BASE_URL+"/api/user/login", {
                "user_cred":email,
                "password":password
            })
            const {data,status} = await response
            setMessage(data.message)
            setLoading(false);
            if(status === 200 && data.token){
                localStorage.setItem('token', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ0ZXN0MSIsImVtYWlsIjoia2lyYUBnbWFpbC5jb20iLCJpYXQiOjE3MTQyOTkwMDF9.1ZuTu6j00mouWxrPwrWR8u3Fn9RmLwuqeRE_gBJrR24');
                router.push('/')
            }
        } catch (error) {
            setMessage(error.response.data.message)
        }
    }
    const signUp = async () => {
        try {
            setLoading(true);
            if (password === conpassword) {
                const response = await axios.post(BASE_URL+"/api/user/register", {
                    "username":username,
                    "email":email,
                    "password":password
                })
                const {data,status} = await response
                setMessage(data.message)
                setLoading(false);
                setIsModalOpen(true);
            }
        } catch (error) {
            setMessage(error.response.data.message)
            console.log(error.response.data.message)
            setLoading(false)
        }
    }



  return (
    <Card className="">
        <CardHeader>
            <CardTitle className="text-2xl text-center" >{mode}</CardTitle>
          </CardHeader>
    <Tabs defaultValue="Sign In" className="w-[400px]">
      <TabsList className="grid m-6 grid-cols-2">
        <TabsTrigger value="Sign In" onClick={(e) => {setMode(e.target.value)}}>Sign In</TabsTrigger>
        <TabsTrigger value="Sign Up" onClick={(e) => {setMode(e.target.value)}}>Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="Sign In">
          <CardContent className="space-y-2">
          <div className="space-y-1">
              <Label htmlFor="current" >Email</Label>
              <Input id="current" type="email" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input id="new" type="password"  onChange={(e)=>setPassword(e.target.value)}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="m-auto" onClick={signIn}>{loading ? <BeatLoader color="white" size={10} /> : "Sign In"}</Button>
          </CardFooter>
      </TabsContent>
      <TabsContent value="Sign Up">
          <CardContent className="space-y-2 mt-10">
          <div className="space-y-1">
              <Label htmlFor="current">Username</Label>
              <Input id="current" type="username" onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Email</Label>
              <Input id="new" type="email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input id="new" type="password" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Confirm Password</Label>
              <Input id="new" type="password" onChange={(e)=>setConpassword(e.target.value)}/>
            </div>
          </CardContent>
          <CardFooter>
          <AlertDialog>
            <AlertDialogTrigger>
            <Button className="m-auto"  onClick={signUp}>{loading===true ? <BeatLoader loading={loading} color="white"/>: "Sign Up"}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>{message}</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                {message === "Cheers🍾! User created successfully" ? <AlertDialogAction onClick={() =>{ router.push('/auth'); setMessage("") ;setConpassword(""); setUsername(""); setEmail(""); setPassword(""); }}>Continue</AlertDialogAction> : <AlertDialogAction onClick={() => {router.push('/auth'); setMessage("") }}>Try Again</AlertDialogAction>}  
                </AlertDialogFooter>
            </AlertDialogContent>
                </AlertDialog>
                
                </CardFooter>
      </TabsContent>
    </Tabs>
    </Card>
  )
}



