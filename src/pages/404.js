// import React from "react"
// import { graphql } from "gatsby"
// import { Container, Content, FeatureImage } from "../components"
// import { H1 } from "../elements"

// const notFound = ({ data }) => {
//     const featureImage = data.imageSharp.fixed

//     return (
//         <Container>
//             <FeatureImage fixed={featureImage} />
//             <Content>
//                 <H1 textAlign="center" margin="0 0 1rem 0">Sorry something went wrong... your current page cannot be found. Try another please.</H1>
//             </Content>
//         </Container>
//     )
// }

// export default notFound

// export const notFoundQuery = graphql(`
//     imageSharp(fixed: { originalName: {eq: "shiba.jpg"}}) {
//         fixed {
//             ...GatsbyImageSharpFixed
//         }
//     }
// `)