"use client";

import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Button from "../Button";
import { Label } from "./label";
import { Input } from "./input";
import { FieldValues, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import { onBoardingSchema } from "@/schema/onboarding";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { LucideImagePlus } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { onboardUser } from "@/app/actions/onboarding";

const Onboarding = ({ id }: { id: string }) => {
    const {
        control,
        register,
        handleSubmit,
        setValue,
        resetField,
        formState: { errors },
    } = useForm({
        defaultValues: {
            bio: "",
            phone: "",
            image: "",
        },
        resolver: zodResolver(onBoardingSchema),
    });

    const [isLoading, setIsLoading] = React.useState(false);
    const { toast } = useToast();
    const router = useRouter();
    const [imageUrl, setImageUrl] = React.useState<string>('');

    const onSubmitForm = async (data: FieldValues) => {
        setIsLoading(true);
        try {
            await onboardUser({ ...data, userId: id }, imageUrl);
            toast({
                title: "Success: User Information Set Successfully",
                description: "Now you can access your dashboard and buy your favourite courses.",
            });
            resetField("bio");
            resetField("phone");
            resetField("image");

            router.push('/dashboard');
        } catch (error: any) {
            console.error("Login error:", error);
            toast({
                title: "Error: Failed To Set Information",
                description:
                    `Something Went Wrong, ${error}`,
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleImageUpload = (result: any) => {
        if (result?.info?.secure_url) {
            setImageUrl(result.info.secure_url);
            setValue("image", result.info.secure_url);
        }
    };

    console.log('Image: ', imageUrl);

    return (
        <div className="w-full overflow-x-hidden flex justify-between md:px-[9vw] px-[1vw]">
            <div className="w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl -rotate-45"></div>
            <div className="flex justify-center items-center md:w-[35vw] relative">
                {isLoading && (
                    <div className="absolute inset-0 flex justify-center items-center dark:bg-transparent bg-white/50 z-50">
                        <Loader />
                    </div>
                )}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl text-lightblue">
                            Complete Your Account
                        </CardTitle>
                        <CardDescription>
                            Complete your account information by filling below credentials and
                            access your dashboard.
                        </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <CardContent className="flex flex-col gap-2">
                            {/* Bio Input */}
                            <div className="w-full flex flex-col gap-1">
                                <Label>Bio</Label>
                                <Input
                                    type="text"
                                    placeholder="Programmer and Agentic AI Developer"
                                    {...register("bio")}
                                />
                                {errors.bio && (
                                    <p className="text-red-600 text-sm">{errors.bio.message}</p>
                                )}
                            </div>

                            {/* Phone Input */}
                            <div className="w-full flex flex-col gap-1">
                                <Label>Phone Number</Label>
                                <Controller
                                    name="phone"
                                    control={control}
                                    render={({ field }) => (
                                        <PhoneInput
                                            country={"pk"}
                                            value={field.value}
                                            onChange={(value) => field.onChange(value)}
                                            inputClass="w-full"
                                            inputStyle={{
                                                width: "100%",
                                            }}
                                        />
                                    )}
                                />
                                {errors.phone && (
                                    <p className="text-red-600 text-sm">{errors.phone.message}</p>
                                )}
                            </div>
                            {/* Profile Image */}
                            <div className="w-full flex flex-col gap-1">
                                <Label>Profile Image</Label>
                                <div className="w-full h-[10vw] border rounded shadow-sm flex justify-center items-center">
                                    <CldUploadWidget
                                        uploadPreset="courseene"
                                        onSuccess={handleImageUpload}
                                    >
                                        {({ open }) => (
                                            <LucideImagePlus
                                                size={30}
                                                onClick={() => open()}
                                                className="cursor-pointer"
                                            />
                                        )}
                                    </CldUploadWidget>
                                </div>
                                <div>
                                    {imageUrl && (
                                        <div className="mt-2">
                                            <Image
                                                src={imageUrl}
                                                alt="Uploaded"
                                                width={400}
                                                height={350}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>

                        {/* Submit Button */}
                        <CardFooter className="w-full flex flex-col items-center gap-2">
                            <Button
                                content="Continue"
                                className="w-full"
                                type="submit"
                                disabled={isLoading}
                                disabledText="Processing..."
                            />
                        </CardFooter>
                    </form>
                </Card>
            </div>
            <div className="w-[12vw] -z-10 h-[30vw] bg-darkblue blur-[12vw] rounded-3xl rotate-45"></div>
        </div>
    );
};

export default Onboarding;
