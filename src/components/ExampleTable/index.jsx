import React from 'react'
import { TrHeaderBox } from '../../global_styles/styles'

export const TableTHHeader = ({ text, iconc, colspan, rowspan }) => {
    return (
        <th colSpan={colspan} rowSpan={rowspan}>
            <TrHeaderBox>
                <span className="text">{text}</span>
                <span className="iconc">{iconc}</span>
            </TrHeaderBox>
        </th>
    )
}