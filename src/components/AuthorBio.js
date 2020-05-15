import React from "react"
import GatsbyImageWithIEPolyfill from "gatsby-image/withIEPolyfill"
import { Link } from "gatsby"
import { normalizePath } from "../utils/normalize-path"

const AuthorBio = ({ author }) => {
  const description = author?.description ? author.description.replace(/(\r\n|\n|\r)/gm, "<br/>") : ""

  return (
    <div className="author-bio">
      <div className="author-title-wrapper">
        <div className="author-avatar vcard">
          <div className="avatar avatar-160 wp-user-avatar wp-user-avatar-160 alignnone photo">
            {author?.avatar?.imageFile?.childImageSharp && (
              <GatsbyImageWithIEPolyfill
                fixed={author.avatar.imageFile.childImageSharp.fixed}
                objectFit="cover"
                objectPosition="50% 50%"
                className="avatar"
              />
            )}
          </div>
        </div>
        <h2 className="author-title heading-size-4">By {author.name}</h2>
      </div>
      <div className="author-description">
        <div dangerouslySetInnerHTML={{ __html: description }} />

        <Link
          className="author-link"
          to={normalizePath(author.uri)}
          rel="author"
        >
          View Archive <span aria-hidden="true">→</span>{" "}
        </Link>
      </div>
    </div>
  )
}

export default AuthorBio
