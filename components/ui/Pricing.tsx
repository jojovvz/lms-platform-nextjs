import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Button from '../Button'
import { FaCheckCircle } from 'react-icons/fa'

interface PricingProps {
    title: string,
    description: string,
    content: string[],
    price: string
}

const PricingComp = ({ title, description, content, price }: PricingProps) => {
    return (
        <Card className='hover:bg-muted cursor-pointer'>
            <CardHeader>
                <CardTitle className='text-2xl'>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <div className='text-4xl font-semibold'>{price} /year</div>
                <div className='flex flex-col gap-3'>
                    <div className='font-semibold'>What's included</div>
                    <div className='flex flex-col gap-1'>
                        {
                            content.map((item, index) => (
                                <div
                                    key={index}
                                    className='flex items-center gap-2'
                                >
                                    <div><FaCheckCircle color='#2f29c4' /></div>
                                    <div>{item}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    content="Subscribe Now"
                />
            </CardFooter>
        </Card>

    )
}

export default PricingComp