import React from 'react'

function About() {
    console.log("about")
    return (
        <div>
            About
            Unlike some component libraries, Reactstrap does not embed its own styles, and instead depends on the Bootstrap CSS framework for its styles and theme. This allows you to have consistent styles across your React-based components and static parts of your site, and allows you to include your own custom Bootstrap theme when needed.

            Unlike using Bootstrap in HTML, Reactstrap exports all the correct Bootstrap classes automatically, and don't need to use or include Bootstrap's JavaScript files or add data attributes to trigger functionality. Instead, components are defined in React-friendly components with appropriate props for you to control.
        </div>
    )
}

export default About