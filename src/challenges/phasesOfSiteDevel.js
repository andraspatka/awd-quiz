/***********************************
 * Export Challenge Array
 *********************************** */

export default {
    title: "Questions about phases of site development",
    category: "PhasesOfSiteDevel",
    challenges: [
        {
            title: `What are the phases of site development?
                    The order is important!`,
            subtitle: `Phases1`,
            choices: [
                `<ol>
                    <li>Gather information</li>
                    <li>Planning</li>
                    <li>Design</li>
                    <li>Development</li>
                    <li>Testing, delivery and marketing</li>
                    <li>Tracking, evaluation and maintenance</li>
                </ol>`,
                `<ol>
                    <li>Planning</li>
                    <li>Development</li>
                    <li>Tracking, evaluation and maintenance</li>
                </ol>`,
                `<ol>
                    <li>Gather information</li>
                    <li>Planning</li>
                    <li>Design</li>
                    <li>Development</li>
                    <li>Redesigning</li>
                    <li>Tracking, evaluation and maintenance</li>
                </ol>`,
                `<ol>
                    <li>Gather information</li>
                    <li>Planning</li>
                    <li>Design</li>
                    <li>Development</li>
                    <li>Tracking, evaluation and maintenance</li>
                    <li>Testing, delivery and marketing</li>
                </ol>`,
            ],
            solution: `0`,
            explanation: `
				Site development process and stages are: <br/>
                <ol>
                    <li>Gather information - purpose, goals, target audience, content, etc.</li>
                    <li>Planning - recommended to use the Information Architecture approach</li>
                    <li>Design - determine the look and feel of the website, create prototype</li>
                    <li>Development - create an actual functioning site from the prototype</li>
                    <li>Testing, delivery and marketing - is your website optimized for all browsers and devices? At this point your website is public!</li>
                    <li>Tracking, evaluation and maintenance - who uses your site and how much. Ensure that it is working correctly</li>
                </ol>
				`
        },
        {
            title: `For which phase is <strong>Card sorting</strong> useful?`,
            subtitle: `Phases2`,
            choices: [
                `Gather information`,
                `Planning`,
                `Design`,
                `Development`,
                `Testing, delivery and marketing`,
                `Tracking, evaluation and maintenance`,
            ],
            solution: `1`,
            explanation: `
				Card sorting is an Information Architecture (IA) technique and is useful in the planning phase.
                Information Architecture is about the process by which you break your website's content into chunks and then reorganize those chunks hierarchically
                in relation to one another in a way that's logical.
				`
        },
        {
            title: `Which is true about the <strong>Testing, delivery and marketing</strong> phase of site development?`,
            subtitle: `Phases3`,
            choices: [
                `At this point, your website should be publicly accesible.`,
                `Information Architecture techniques are especially useful in this phase.`,
                `During this phase, you should ensure that your website is optimized to be viewed properly on the latest version of the most popular web browser.`,
                `<strong>Marketing</strong> means that your website is fast.`,
                `A website project does not go through this phase.`,
            ],
            solution: `0`,
            explanation: `
				<ul>
                    <li>Information Architecture is useful during planning (e.g. Card sorting)</li>
                    <li>At this point your website should absolutely be publicly accesible.</li>
                    <li>Marketing has nothing to do with the speed of your website.</li>
                    <li>Your website should be optimized to be viewed properly on <strong>all</strong> modern browsers.</li>
                </ul>
				`
        },
        {
            title: `What is the most time-consuming part of the <strong>Development</strong> phase?`,
            subtitle: `Phases4`,
            choices: [
                `Coding, styling, creating the website.`,
                `Discussions about design and user experience.`,
                `Searching for target groups, consumers for the website.`,
                `Drawing wireframes.`,
            ],
            solution: `0`,
            explanation: `
				In this phase the actual functional site should be created.
				`
        },
        {
            title: `Which is the best phase to draw wireframes and why?`,
            subtitle: `Phases5`,
            choices: [
                `Design - because at this point you have all of the required information 
                and you haven't started developing the site yet, therefore you don't have to redo it if the wireframes change.`,
                `Planning - because one form of planning is creating wireframes.`,
                `Development - because you can see what would work and what wouldn't.`,
                `Tracking, evaluation and maintenance - because at this point you've seen what the users like and what they don't like.`,
                `Design - because in this phase you can already start development of the site and can easily make modifications to the website based on the wireframe.`,
            ],
            solution: `0`,
            explanation: `
				<ul>
                    <li>
                        In the Planning phase you gather the necessary information, so that you can start designing the website. At this phase, you can't draw wireframes, 
                because you don't know what the consumers would expect from your site. You don't have all of the necessary information yet.
                    </li>
                    <li>
                        When the Development phase starts, you should already have a prototype and know how your site should roughly look like.
                    </li>
                    <li>
                        In the tracking, evaluation and maintenance phase, it is too late to think about wireframes. Only if the goal would be to completely overhaul the website, in which
                case the planning and design phases failed.
                    </li>
                    <li>
                        In the design phase you don't start developing the website.
                    </li>
                </ul>
				`
        },
    ]
};
