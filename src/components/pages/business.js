import React from 'react'
import Header from '../layouts/header'
const contents = [
    {content: 'Tư vấn cho thuê nhà ở , nhà kinh doanh, ký túc xá , mua bán bất động sản tại nhật'},
    {content: 'Quản lý lao động'},
    {content: 'Tư vấn chuyển đổi visa , lắp đặt wifi'}
]

export default () => {
    return (
        <div>
            <Header />
            {
                contents.map(({content}, idx) => {
                    return (
                        <p key={idx}>{content}</p>
                    )
                })
            }
        </div>
    )
}