/***********************************
 * Export Challenge Array
 *********************************** */

 export default {
    title: "General questions about HTML",
    category: "HTML",
    challenges: [
        {
            title: `What is tag soup?`,
            subtitle: `HTML1`,
            choices: [
                `A term for syntactically or structurally incorrect HTML written for a web page.`,
                `Inline styling.`,
                `Misaligned HTML tags.`,
                `A delicious south-american dish.`,
            ],
            solution: `0`,
            explanation: `
                An HTML parser (part of a web browser) that is capable of interpreting HTML-like markup even if it contains 
                invalid syntax or structure may be called a tag soup parser. 
                All major web browsers currently have a tag soup parser for interpreting malformed HTML, 
                with most error-handling elements standardized.
				`
        },
        {
            title: `Why is it recommended to put the &ltscript&gt tags at the end of the html body?`,
            subtitle: `HTML2`,
            choices: [
                `Pages load faster because the HTML parser isn't blocked by downloading scripts before it finishes rendering out the page.`,
                `Because the HTML structure is more readable that way.`,
                `Because the javascript code runs faster that way.`,
            ],
            solution: `0`,
            explanation: `
                The way that the browser loads a page which has a &ltscript&gt tag in it is the following:<br/>
                <ol>
                    <li>Fetch the HTML page.</li>
                    <li>Begin parsing the HTML.</li>
                    <li>Parser encounters a &ltscript&gt tag referencing an external script file.</li>
                    <li>The browser requests the script file. Meanwhile the parser blocks and stops parsing the other HTML on the page.</li>
                    <li>After some time the script is downloaded and subsequently executed.</li>
                    <li>The parser continues parsing the rest of the HTML document.</li>
                </ol>

                Note that there is a newer and better solution to this problem, provided by the <strong>async</strong> tag:
                <br/>
                <code>
                    <script src="script.js" async></script>
                </code>
                <br/>
                In this case you can just put the script tag into the HTML head.
				`
        },
        {
            title: `What is a HTML validator?`,
            subtitle: `HTML3`,
            choices: [
                `It's a website which outputs all of the errors in the html file.`,
                `An authority which oversees HTML standards.`,
                `A built-in website feature which validates your html and outputs errors in the developer console.`,
            ],
            solution: `0`,
            explanation: `
                Websites don't validate HTML and show invalid HTML as well as valid HTML.
                There are online tools which were created so that HTML files/websites can be validated and the errors can be pointed out.
				`
        },
        {
            title: `How to easily improve the accesibility of your website?`,
            subtitle: `HTML4`,
            choices: [
                `Provide meaningful alt attributes to HTML attributes such as buttons and images.`,
                `Use all-caps characters.`,
                `Use more muted colours.`,
            ],
            solution: `0`,
            explanation: `
                Providing alt attributes are a very good and easy way to improve the accesibility of your website.
                E.g. visually impaired people often use screen readers when browsing the web. Screen readers can't describe images, but they can read alt text.
				`
        },
        {
            title: `What does HTML stand for?`,
            subtitle: `HTML5`,
            choices: [
                `Hypertext Markup Language`,
                `High Topical Metered Language`,
                `Hypertext Markdown Language`,
                `Hypertext Makeup Language`,
            ],
            solution: `0`,
            explanation: `
                HTML stands for Hypertext Markup Language. As its name suggests, it's not a programming language, but a <i>markup</i> language. </br>
                Markdown is a specific markup library.
				`
        },
    ]
};
