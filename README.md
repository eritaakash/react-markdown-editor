## React Markdown Editor
React Component to render markdown preview directly into text field.

```bash
npm i @eritaakash/react-markdown-editor
```

### Features
It's currently very basic, and all it does is:

- Provide a live preview within the text field. The user won't have to switch between "editor" and "preview" section.
- Format Bold, Italic and Underline texts as of now.
- Provide option for customizable styling of the text editor container.
- Provide option to customize the css of the preview container and markdown textarea.

### Usage
1. In a page file, 

```jsx
import MarkdownEditor from "@eritaakash/react-markdown-editor";
import { useState } from 'react';

export default function Home() {
  /* text is the state that will be used to store the markdown text of the editor */
  const [text, setText] = useState('');

  return (
    <MarkdownEditor 
        text={text} 
        setText={setText} 
    />
  );
};
```

2. It results in:

![React Markdown Editor Preview](https://media.discordapp.net/attachments/695932896560676935/1207306730531201065/image.png?ex=65df2b03&is=65ccb603&hm=b0b031a60d5d55dea2cfd86bf0d4f8be855d19cd5a07e3358c1b9c6e6d412d96&=&format=webp&quality=lossless)

### Customization
You can customie the styling of the component through the linked css file, using the `.r-md_customStyle` selector. The default style is:

```css
.r-md_customStyle {
    height: 30rem;
    width: 30rem;
    padding: 10px;
}
```

It is only useful to change dimension-related properties such as width, height, padding. For a deeper styling, `markdown-editor` class should be used in your `globals.css` file.

#### Custom caret-color
```css
/* global css file (Next.js) */
/* Or, linked css file (React) */

textarea.markdown-editor {
    caret-color: red;
}
```

result:

![React Markdown Editor textarea styling example](https://media.discordapp.net/attachments/695932896560676935/1207946019946500116/image.png?ex=65e17e65&is=65cf0965&hm=60b46b508ae6873441e1af18a487209d079206faedce8c1831d67726ab09744c&=&format=webp&quality=lossless)

> ⚠ **Do not** change text or background color through `textarea`, as its kept `transparent`.

#### Text or Background Color
use `div.markdown-editor` to change the color of background or text

```css
/* global css file (Next.js) */
/* Or, linked css file (React) */

div.markdown-editor {
    color: crimson;
    background-color: black;
}
```

result:

![React Markdown Editor text and background color styling example](https://media.discordapp.net/attachments/695932896560676935/1207947382440853604/image.png?ex=65e17faa&is=65cf0aaa&hm=ec0be7283512128b31553c85d22bf62e45f638f0c01fb42b7234484249520ca9&=&format=webp&quality=lossless)

#### Font Size & Adding Custom Font
apply the font to both `div` and `textarea`.

```css
/* global css file (Next.js) */
/* Or, linked css file (React) */

textarea.markdown-editor {
    caret-color: grey;

    /* Custom font size */
    font-size: 20px;

    /* Add font family */
    font-family: Poppins, sans-serif;
}

div.markdown-editor {
    color: white;
    background-color: black;

    /* Custom font size */
    font-size: 20px;

    /* Add font family */
    font-family: Poppins, sans-serif;
}
```

result:

![React Markdown Editor custom text font example](https://media.discordapp.net/attachments/695932896560676935/1207949667321651200/image.png?ex=65e181cb&is=65cf0ccb&hm=398608f97f7db6a10dad22c1f9982dd4355373dbe61a9d0cb895c9020a1e3bb4&=&format=webp&quality=lossless)

> ⚠ Using a font other than monospace leads to a slight misposition of caret in some cases, like:

> ![an issue with React Markdown Editor](https://media.discordapp.net/attachments/695932896560676935/1207950952666243092/image.png?ex=65e182fd&is=65cf0dfd&hm=c0015fd5222779449f97932245f7a524ab070a27404da827d013e461067598bb&=&format=webp&quality=lossless)


I will try to figure out how would I solve this issue.

### Todo
- Add support for various other markdown formatting methods such as List Item, Link & Image.

### Contributing 
Reporting of [issues](https://github.com/eritaakash/react-markdown-editor/issues) and [pull requests](https://github.com/eritaakash/react-markdown-editor/pulls) for bug fixes or new suggestions are welcomed.