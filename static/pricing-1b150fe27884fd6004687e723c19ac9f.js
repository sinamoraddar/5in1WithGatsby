import React from "react"
import Layout from "../components/Layout/layout"
import PricingComponent from "../components/Pricing/Pricing"
import SEO from "../components/seo"
// import Menu from "../components/Menu/Menu"
export default () => (
  <Layout>
    <SEO title="Pricing component with toggle coding challenge" />
    <PricingComponent />
    {/* <Menu /> */}
  </Layout>
)
