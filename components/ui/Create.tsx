"use client";

import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import Button from "../Button";
import Image from "next/image";
import { IoCloudUploadSharp } from "react-icons/io5";
import { UploadButton } from "@/utils/uploadthing";
import { createCourse } from "@/app/actions/createCourse";
import { useToast } from "@/hooks/use-toast";
import { getCurrentUser } from "@/app/actions/findUser";

const Create = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [discount, setDiscount] = React.useState("");
  const [thumbnail, setThumbnail] = React.useState("");
  const [video, setVideo] = React.useState("");

  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await getCurrentUser();
    const instructor = user?.id;
    const data = { title, description, price, discount, thumbnail, video, instructor };
    try {
      setIsLoading(true);
      await createCourse(data);
      toast({
        title: "Success: Course Created Successfully",
        description: "Your course has been successfully created and is now live.",
      });
    } catch (error) {
      toast({
        title: "Error: User Login Failed",
        description:
          "Something Went Wrong, It seems that user doesnot exists, Email Not Verified or Invalid credentials!",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full p-4 flex flex-col gap-4">
        <div className="w-full flex flex-col gap-1">
          <Label>Course Title</Label>
          <Input placeholder="Full Stack Development" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="w-full flex flex-col gap-1">
          <Label>Course Description</Label>
          <Textarea placeholder="Learn Full Stack Development" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="w-full flex flex-col gap-1">
          <Label>Course Price ($)</Label>
          <Input placeholder="50" type="number" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="w-full flex flex-col gap-1">
          <Label>Dicount (%)</Label>
          <Input placeholder="25" type="number" onChange={(e) => setDiscount(e.target.value)} />
        </div>
        <div className="w-full flex flex-col gap-1">
          <Label>Course Thumbnail</Label>
          <div className="w-full rounded border-[0.5px] border-secondary flex flex-col justify-center items-center py-4">
            {thumbnail ? <Image alt="thumbnail" src={thumbnail} width={500} height={600} /> : ""}
            <div className="w-full flex flex-col items-center gap-2 py-4">
              <IoCloudUploadSharp size={25} />
              <div>
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    console.log("Files: ", res);
                    setThumbnail(res[0].url);
                  }}
                  onUploadError={(error: Error) => {
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <Label>Course Video</Label>
          <div className="w-full rounded border-[0.5px] border-secondary flex flex-col py-4 justify-center items-center">
            {video ? <video src={video} width={500} height={600} /> : ""}
            <div className="w-full flex flex-col items-center gap-2 py-4">
              <IoCloudUploadSharp size={25} />
              <div>
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    console.log("Files: ", res);
                    setVideo(res[0].url);
                  }}
                  onUploadError={(error: Error) => {
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <Button content={"Create Course"} />
      </div>
    </form>
  );
};

export default Create;
