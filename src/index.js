import React, { useState, useEffect } from 'react';
import './styles.css';

const MarkdownEditor = ({ text, setText }) => {
    const [output, setOutput] = useState('');
    const dimStyle = 'opacity:0.5; font-weight:200;';

    const convertMarkdownToHtml = (markdownText) => {
        const regex = {
            bold: /(?<=\W|^)\*\*([^\s].*?[^\s])\*\*(?=\W|$)/g,
            italic: /(?<=\W|^)\_([^\s].*?[^\s])\_(?=\W|$)/g,
            underline: /(?<=\W|^)\_\_([^\s].*?[^\s])\_\_(?=\W|$)/g,
            strikethrough: /(?<=\W|^)~~([^\s].*?[^\s])~~(?=\W|$)/g,
        };

        let htmlText = text;

        /* New Line */
        htmlText = htmlText.replace(
            /\n/g,
            `<br>`
        );

        /* Bold Text */
        htmlText = htmlText.replace(
            regex.bold,
            `<strong><span style="${dimStyle}">**</span>$1<span style="${dimStyle}">**</span></strong>`
        );

        /* Underline Text */
        htmlText = htmlText.replace(
            regex.underline,
            `<u><span style="${dimStyle}">__</span>$1<span style="${dimStyle}">__</span></u>`
        );

        /* Italic Text */
        htmlText = htmlText.replace(
            regex.italic,
            `<em><span style="${dimStyle}">_</span>$1<span style="${dimStyle}">_</span></em>`
        );


        /* Strikethrough Text */
        htmlText = htmlText.replace(
            regex.strikethrough,
            `<del><span style="${dimStyle}">~~</span>$1<span style="${dimStyle}">~~</span></del>`
        );

        return htmlText;
    };

    const handleInputChange = (value) => {
        setText(value);
    };

    useEffect(() => {
        const htmlText = convertMarkdownToHtml(text);
        setOutput(htmlText);
    }, [text]);

    return (
        <section className={'r-md_containerStyle r-md_customStyle'}>
            <textarea
                value={text}
                onChange={(e) => handleInputChange(e.target.value)}
                rows={10}
                cols={50}
                placeholder="Enter Markdown text..."
                className={`r-md_previewContainerCommon r-md_textArea markdown-editor`}
            />
            <div dangerouslySetInnerHTML={{ __html: output }}
                className={`r-md_previewContainerCommon r-md_previewDiv markdown-editor`} />
        </section>
    );
};

export default MarkdownEditor;