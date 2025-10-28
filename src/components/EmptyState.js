import { TEXTS } from '@/app/constants/texts'
import Link from 'next/link'

const EmptyState = ({ title, isViewCard }) => {
    return (
        <div className="container py-5 text-center">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            {isViewCard &&
                <Link href="/" className="btn btn-primary">
                    {TEXTS.BACK_TO_SHOP}
                </Link>
            }
        </div>
    )
}

export default EmptyState