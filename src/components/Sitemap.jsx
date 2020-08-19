import React from 'react'
import Relocate from './Relocate'
const Sitemap = () => {
  return(
    <React.Fragment>
      <h1 className="title mt-6 pt-2">José Romero Sitemap</h1>
      <div className="columns my-6">
        <div className="column is-half">
          <p className="subtitle is-6 mt-3">
            <a target="_blank" rel="noopener noreferrer" href='/about'>about</a>.
          </p>
          <p className="subtitle is-6 mt-3">
            <a target="_blank" rel="noopener noreferrer" href='/'>home</a>.
          </p>
        </div>
        <div className="column">
          <p className="subtitle is-6 mt-3">
            <a target="_blank" rel="noopener noreferrer" href='/portfolio'>portfolio</a>.
          </p>
          <p className="subtitle is-6 mt-3">
            <a target="_blank" rel="noopener noreferrer" href='https://josedromero.com/static/media/Jose-Romero-resume.cd3321ef.pdf'>resume</a>.
          </p>
        </div>
      </div>
    <Relocate />
    </React.Fragment>
  )
}

export default Sitemap
