import React from 'react'
import {Card,CardContent,CardActions} from '@mui/material'
import Link from 'next/link'
const UpcomingEventCard:React.FC = () => {
    return (
        <Card>
            <CardContent>
                Upcoming Event
            </CardContent>
            <CardActions>
                <Link href="#">Check more</Link>
            </CardActions>
        </Card>
    )
}
export default UpcomingEventCard