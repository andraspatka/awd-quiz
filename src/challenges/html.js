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
    ]
};
