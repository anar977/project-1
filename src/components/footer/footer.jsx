import React from 'react'
import './footer.css'

const footer = () => {
    return (
        <>
            <div id='footer' className="text-contact">

                <div className="container">
                    <hr />
                    <div className="cont">
                        <h1>CONTACT</h1>
                    </div>
                    <div className="txt-1">

                        <p>500 Terry Francine Street, <br />San Francisco, CA 94158</p>
                    </div>
                    <div className="txt-2">
                        <p>Tel: 123-456-7890 <br />Fax: 123-456-7890</p>
                    </div>
                    <div className="info">
                        <p>info@mysite.com</p>
                    </div>
                    <div className="social">
                        <img src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png" alt="" />
                        <img src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7d035ba85f6486680c2facedecdcf4d.png" alt="" />
                        <img src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png" alt="" />
                        <img src="https://static.wixstatic.com/media/78aa2057f0cb42fbbaffcbc36280a64a.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/78aa2057f0cb42fbbaffcbc36280a64a.png" alt="" />
                    </div>
                    <div className="wix">
                        <p>© 2035 by Personal Life Coach. <br /> Powered and secured by <a href="https://tr.wix.com/?utm_campaign=vir_created_with">Wix</a> </p>
                    </div>
                    <div className="form">
                        <div className="l-1">
                            <form action="">
                                <label htmlFor="Enter Your Name">Enter Your Name</label>
                            </form>
                            <input type="text" />
                        </div>
                        <div className="l-2">
                            <form action="">
                                <label htmlFor="Enter Your Email">Enter Your Email</label>
                            </form>
                            <input type="text" />
                        </div>
                        <div className="l-3">
                            <form action="">
                                <label htmlFor="Enter Your Message">Enter Your Subject</label>
                            </form>
                            <input type="text" />
                        </div>
                        <div className="l-4">
                            <form action="Massage">Massage</form>
                            <textarea name="" id=""></textarea>
                        </div>
                        <div className="submit">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default footer
