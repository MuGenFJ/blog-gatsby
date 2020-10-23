import React from "react"
import { ContentWrapper } from "../elements"

export const Content = ({ children }) => {
    return (
        //The Box of all the Contents 
        <ContentWrapper>
            {children}
        </ContentWrapper>
    )
}