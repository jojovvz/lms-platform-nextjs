"use client";

import * as React from "react";
import CustomButton from "@/components/Button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FieldValues, useForm } from "react-hook-form";
import Loader from "./Loader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { resetPasswordSchema } from "@/schema/reset";
import PasswordInput from "./PasswordInput";
import { resetPassword } from "@/app/actions/resetPassword";

interface ResetPasswordProps {
    token: string;
}

export default function ResetPassword({ token }: ResetPasswordProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            newPassword: "",
            confirmPassword: "",
        },
    });

    const { toast } = useToast();
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);

    const onResetPasswordSubmit = async (data: FieldValues) => {
        if (data.newPassword !== data.confirmPassword) {
            toast({
                title: "Error: Something Went Wrong!",
                description: "New password and confirm password donot match.",
                variant: "destructive",
            });
            console.log("Data: ", data);
            return;
        }

        setIsLoading(true);
        try {
            const response = await resetPassword(data, token);
            toast({
                title: "Success: Password Reset Successfully!",
                description: "You can now login with this password.",
            });
            router.push("/login");
        } catch (error: any) {
            toast({
                title: "Error: Failed To Reset Password",
                description: error.message,
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="w-full flex justify-between px-[9vw]">
            <div className="w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl -rotate-45"></div>
            <div className="flex justify-center items-center w-[35vw] relative">
                {isLoading && (
                    <div className="absolute inset-0 flex justify-center items-center dark:bg-transparent bg-white/50 z-50">
                        <Loader />
                    </div>
                )}
                <form onSubmit={handleSubmit(onResetPasswordSubmit)}>
                    <Card className="md:w-[30vw] w-full z-0">
                        <CardHeader>
                            <CardTitle className='text-3xl text-lightblue'>
                                Reset Your Password
                            </CardTitle>
                            <CardDescription>
                                Enter a new password to reset your account.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">New Password</Label>
                                    <PasswordInput
                                        register={register("newPassword") as any}
                                    />
                                    {errors.newPassword && (
                                        <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
                                    )}
                                </div>

                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                                    <PasswordInput
                                        register={register("confirmPassword") as any}
                                    />
                                    {errors.confirmPassword && (
                                        <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col items-center gap-2">
                            <CustomButton
                                content="Reset Password"
                                className="w-full"
                                type="submit"
                            />
                        </CardFooter>
                    </Card>
                </form>
            </div>
            <div className="w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl rotate-45"></div>
        </div>
    );
}
