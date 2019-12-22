import React from "react"
import { Link } from "gatsby"
export default ({ page, data }) => {
  return (
    <div>
      {page}
      {/* <ul> */}
      {data.nodes.map(({ name /* , role  */ }) => (
        <Link key={name} to={`debuildex/${page}/${name}`}>
          <li>
            name:{name} {/* role:{role} */}
          </li>
        </Link>
      ))}
      {/* </ul> */}
    </div>
  )
}
