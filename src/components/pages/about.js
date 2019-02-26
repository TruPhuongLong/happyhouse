import React from 'react'
import Header from '../layouts/header'

const contents = [
    { name: 'Tên công ty', content: 'Công ty cổ phần Happy House' },
    { name: 'Ngày thành lập', content: 'Công ty cổ phần Happy House' },
    { name: 'Vốn điều lệ', content: 'Công ty cổ phần Happy House' },
    { name: 'Cán bộ', content: 'Công ty cổ phần Happy House' },
    { name: 'Địa chỉ', content: 'Công ty cổ phần Happy House' },
    { name: 'Số điện thoại', content: 'Công ty cổ phần Happy House' },
    { name: 'Số lượng nhân viên', content: 'Công ty cổ phần Happy House' },
    { name: 'Giấy phép hoạt động các lĩnh vực', content: 'Công ty cổ phần Happy House' },
    { name: 'Bằng cấp và các loại giấy phép khác', content: 'Công ty cổ phần Happy House' },
    { name: 'Sơ đồ tổ chức', content: 'Công ty cổ phần Happy House' },

]

export default () => {
    return (
        <div>
            <Header />
            {
                contents.map(({ name, content }, idx) => {
                    return (
                        <p>{name} : {content}</p>
                    )
                })
            }

        </div>
    )
}