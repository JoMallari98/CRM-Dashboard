import React from 'react'
import styled from 'styled-components'

const SmallBadge: React.FC = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
const Wrapper = styled.span`
    background: rgba(103, 129, 255, 0.17);
    border-radius: 4px;
    width: 36px;
    height: 16px;
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
    color: #4F6BF0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default SmallBadge;