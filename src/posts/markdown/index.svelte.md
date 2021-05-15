---
title: Markdown Sample
description: A collection of different markdown elements, along with how they are rendered by the blog.
date: 2021-05-15 00:00:00
categories:
- Blog Features
tags:
- test post
---

# Markdown Sample

## Headings

```md
# This is an h1 tag
## This is an h2 tag
### This is an h3 tag
#### This is an h4 tag
##### This is an h5 tag
###### This is an h6 tag
```

# This is an h1 tag
## This is an h2 tag
### This is an h3 tag
#### This is an h4 tag
##### This is an h5 tag
###### This is an h6 tag

## Emphasis

```md
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_
```

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

```md
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```

* Item 1
* Item 2
  * Item 2a
  * Item 2b

### Ordered

```md
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

## Images

```md
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
```

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

## Links

```md
http://github.com - automatic!
[GitHub](http://github.com)
```

http://github.com - automatic!
[GitHub](http://github.com)

## Strikethrough
```
~~strike~~
```

~~strike~~

## Horizontal Row

```
---
```

---

## Blockquotes

```md
As Kanye West said:

> We're living the future so
> the present is our past.
```

As Kanye West said:

> We're living the future so
> the present is our past.

## Inline Code

```md
I think you should use an 
`<addr>` element here instead.
```

I think you should use an 
`<addr>` element here instead.

## Code Blocks

### Simple Code Blocks

```md
\`\`\`
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
\`\`\`
```

```
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

### Syntax Highlighting

```
\`\`\`python
def foo():
    if not bar:
        return True
\`\`\`
```

```python
def foo():
    if not bar:
        return True
```

### Live Code

```
\`\`\`eval-js
let f = (i) => {
  if (i < 2) return 1;
  return f(i - 1) + f(i - 2);
}

[...Array(10).keys()].map(f)
\`\`\`
```

```eval-js
let f = (i) => {
  if (i < 2) return 1;
  return f(i - 1) + f(i - 2);
}

[...Array(10).keys()].map(f)
```

## Task Lists

```
- [x] [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

- [x] [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item


## Tables

```
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
