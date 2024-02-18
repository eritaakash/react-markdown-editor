import React, { useState, useEffect } from 'react';

const styles = {
    containerStyle: {
        position: 'relative',
    },
    previewContainerCommon: {
        height: 'calc(100% - 24px)',
        background: '#444',
        width: '100%',
        resize: 'none',
        margin: 0,
        padding: '12px',
        border: 'none',
        outline: 'none',
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '18px',
        fontFamily: 'monospace',
    },
    previewDiv: {
        background: '#333',
        zIndex: 100,
        color: 'white',
    },
    textArea: {
        zIndex: 101,
        color: 'transparent',
        background: 'transparent',
        caretColor: 'white',
    },
    customStyle: {
        height: '30rem',
        width: '30rem',
        padding: '10px',
    },
};

const MarkdownEditor = ({ customStyle = {}, text, setText }) => {
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
        <section style={{ ...styles.containerStyle, ...styles.customStyle }}>
            <textarea
                value={text}
                onChange={(e) => handleInputChange(e.target.value)}
                rows={10}
                cols={50}
                placeholder="Enter Markdown text..."
                className={`${styles.previewContainerCommon} ${styles.textArea} markdown-editor`}
            />
            <div dangerouslySetInnerHTML={{ __html: output }}
                className={`${styles.previewContainerCommon} ${styles.previewDiv} markdown-editor`} />
        </section>
    );
};

export default MarkdownEditor;