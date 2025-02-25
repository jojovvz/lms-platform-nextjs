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
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { verifyUser } from "@/app/actions/verifyUser";

export default function Verify({ token }: { token: string }) {
    const { toast } = useToast();
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);

    const onVerification = async () => {
        setIsLoading(true);
        try {
            await verifyUser({ token });
            toast({
                title: "Success: User Verified",
                description: "You can now login your account.",
            });
            router.push('/login');
        } catch (error) {
            toast({
                title: "Error: User Verification Failed",
                description: JSON.stringify(error),
                variant: 'destructive'
            });
        }
        setIsLoading(false);
    };

    return (
        <div className='w-full overflow-x-hidden flex justify-between md:px-[9vw] px-[1vw]'>
            <div className='w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl -rotate-45'></div>
            <div className='flex justify-center items-center md:w-[35vw]'>
                <Card>
                    <CardHeader>
                        <CardTitle className='text-3xl text-lightblue'>Verify Your Account</CardTitle>
                        <CardDescription className=''>Click on the below button and verify your account, after verifying you can login your courseene account.</CardDescription>
                    </CardHeader>
                    <CardContent className=''>
                    </CardContent>
                    <CardFooter className='w-full flex flex-col items-center gap-2'>
                        <Button
                            content="Verify Account"
                            className='w-full'
                            onClick={onVerification}
                        />
                    </CardFooter>
                </Card>
            </div>
            <div className='w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl rotate-45'></div>
        </div>
    );
}
