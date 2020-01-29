import React from "react"

import Layout from "../components/Layout"
import Footer from "../components/Footer"

const Confirmation = props => (
  <Layout>
    {/* video explaining the philosophy. Tell them they are now part of the community. Give them a road map.  */}
    {/* Monthly donation program. We provide tools and they pay. $1 = $15 */}

    {/* If they pay Send them login information. Email with side hustles they can do immediately. */}

    <div>PROPS: {props.location.state.message} </div>
    <Footer />
  </Layout>
)

export default Confirmation
