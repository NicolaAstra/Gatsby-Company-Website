import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { FaJoint } from "react-icons/fa"

export default () => (
  <>
    <Layout>
      Hello world! <Link to="/blog/"> Blog page</Link>
      <FaJoint />
    </Layout>
  </>
)
