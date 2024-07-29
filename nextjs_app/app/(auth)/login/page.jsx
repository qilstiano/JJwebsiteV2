'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { UserAuth } from '../../../context/AuthContext';
import Image from 'next/image';
import google_logo from '../../../public/google_logo.png';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { loginSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  // const { googleSignIn } = UserAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error);
        throw new Error(errorData.error || 'Failed to login');
      }
      console.log(response)
      toast.success('Login successful');
      //need to dispatch resopnse into redux store
      router.push("/")
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-[#8772A9] pt-20 relative items-center flex flex-col">
      <Image alt="Jalan Journey logo" className='absolute bottom-0 mx-auto' src={"/images/Login/Signin_Bottom.png"} width={200} height={200}></Image>
      <Card className="bg-[#674C93]/70 p-6 pt-0 rounded-lg xl:w-1/4 md:w-1/2 max-w-[450px] border-0 relative z-10">
        <CardHeader>
          <div className="w-full flex flex-col gap-y-3 items-center justify-center text-white">
            <Image alt="Jalan Journey logo" className='' src={"/images/Login/Signin_Logo.png"} width={125} height={125}></Image>
            <h1 className="text-4xl font-semibold">Welcome Back!</h1>
            <p className="text-sm">Time to continue Your Journey</p>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center pb-1">
          <p className="text-xs text-white mt-2">Log In to Continue</p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3 w-full justify-center flex flex-col"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Email*"
                        className="mt-3 py-2 h-auto"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password*"
                        className="py-2 h-auto"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link href="/forget-password" className="underline text-white text-xs font-bold ml-1">Forgot password?</Link>
              <Button type="submit" className="text-white bg-dark-green border-white border-[3px] mx-auto px-7">
                Log In
              </Button>
            </form>
          </Form>
          <p className="my-3 text-white text-center text-xs">--------- OR ---------</p>
          <Button
            variant="outline"
            className="rounded-full mb-5 border border-blue-500 hover:bg-blue-50 font-semibold py-1 px-8 transition-colors duration-300"
            onClick={handleSignIn}
          >
          <Image
            src={google_logo}
            width={20}
            height={20}
            className="mr-1"
            alt='google logo'
          />
            Sign in with Google
          </Button>
        </CardContent>
        <div className="text-center text-xs text-white flex-none mb-5">
          <Link href="/signup">Don't have an account?<span className="underline font-bold ml-1">Register</span></Link>
        </div>
      </Card>
      <p className="text-xs text-white uppercase relative z-10 font-bold mt-10 mb-6">© 2024 Jalan Journey. All Rights Reserved.</p>
    </section>
  );
};

export default LoginPage;
