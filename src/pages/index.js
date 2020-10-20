import React from "react"
import { Container, Content, ContentCard, FeatureImage } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard date="October 20, 2020" title="Discover Japan" excerpt="I'm baby chicharrones wolf portland salvia lyft. Migas put a bird on it brunch, man braid before they sold out air plant chia gluten-free gochujang pinterest thundercats taiyaki williamsburg hella. Activated charcoal jean shorts keffiyeh..." slug="/test" />
      </Content>
    </Container>
  )
}

export default IndexPage