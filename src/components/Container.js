import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer } from "../components"

export const Container = ({ children }) => {
    //The Container of the all page
    return (
        <ContainerWrapper>
            <Nav />
            {children}
            <Footer />
        </ContainerWrapper>
    )
}
