import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Review(122)</div>

        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem cupiditate blanditiis obcaecati consequatur aliquam animi velit recusandae dolorum quis eaque, delectus est consectetur sed voluptatem aspernatur. Velit, dicta enim.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, doloribus! Pariatur soluta exercitationem fugiat earum nihil, consectetur, deserunt dolorum vero repellendus dolores dignissimos, aliquam voluptas at recusandae asperiores dolore. Dolorum!</p>
        </div>

    </div>
  )
}

export default DescriptionBox