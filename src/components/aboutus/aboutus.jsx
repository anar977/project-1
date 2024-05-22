import React from 'react'
import './aboutus.css'



const Aboutus = () => {
 
  return (
    <>
      <div id='aboutus' className="about-me">
                <div className="box-1">
                    <hr />
                    <h1>ABOUT <br /> ME</h1>
                    <p>I'm a paragraph. Click here to add your own text and <br /> edit me. It’s easy. Just click “Edit Text” or double <br /> click me to add your own content and make changes <br /> to the font. Feel free to drag and drop me anywhere <br /> you like on your page. ​</p> <br />
                    <p>This is a great space to write long text about your <br /> company and your services. You can use this space to <br /> go into a little more detail about your company. Talk <br /> about your team and what services you provide.</p>
                    <div className="button-1">
                        <button className='b-1'>Read More</button>
                        <button className='b-2'>Free Consultation</button>
                    </div>

                </div>


                <div className="box-2">
                    <img src="https://static.wixstatic.com/media/ea71bb_e7959a5be116482b9727a9be900d2d35~mv2_d_5454_3840_s_4_2.jpg/v1/fill/w_950,h_895,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_e7959a5be116482b9727a9be900d2d35~mv2_d_5454_3840_s_4_2.jpg" alt="" />
                </div>

            </div> 
    </>
  )
}

export default Aboutus
