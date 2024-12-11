import React from 'react'

const Skills = () => {
  return(
    <div className="tile is-ancestor mb-4">
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title">Skills</p>
          <p className="subtitle pl-4"> &gt; Svelte</p>
          <p className="subtitle pl-4 mt-2"> &gt; JavaScript (ES6)</p>
          <p className="subtitle pl-4"> &gt; Ruby  | Ruby on+ Rails</p>
          <p className="subtitle pl-4"> &gt; HTML  | CSS</p>
          <p className="subtitle pl-4"> &gt; React | Redux</p>
          <p className="subtitle pl-4"> &gt; Wordpress</p>
          <p className="subtitle pl-4"> &gt; Carto</p>
          <p className="subtitle pl-4"> &gt; SQL</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title">Tools</p>
          <p className="subtitle pl-4 mt-2"> &gt; VS Code</p>
          <p className="subtitle pl-4"> &gt; Highcharts</p>
          <p className="subtitle pl-4"> &gt; Git</p>
          <p className="subtitle pl-4"> &gt; Linux Mint</p>
          <p className="subtitle pl-4"> &gt; DBeaver</p>
        </article>
      </div>
    </div>
  )
}

export default Skills
