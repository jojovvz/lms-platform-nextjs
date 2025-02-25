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
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetEmailSchema } from '@/schema/login';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import Loader from './Loader';
import { resetEmail } from '@/app/actions/reset-email';

const Forgot = () => {
    const { register, handleSubmit, resetField, formState: { errors } } = useForm({
        defaultValues: { email: '' },
        resolver: zodResolver(resetEmailSchema),
    });
    const [isLoading, setIsLoading] = React.useState(false);
    const { toast } = useToast();

    const onSubmitForm = async (data: FieldValues) => {
        setIsLoading(true);
        try {
            await resetEmail(data);
            toast({
                title: "Success: Password Reset Email Successfully",
                description: "Email has been sent to your account check your email and reset your password.",
            });
            resetField("email");
        } catch (error: any) {
            console.error("Login error:", error);
            toast({
                title: "Error: Password Reset Email Failed",
                description:
                    "Something Went Wrong, It seems that user doesnot exists or Invalid credentials!",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='w-full flex justify-between px-[9vw]'>
            <div className='w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl -rotate-45'></div>
            <div className='flex justify-center items-center md:w-[35vw] relative'>
                {isLoading && (
                    <div className="absolute inset-0 flex justify-center items-center dark:bg-transparent bg-white/50 z-50">
                        <Loader />
                    </div>
                )}
                <Card>
                    <CardHeader>
                        <CardTitle className='text-3xl text-lightblue'>Forget Your Password</CardTitle>
                        <CardDescription>Enter your email, we will sent you an email and forgot your password.</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <CardContent className='flex flex-col gap-2'>
                            <div className='w-full flex flex-col gap-1'>
                                <Label>Email</Label>
                                <Input
                                    type='email'
                                    placeholder='abc@gmail.com'
                                    {...register("email")}
                                />
                                {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                            </div>
                        </CardContent>
                        <CardFooter className='w-full flex flex-col items-center gap-2'>
                            <Button
                                content={isLoading ? "Loading..." : "Forgot"}
                                className='w-full'
                                type='submit'
                                disabled={isLoading}
                                disabledText='Processing...'
                            />
                        </CardFooter>
                    </form>
                </Card>
            </div>
            <div className='w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl rotate-45'></div>
        </div>
    );
}

export default Forgot;
