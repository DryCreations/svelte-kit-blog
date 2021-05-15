<script context="module">
    export async function load ({ page }) {
        try {
            let {metadata, default: Component} = await import(`./../../../posts/${page.params.slug}/index.svelte.md`)

            return {
                props: {
                    post: {
                        metadata,
                        Component
                    }
                }
            }
        } catch {
            return;
        }
    }
</script>

<script>

import { base } from '$app/paths';

    export let post;

    let {metadata, Component: Post} = post;
</script>

<svelte:head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
</svelte:head>

<article> 
    <Post />
</article>


<style global lang="postcss">
    .CodeMirror textarea {
        @apply bg-black text-white
    }
    code[class*="language-"],pre[class*="language-"] {
        font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;
        text-align:left;
        white-space:pre;
        word-spacing:normal;
        word-break:normal;
        word-wrap:normal;
        -moz-tab-size:4;
        -o-tab-size:4;
        tab-size:4;
        -webkit-hyphens:none;
        -moz-hyphens:none;
        -ms-hyphens:none;
        hyphens:none;

        @apply text-gray-100 bg-none  leading-normal
    }
    
    pre[class*="language-"] {
        @apply rounded-md mx-0 my-2 p-4 overflow-auto
    }
    
    :not(pre) > code[class*="language-"],pre[class*="language-"] {
        @apply bg-gray-800
    }
    
    :not(pre) > code[class*="language-"] {
        white-space:normal;

        @apply rounded-md p-1;
    }
    
    .token.comment,.token.prolog,.token.doctype,.token.cdata {
        @apply text-green-200
    }
    
    .token.punctuation {
        @apply text-gray-100
    }
    
    .token.property,.token.tag,.token.constant,.token.symbol,.token.deleted {
        @apply text-red-300
    }
    
    .token.boolean,.token.number {
        @apply text-indigo-200
    }
    
    .token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted {
        @apply text-green-300
    }
    
    .token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string,.token.variable {
        @apply text-indigo-200
    }
    
    .token.atrule,.token.attr-value,.token.function {
        @apply text-yellow-300
    }
    
    .token.keyword {
        @apply text-indigo-200
    }
    
    .token.regex,.token.important {
        @apply text-yellow-300
    }
    
    .token.important,.token.bold {
        @apply font-bold
    }
    
    .token.italic {
        @apply italic
    }
    
    .token.entity {
        cursor:help;
    }
    
    @media screen and (-ms-high-contrast: active) {
        code[class*="language-"],pre[class*="language-"] {
            color:windowText;
            background:window;
        }
    
        :not(pre) > code[class*="language-"],pre[class*="language-"] {
        background:window;
        }
        
        .token.important {
            background:highlight;
            color:window;
            @apply font-normal
        }
        
        .token.atrule,.token.attr-value,.token.function,.token.keyword,.token.operator,.token.selector {
            @apply font-bold
        }
        
        .token.attr-value,.token.comment,.token.doctype,.token.function,.token.keyword,.token.operator,.token.property,.token.string {
            color:highlight;
        }
        
        .token.attr-value,.token.url {
            @apply font-normal
        }
    }
    
    @font-face {
        font-family:'FiraCode';
        src:url(https://viebel.github.io/klipse/fonts/FiraCode/woff2/FiraCode-Regular.woff2) format("webfont.woff2") ,url(https://viebel.github.io/klipse/fonts/FiraCode/woff/FiraCode-Regular.woff) format("woff"),url(https://viebel.github.io/klipse/fonts/FiraCode/ttf/FiraCode-Regular.ttf) format("truetype");
        font-display:swap;
    }
    
    .CodeMirror {
        font-family:'FiraCode',monospace;
        height:100%;
        @apply border border-indigo-300 text-white
    }
    
    .CodeMirror-lines {
        @apply px-1 py-0
    }
    
    .CodeMirror pre {
        @apply px-0 py-1
    }
    
    .CodeMirror-scrollbar-filler,.CodeMirror-gutter-filler {
        @apply bg-white
    }
    
    .CodeMirror-gutters {
        white-space:nowrap;

        @apply bg-gray-50 border-gray-50 border-r
    }
    
    .CodeMirror-linenumber {
        padding:0 3px 0 5px;
        min-width:20px;
        text-align:right;
        white-space:nowrap;

        @apply text-gray-400
    }
    
    .CodeMirror-guttermarker {
        @apply text-black
    }
    
    .CodeMirror-guttermarker-subtle {
        @apply text-gray-400

    }
    
    .CodeMirror-cursor {
        width:0;

        @apply border-r-0 border-l border-black

    }
    
    .CodeMirror div.CodeMirror-secondarycursor {
        
        @apply border-gray-400 border-l
    }
    
    .cm-fat-cursor .CodeMirror-cursor {
        width:auto;
        border:0;

        @apply border-none bg-green-400
    }
    
    .cm-fat-cursor div.CodeMirror-cursors {
        @apply z-10
    }
    
    .cm-animate-fat-cursor {
        width:auto;
        -webkit-animation:blink 1.06s steps(1) infinite;
        -moz-animation:blink 1.06s steps(1) infinite;
        animation:blink 1.06s steps(1) infinite;

        @apply border-none bg-green-400
    }
    
    @-moz-keyframes blink {
        50% {
            @apply bg-transparent
        }
    }
    
    @-webkit-keyframes blink {
        50% {
            @apply bg-transparent
        }
    }
    
    @keyframes blink {
        50% {
            @apply bg-transparent
        }
    }
    
    .cm-tab {
        display:inline-block;
        text-decoration:inherit;
    }
    
    .CodeMirror-ruler {

        @apply absolute border-l border-gray-200
    }
    
    .CodeMirror {

        @apply relative overflow-hidden bg-gray-800
    }
    
    .CodeMirror-scroll {
        overflow:scroll!important;
        margin-bottom:-30px;
        margin-right:-30px;
        padding-bottom:30px;
        height:100%;
        outline:none;

        @apply relative
    }
    
    .CodeMirror-sizer {
        position:relative;
        border-right:30px solid transparent;
    }
    
    .CodeMirror-vscrollbar,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-gutter-filler {
        

        @apply absolute z-40 hidden
    }
    
    .CodeMirror-vscrollbar {
        right:0;
        top:0;
        overflow-x:hidden;
        overflow-y:scroll;
    }
    
    .CodeMirror-hscrollbar {
        bottom:0;
        left:0;
        overflow-y:hidden;
        overflow-x:scroll;
    }
    
    .CodeMirror-scrollbar-filler {
        right:0;
        bottom:0;
    }
    
    .CodeMirror-gutter-filler {
        left:0;
        bottom:0;
    }
    
    .CodeMirror-gutters {
        left:0;
        top:0;
        @apply z-10 absolute
    }
    
    .CodeMirror-gutter {
        white-space:normal;
        height:100%;
        display:inline-block;
        margin-bottom:-30px;
        *zoom:1;
        *display:inline;
    }
    
    .CodeMirror-gutter-wrapper {
        position:absolute;
        background:none!important;
        border:none!important;

        @apply z-30
    }
    
    .CodeMirror-gutter-background {
        position:absolute;
        top:0;
        bottom:0;

        @apply z-30
    }
    
    .CodeMirror-gutter-elt {
        position:absolute;
        cursor:default;
        @apply z-30
    }
    
    .CodeMirror-gutter-wrapper {
        -webkit-user-select:none;
        -moz-user-select:none;
        user-select:none;
    }
    
    .CodeMirror-lines {
        cursor:text;
        min-height:1px;
    }
    
    .CodeMirror pre {
        -moz-border-radius:0;
        -webkit-border-radius:0;
        border-radius:0;
        border-width:0;
        background:transparent;
        font-family:inherit;
        font-size:inherit;
        margin:0;
        white-space:pre;
        word-wrap:normal;
        line-height:inherit;
        color:inherit;
        position:relative;
        overflow:visible;
        -webkit-tap-highlight-color:transparent;
        @apply z-10
    }
    
    .CodeMirror-wrap pre {
        word-wrap:break-word;
        white-space:pre-wrap;
        word-break:normal;
    }
    
    .CodeMirror-linebackground {
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        @apply z-0

    }
    
    .CodeMirror-linewidget {
        position:relative;
        overflow:auto;
        @apply z-10

    }
    
    .CodeMirror-code {
        outline:none;
    }
    
    .CodeMirror-scroll,.CodeMirror-sizer,.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber {
        -moz-box-sizing:content-box;
        box-sizing:content-box;
    }
    
    .CodeMirror-measure {
        position:absolute;
        width:100%;
        height:0;
        overflow:hidden;
        visibility:hidden;
    }
    
    .CodeMirror-cursor {
        position:absolute;
    }
    
    .CodeMirror-measure pre {
        position:static;
    }
    
    div.CodeMirror-cursors {
        visibility:hidden;
        position:relative;
        z-index:3;
        @apply z-20
    }
    
    div.CodeMirror-dragcursors {
        visibility:visible;
    }
    
    .CodeMirror-focused div.CodeMirror-cursors {
        visibility:visible;
    }
    
    .CodeMirror-selected {
        @apply bg-gray-300
    }
    
    .CodeMirror-focused .CodeMirror-selected {
        @apply bg-purple-200
    }
    
    .CodeMirror-crosshair {
        cursor:crosshair;
    }
    
    .CodeMirror-line::selection,.CodeMirror-line > span::selection,.CodeMirror-line > span > span::selection {
        @apply bg-purple-200
    }
    
    .CodeMirror-line::-moz-selection,.CodeMirror-line > span::-moz-selection,.CodeMirror-line > span > span::-moz-selection {
        @apply bg-purple-200
    }
    
    .cm-searching {
        @apply bg-green-600
    }
    
    .CodeMirror span {
        *vertical-align:text-bottom;
    }
    
    .cm-force-border {
        padding-right:.1px;
    }
    
    @media print {
        .CodeMirror div.CodeMirror-cursors {
            visibility:hidden;
        }
    }
    
    .cm-tab-wrap-hack:after {
        content:'';
    }
    
    span.CodeMirror-selectedtext {
        background:none;
    }
    
    .CodeMirror-hints {
        position:absolute;
        z-index:10;
        overflow:hidden;
        list-style:none;
        margin:0;
        padding:2px;
        -webkit-box-shadow:2px 3px 5px rgba(0,0,0,.2);
        -moz-box-shadow:2px 3px 5px rgba(0,0,0,.2);
        box-shadow:2px 3px 5px rgba(0,0,0,.2);
        border-radius:3px;
        font-size:90%;
        font-family:monospace;
        max-height:20em;
        overflow-y:auto;
        @apply z-50 border-gray-300 bg-white border
    }
    
    .CodeMirror-hint {
        margin:0;
        padding:0 4px;
        white-space:pre;
        cursor:pointer;

        @apply text-black rounded-sm
    }
    
    li.CodeMirror-hint-active {
        @apply text-white bg-blue-500
    }
    
    .CodeMirror {
        border:none;

        @apply text-gray-50
    }
    
    .klipse-snippet,.klipse-result {
        @apply rounded-md bg-gray-800 mx-0 my-2 p-4
    }
    
    .cm-s-default {
        @apply bg-gray-800
    }
    
    .cm-header,.cm-strong {
        @apply font-bold
    }
    
    .cm-em {
        @apply italic
    }
    
    .cm-link {
        @apply underline
    }
    
    .cm-strikethrough {
        
        @apply line-through
    }
    
    .cm-s-default .cm-string {
        @apply text-yellow-300
    }
    
    .cm-s-default .cm-qualifier {
        @apply text-yellow-300
    }
    
    .cm-s-default .cm-tag {
        @apply text-red-400
    }
    
    .CodeMirror-composing {
        @apply border-b-2
    }
    
    .CodeMirror-cursor {
        @apply border-l border-gray-50
    }
    
    .CodeMirror div.CodeMirror-secondarycursor {
        @apply border-l border-gray-400
    }
    
    .cm-fat-cursor .CodeMirror-cursor {
        @apply bg-gray-50
    }
    
    .cm-animate-fat-cursor {
        @apply bg-gray-50
    }
    
    .cm-s-default .CodeMirror-lines {
        @apply mx-2 my-0
    }
    
    .cm-s-default div.CodeMirror-cursor {
        @apply border-l border-gray-50
    }
    
    .cm-s-default .CodeMirror-activeline-background {
        @apply bg-gray-700
    }
    
    .cm-s-default .CodeMirror-selected {
        @apply bg-gray-600
    }
    
    .cm-s-default .cm-header,.cm-s-default .cm-quote,.cm-negative,.cm-positive,.cm-s-default .cm-def,.cm-s-default .cm-meta,.cm-s-default .cm-bracket,.cm-s-default .cm-hr {
        @apply text-gray-100
    }
    
    .cm-s-default .cm-keyword,.cm-s-default .cm-atom,.cm-s-default .cm-number,.cm-s-default .cm-operator {
        @apply text-indigo-300
    }

    .cm-s-default .cm-property {
        @apply text-yellow-300
    }
    
    .cm-s-default .cm-variable,.cm-s-default .cm-punctuation,.cm-s-default .cm-operator,.cm-s-default .cm-link {
        @apply text-indigo-100
    }

    .cm-s-default .cm-variable-2 {
        @apply text-yellow-300

    }

    .cm-s-default .cm-variable-3 {
        @apply text-red-300

    }
    
    .cm-s-default .CodeMirror-linenumber {
        @apply text-gray-500
    }
    
    .cm-s-default .cm-comment,.cm-s-default .cm-string-2,.cm-s-default .cm-builtin,.cm-s-default .cm-attribute {
        @apply text-green-400
    }
    
    .cm-s-default .cm-error,.cm-invalidchar {
        @apply text-red-500
    }
</style>