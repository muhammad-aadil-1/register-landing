import React from "react"
import { useSelector } from "react-redux"
import { Link, RichText, Date } from "prismic-reactjs"

// import { Link } from "gatsby"
// import { IMAGES } from '../../constants';

import { Link as PrismicLink } from "prismic-reactjs"
import { Elements } from "prismic-richtext"


const Stats = ({ data = [], linksTarget = "_self" }) => {
  const language = useSelector(state => state.language)
  const isRtl = language === "ar-ae"

  const addSpans = (txt, spans) => {
    let tmpText = ""
    let previousSpan = null
    if (!spans || spans.length === 0) return txt
    spans.map(obj => {
      let start = 0
      if (previousSpan) {
        start = previousSpan.end
      }
      tmpText += txt.substring(start, obj.start)

      if (obj.type === "strong") {
        tmpText += `<strong>${txt.substring(obj.start, obj.end)}</strong>`
      }
      if (obj.type === "hyperlink") {
        tmpText += `<a href="${
          obj.data.url
        }" target="${linksTarget}">${txt.substring(obj.start, obj.end)}</a>`
        // tmpText +=  render.anchor( txt.substr(obj.start, obj.end), obj.data.url)
      }
      previousSpan = obj
      return previousSpan;
    })
    tmpText += txt.substring(previousSpan.end)
    return tmpText
  }

  const render = {
    heading: (text, type = "heading4", index) => <h4 key={'sdf'+index} className="mt-2">{text}</h4>,
    paragraph: text => <p>{text}</p>,
    htmlParse: (text, index) => (
      <div key={'sdf'+index} className="mt-2" dangerouslySetInnerHTML={{ __html: text }} />
    ),
    span: text => <span>{text}</span>,
    list: (text, index) => (
      <div className="m-top-20" key={'sdf'+index}>
        <ul className="bullet--list2">
          <li className={`bullet_list ${isRtl ? "bullet_list-ar" : ""}`}>
            {text}
          </li>
        </ul>
      </div>
    ),
  }
  return (
    <>
      {data.map((item, index) => {
        switch (item.type) {
          case "paragraph":
            return render.htmlParse(addSpans(item.text, item.spans), index)
          // return parse(addSpans(item.text, item.spans))
          case "heading4":
            return render.heading(item.text, "heading4", index)
          case "list-item":
            return render.list(item.text, index)
          default:
            return ""
        }
      })}
    </>
  )
}

// export default Stats


const NewStats = ({ data = [] }) => {
  return (
    <>
      <RichText
        render={data}
        htmlSerializer={htmlSerializer}
        linkResolver={linkResolver}
      />
    </>
  )
}

export default NewStats


const htmlSerializer = (type, element, content, children, index) => {
  // Generate links to Prismic Documents as <Link> components
  if (type === Elements.hyperlink) {
    let result = ""
    const url = PrismicLink.url(element.data, linkResolver)
    if(element.data){
      if (element.data.link_type === "Document") {
        result = (
          <Link to={url} key={index}>
            {content}
          </Link>
        )
      } else {
        const target = element.data.target
          ? { target: element.data.target, rel: "noopener" }
          : {}
        result = (
          <a href={url} {...target} key={index}>
            {content}
          </a>
        )
      }
    }
    
    return result
  }

  // If the image is also a link to a Prismic Document, it will return a <Link> component
  if (type === Elements.image) {
    let result = (
      <img
        src={element.url}
        alt={element.alt || ""}
        copyright={element.copyright || ""}
      />
    )

    if (element.linkTo) {
      const url = PrismicLink.url(element.linkTo, linkResolver)

      if (element.linkTo.link_type === "Document") {
        result = (
          <Link to={url} key={index}>
            {result}
          </Link>
        )
      } else {
        const target = element.linkTo.target
          ? { target: element.linkTo.target, rel: "noopener" }
          : {}
        result = (
          <a href={url} {...target}>
            {result}
          </a>
        )
      }
    }
    const wrapperClassList = [element.label || "", "block-img"]
    result = (
      <p className={wrapperClassList.join(" ")} key={index}>
        {result}
      </p>
    )
    return result
  }

  // Return null to stick with the default behavior for everything else
  return null
}


const linkResolver = doc => {
  // Route for blog posts
  if (doc.type === "post") {
    return "/article/" + doc.uid
  }

  // Homepage route fallback
  return "/"
}
