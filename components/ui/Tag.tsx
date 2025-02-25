import { CheckCircle, TrendingUp } from 'lucide-react'
import React from 'react'

interface TagProps { tag: 'trending' | 'verified' }

const Tag = ({ tag }: TagProps) => {
    return (
        <div>
            {
                tag == "trending" ? (
            <div className="flex items-center space-x-1">
                <TrendingUp size={16} />
                <span className="text-xs font-semibold">Trending</span>
            </div>
            ) :  (
            <div className="flex items-center space-x-1">
                <CheckCircle size={16} />
                <span className="text-xs font-semibold">Verified</span>
            </div>
            )
    }
        </div>
    )
}

export default Tag