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
import Link from 'next/link';
import PasswordInput from './PasswordInput';
import Image from 'next/image';
import Google from '@/public/google.png';
import { FieldValues, useForm } from 'react-hook-form';
import { registerSchema } from '@/schema/register';
import { zodResolver } from '@hookform/resolvers/zod';
import Loader from './Loader';
import { createUser } from '@/app/actions/createUser';
import { toast } from '@/hooks/use-toast';
import { socialSignIn } from '@/app/actions/socialLogin';

const Register = () => {
    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    const [isLoading, setIsLoading] = React.useState(false);

    const onSubmit = async (data: FieldValues) => {
        setIsLoading(true);
        try {
            await createUser(data);
            toast({
                title: "Success: User Created Successfully!",
                description: "User has been created successfully, verify your account, we have sent you an email.",
            });
            resetField("email");
            resetField("name");
            resetField("password");
        } catch (error: any) {
            toast({
                title: "Error: Creating User",
                description: error.message,
                variant: 'destructive'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full overflow-x-hidden flex justify-between md:px-[9vw] px-[1vw] relative">
            <div className="w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl -rotate-45"></div>
            <div className="relative flex justify-center items-center md:w-[35vw]">
                {isLoading && (
                    <div className="absolute inset-0 flex justify-center items-center dark:bg-transparent bg-white/50 z-50">
                        <Loader />
                    </div>
                )}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl text-lightblue">Register Your Account</CardTitle>
                        <CardDescription>
                            Join us by filling out the form below. Sign up to access exclusive features and get started in just a few steps.
                        </CardDescription>
                    </CardHeader>
                    <div className="w-full flex justify-center px-4 pt-2 pb-2">
                        <Button
                            content={
                                <div className="flex justify-center items-center gap-2">
                                    <Image alt="" src={Google} width={25} height={25} />
                                    Sign With Google
                                </div>
                            }
                            secondary
                            className='w-full'
                            onClick={async () => await socialSignIn("google")}
                        />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent className="flex flex-col gap-2">
                            <div className="w-full flex justify-center text-lg font-semibold">OR</div>
                            <div className="w-full flex flex-col gap-1">
                                <Label>Name</Label>
                                <Input type="text" placeholder="ABC Name" {...register('name')} />
                                {errors.name && (
                                    <p className="text-red-600 text-sm">{errors.name.message}</p>
                                )}
                            </div>
                            <div className="w-full flex flex-col gap-1">
                                <Label>Email</Label>
                                <Input type="email" placeholder="abc@gmail.com" {...register('email')} />
                                {errors.email && (
                                    <p className="text-red-600 text-sm">{errors.email.message}</p>
                                )}
                            </div>
                            <div className="w-full flex flex-col gap-1">
                                <Label>Password</Label>
                                <PasswordInput register={register("password") as any} />
                                {errors.password && (
                                    <p className="text-red-600 text-sm">{errors.password.message}</p>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter className="w-full flex flex-col items-center gap-2">
                            <Button
                                content="Register"
                                className="w-full"
                                type="submit"
                                disabled={isLoading}
                                disabledText="Registering..."
                            />
                            <div>
                                Already have an account?{' '}
                                <Link href="/login">
                                    <span className="font-semibold text-lightblue cursor-pointer">Login</span>
                                </Link>
                            </div>
                        </CardFooter>
                    </form>
                </Card>
            </div>
            <div className="w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl rotate-45"></div>
        </div>
    );
};

export default Register;
