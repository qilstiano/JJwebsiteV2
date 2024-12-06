'use client';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { contatcUsSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ContactUs() {
  const form = useForm({
    resolver: zodResolver(contatcUsSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      subject: '',
      message: '',
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
    <main className="w-full pt-8 flex flex-col bg-gradient-to-r from-light-violet to-extra-light-violet min-h-screen">
      <section className="bg-[url('/images/JoinUs/ContactUsMasthead.jpg')] bg-cover bg-center relative">
        <div className='bg-[#674C93AD] absolute top-0 bottom-0 right-0 left-0 z-20'></div>
        <div className='max-w-6xl mx-auto relative z-30 min-h-[350px] flex flex-col justify-center px-5'>
          <h2 className='font-bold text-white text-7xl'>Contact Us</h2>
        </div>
      </section>

      <section className='max-w-6xl mx-auto flex gap-5 md:gap-16 items-start py-8 flex-col md:flex-row px-5'>
        <div className='flex flex-col gap-4 md:gap-6 items-start w-full md:w-2/5'>
          <h6 className='text-white text-3xl font-bold leading-tight capitalize'>Got any questions?<br/>Let’s chat!</h6>
          <p className='text-white text-lg font-normal'>Have a quick question? Check our FAQs for a quick answer</p>
          <Image alt="Join Us Image" className='w-full md:w-auto' src={`/images/JoinUs/JoinUsImage.png`} width={390} height={390} />
          <p className='text-white text-3xl font-bold uppercase hidden md:block'>Our Socials:</p>
          <div className='md:flex gap-5 hidden'>
            <a href='' target='_blank' rel='noreferrer noopener'>
              <Image alt="LinkedIn" className='' src={`/images/JoinUs/JoinUs_LinkedIn.png`} width={60} height={60} />
            </a>
            <a href='' target='_blank' rel='noreferrer noopener'>
              <Image alt="Instagram" className='' src={`/images/JoinUs/JoinUs_Instagram.png`} width={60} height={60} />
            </a>
            <a href='' target='_blank' rel='noreferrer noopener'>
              <Image alt="Facebook" className='' src={`/images/JoinUs/JoinUs_Facebook.png`} width={60} height={60} />
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-4 w-full md:w-3/5'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-2'>
              <p className='text-[#674C93] text-lg font-bold uppercase'>Call us:</p>
              <p className='text-white text-lg font-bold'>+65 8292 8032</p>
            </div>
            <div className='flex flex-col gap-2 sm:mr-20 md:mr-0 lg:mr-20'>
              <p className='text-[#674C93] text-lg font-bold uppercase'>Email us:</p>
              <p className='text-white text-lg font-bold'>info@jalanjourney.com</p>
            </div>
          </div>
          <p className='text-white text-base font-normal'>Or drop us a message below and we will get back to you as soon as we can!</p>
          <div className='bg-[#674C93] p-3 rounded-sm'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full justify-center flex flex-col gap-3 py-2"
              >
                <div className='flex gap-3'>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="grow">
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="First Name*"
                            className="py-2 h-auto"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="grow">
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="First Name*"
                            className="py-2 h-auto"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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
                          className="py-2 h-auto"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Phone Number*"
                          className="py-2 h-auto"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Subject*"
                          className="py-2 h-auto"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          type=""
                          placeholder="Type your message!"
                          className="py-2 h-auto"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="text-white bg-dark-green border-white border-[3px] mx-auto px-7">
                  Get in Touch!
                </Button>
              </form>
            </Form>
          </div>
          <p className='text-white text-center text-3xl font-bold uppercase mt-5 md:hidden'>Our Socials:</p>
          <div className='flex gap-5 mx-auto md:hidden'>
            <a href='' target='_blank' rel='noreferrer noopener'>
              <Image alt="LinkedIn" className='' src={`/images/JoinUs/JoinUs_LinkedIn.png`} width={60} height={60} />
            </a>
            <a href='' target='_blank' rel='noreferrer noopener'>
              <Image alt="Instagram" className='' src={`/images/JoinUs/JoinUs_Instagram.png`} width={60} height={60} />
            </a>
            <a href='' target='_blank' rel='noreferrer noopener'>
              <Image alt="Facebook" className='' src={`/images/JoinUs/JoinUs_Facebook.png`} width={60} height={60} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
