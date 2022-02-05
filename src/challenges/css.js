const start = `<pre><code class='language-html'>`;
const end = `</code></pre>`;

/***********************************
 * Create Code Snippets
 *********************************** */

const STYLESHEET_INCLUDE_OK = {
    snippet: `
    ${start}
        &ltlink rel="stylesheet"
            href="css/style.css"/&gt
    ${end}`
};

const STYLESHEET_INCLUDE_WRONG1 = {
    snippet: `
    ${start}
        &ltlink rel="javascript"
            href="css/style.css"/&gt
    ${end}`
};

const STYLESHEET_INCLUDE_WRONG2 = {
    snippet: `
    ${start}
        &ltlink rel="javascript"
            href="css/style.js"/&gt
    ${end}`
};


/***********************************
 * Export Challenge Array
 *********************************** */

 export default {
    title: "Questions about CSS",
    category: "CSS",
    challenges: [
        {
            title: `What does CSS stand for?`,
            subtitle: `CSS1`,
            choices: [
                `Cascading Style Sheets`,
                `Custom Styling Script`,
                `Cascading Scripting Sheets`,
                `Consortium Style Sheets.`,
            ],
            solution: `0`,
            explanation: `
                Cascading Style Sheets (CSS) is a style sheet language used for describing the 
                presentation of a document written in a markup language such as HTML. 
                CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
				`
        },
        {
            title: `What are some of the new features (in recommendation) of CSS2.1?`,
            subtitle: `CSS2`,
            choices: [
                `Selectors, Tabels, Visual Effects, Box Model`,
                `Font Properties, Color + Background, Pseudo Classes`,
                `Cascade, Font Properties, CSS Syntax`,
                `MathML, Color L3, Style Attributes`,
            ],
            solution: `0`,
            explanation: `
                The new features of CSS 2.1 are:
                <ul>
                    <li>Selectors</li>
                    <li>Media Types</li>
                    <li>Box Model</li>
                    <li>Visual Effects</li>
                    <li>Generated Content</li>
                    <li>Tables</li>
                    <li>Paged media</li>
                <ul>
				`
        },
        {
            title: `What are the advantages of CSS when properly used?`,
            subtitle: `CSS3`,
            choices: [
                `Separation of content from presentation.`,
                `Having more meaningful content on your website.`,
                `Cross-browser support of all features.`,
                `It's an easy-to-learn programming language.`,
            ],
            solution: `0`,
            explanation: `
                <ul>
                    <li>
                        When using newer CSS features, you should validate that they are supported by most major browser.
                    </li>
                    <li>
                        CSS has nothing to do with the content itself.
                    </li>
                    <li>
                        Newer CSS features may have cross-browser support issues.
                    </li>
                    <li>
                        CSS is not a programming language.
                    </li>
                </ul>
				`
        },
        {
            title: `Before the introduction of CSS, what was the most widely used HTML element used for building complete, complex and compelling layouts?`,
            subtitle: `CSS4`,
            choices: [
                `&lttable&gt`,
                `&ltp&gt`,
                `&ltimg&gt`,
                `&lta&gt`,
            ],
            solution: `0`,
            explanation: `
                Before CSS to build complete, complex and compelling layouts, authors started relying on tables.
				`
        },
        {
            title: `How would you link an external css stylesheet to your html page?`,
            subtitle: `CSS5`,
            choices: [
                `${STYLESHEET_INCLUDE_OK.snippet}`,
                `${STYLESHEET_INCLUDE_WRONG1.snippet}`,
                `${STYLESHEET_INCLUDE_WRONG2.snippet}`,
            ],
            solution: `0`,
            explanation: `
                <ul>
                    <li>When including external stylesheets, you should use the link HTML attribute with the rel=stylesheet attribute.</li>
                    <li>External stylesheets should have the css file extension</li>
                <ul>
				`
        },
    ]
};
