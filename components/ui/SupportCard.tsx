import React from 'react'
import { IconType } from 'react-icons'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface SupportCardProps {
    icon: IconType,
    title: string,
    description: string
}

const SupportCard: React.FC<SupportCardProps> = ({
    title,
    description,
    icon: Icon
}) => {
    return (
        <Card className='flex flex-col items-center'>
            <CardHeader className='flex flex-col items-center'>
                <CardTitle><Icon size={25} color='#fff' /></CardTitle>
                <CardDescription className='text-xl font-semibold'>{title}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className='text-center'>{description}</p>
            </CardContent>
        </Card>

    )
}

export default SupportCard