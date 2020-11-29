import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { render } from 'react-dom'

export default function BlogPost(props) {
    return(
        render(<ReactMarkdown src="./content/blog/introduction-blog/index.mdx"></ReactMarkdown>, document.body)
    )
}