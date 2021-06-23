import React from 'react'
import parse from 'html-react-parser'

function HTMLParser(props) {
    const { htmlContent } = props
    return parse(htmlContent)
}

export default HTMLParser