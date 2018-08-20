import React from 'react'

const UserControl = ({user}) => (
    <div>
        {user.first_name} {user.last_name}
    </div>
)

export default UserControl