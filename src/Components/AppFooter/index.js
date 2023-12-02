import { Typography } from 'antd'
import React from 'react'

function AppFooter() {
    return (
        <div className='AppFooter'>
            <Typography.Link href='tel:++91 0123456789'>
                +91 0123456789
            </Typography.Link>

            <Typography.Link href='#'>
                Privacy Policy
            </Typography.Link>

            <Typography.Link href='#'>
                Terms of Use
            </Typography.Link>
        </div>
    )
}

export default AppFooter
