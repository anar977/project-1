import React from 'react'
import './Blog.css'

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="roww">
            <div className="hr"></div>
            <h1>THOUGHTS & <br />NOTES</h1>
        <div className="left-1">
        </div>
        <div className="right-1">
            <div className="h-editt">
            <img className='guest'width="40" height="40" src="https://img.icons8.com/ios-glyphs/32/737373/user-male-circle.png" alt="user-male-circle"/>
            <h2>Admin</h2>
            <ul className='jun'>
            <li>Jun 3, 2023</li>
            <li><span className='dot'></span></li>
            <li>1 min</li>
            </ul>
            <h3>10 tips for relaxation</h3>
            <p>Create a blog post subtitle that summarizes your post in a <br /> few short, punchy sentences and entices your audience to <br /> continue reading....</p>
           <div className="hr-1"></div>
           <div className="jun-1">
            <ul>
              <li>0 views</li>
              <li>0 comments</li>
            </ul>
           </div>
            </div>
        </div>
        <div className="left-2">

        </div>
        <div className="right-2">
          <div className="edit-1">
          <div className="h-editt">
            <img className='guest'width="40" height="40" src="https://img.icons8.com/ios-glyphs/32/737373/user-male-circle.png" alt="user-male-circle"/>
            <h2>Admin</h2>
            <ul className='jun'>
            <li>Jun 3, 2023</li>
            <li><span className='dot'></span></li>
            <li>2 min</li>
            </ul>
            <h3>Why taking action creates success</h3>
            <p>Create a blog post subtitle that summarizes your post in a <br /> few short, punchy sentences and entices your audience to <br /> continue reading....</p>
           <div className="hr-1"></div>
           <div className="jun-1">
            <ul>
              <li>0 views</li>
              <li>0 comments</li>
            </ul>
           </div>
            </div>
          </div>

          <div className="arrow">
            <img className='arrow-img' width="24" height="24" src="https://img.icons8.com/material-outlined/24/back--v1.png" alt="back--v1"/> 
            <ul>
              <li>1</li>
            <li>2</li>
            <li>3</li>
            </ul>
            <img className='arrow-img-1'width="24" height="20" src="https://img.icons8.com/ios-filled/24/more-than.png" alt="more-than"/>
          </div>
        </div>
        </div>
      </div>
      <div className="blog-1">
        
      </div>
      
    </>
  )
}

export default Blog
