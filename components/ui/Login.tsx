"use client";

import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Button from '../Button';
import { Label } from './label';
import { Input } from './input';
import PasswordInput from './PasswordInput';
import Link from 'next/link';
import Image from 'next/image';
import Google from '@/public/google.png';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schema/login';
import { loginUser } from '@/app/actions/loginUser';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import Loader from './Loader';

const Login = () => {
    const { register, handleSubmit, resetField, formState: { errors } } = useForm({
        defaultValues: { email: '', password: '' },
        resolver: zodResolver(loginSchema),
    });
    const [isLoading, setIsLoading] = React.useState(false);
    const { toast } = useToast();
    const router = useRouter();

    const onSubmitForm = async (data: FieldValues) => {
        setIsLoading(true);
        try {
            await loginUser(data);
            toast({
                title: "Success: User Logged In Successfully",
                description: "Continue filling your further information, and access your dashboard.",
            });
            resetField("email");
            resetField("password");

            router.push('/dashboard');
        } catch (error: any) {
            console.error("Login error:", error);
            toast({
                title: "Error: User Login Failed",
                description:
                    "Something Went Wrong, It seems that user doesnot exists, Email Not Verified or Invalid credentials!",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='w-full overflow-x-hidden flex justify-between md:px-[9vw] px-[1vw]'>
            <div className='w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl -rotate-45'></div>
            <div className='flex justify-center items-center md:w-[35vw] relative'>
                {isLoading && (
                    <div className="absolute inset-0 flex justify-center items-center dark:bg-transparent bg-white/50 z-50">
                        <Loader />
                    </div>
                )}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-3xl text-lightblue'>Login Your Account</CardTitle>
                        <CardDescription>Access your account by entering your registered email and password below. Stay connected and manage your activities with ease.</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <CardContent className='flex flex-col gap-2'>
                            <Button
                                content={<div className='flex justify-center items-center gap-2'>
                                    <Image alt='' src={Google} width={25} height={25} />
                                    Sign With Google
                                </div>}
                                secondary
                            />
                            <div className='w-full flex justify-center text-lg font-semibold'>OR</div>
                            <div className='w-full flex flex-col gap-1'>
                                <Label>Email</Label>
                                <Input
                                    type='email'
                                    placeholder='abc@gmail.com'
                                    {...register("email")}
                                />
                                {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                            </div>
                            <div className='w-full flex flex-col gap-1'>
                                <Label>Password</Label>
                                <PasswordInput register={register("password") as any} />
                                {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
                            </div>
                            <Link href={"/forgot"} className='cursor-pointer hover:underline'>Forgot Password?</Link>
                        </CardContent>
                        <CardFooter className='w-full flex flex-col items-center gap-2'>
                            <Button
                                content={isLoading ? "Loading..." : "Login"}
                                className='w-full'
                                type='submit'
                                disabled={isLoading}
                                disabledText='Authenticating...'
                            />
                            <div>Don't have an account yet? <Link href="/register"><span className='font-semibold text-lightblue cursor-pointer'>Register</span></Link></div>
                        </CardFooter>
                    </form>
                </Card>
            </div>
            <div className='w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl rotate-45'></div>
        </div>
    );
}

export default Login;
