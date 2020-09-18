import React from 'react'
import './link.scss'

const Link = ({title, onClick}) => (
    <p className="link" onClick={onClick}>{title}</p>
)

export default Link
