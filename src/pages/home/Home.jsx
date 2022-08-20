import React from 'react'
import NavSubscribe from '../../components/navbar/NavSubscribe';
import html from '../../assets/logo_html.png'
import css from '../../assets/logo_css.png'
import brush from '../../assets/logo_brush.png'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <NavSubscribe />
            <div className='row m-5'>
                <div className='col col-md-12 col-lg-4' style={{ cursor: 'pointer' }} onClick={() => navigate('/html')}>
                    <img src={html} alt="html" />
                    <h5>HTML</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate natus dolorum animi velit quos blanditiis eos, voluptatum quasi modi quaerat fuga assumenda itaque, eius facilis iusto, cum sint amet. Repellendus ducimus ipsa consequuntur autem nulla earum sit commodi velit tempore similique quas quae in facilis, dolores quo, praesentium quasi.</p>
                </div>
                <div className='col col-md-12 col-lg-4' style={{ cursor: 'pointer' }} onClick={() => navigate('/css')}>
                    <img src={css} alt="css" />
                    <h5>CSS</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate natus dolorum animi velit quos blanditiis eos, voluptatum quasi modi quaerat fuga assumenda itaque, eius facilis iusto, cum sint amet. Repellendus ducimus ipsa consequuntur autem nulla earum sit commodi velit tempore similique quas quae in facilis, dolores quo, praesentium quasi.</p>
                </div>
                <div className='col col-md-12 col-lg-4' style={{ cursor: 'pointer' }} onClick={() => navigate('/brush')}>
                    <img src={brush} alt="brush" />
                    <h5>BRUSH</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate natus dolorum animi velit quos blanditiis eos, voluptatum quasi modi quaerat fuga assumenda itaque, eius facilis iusto, cum sint amet. Repellendus ducimus ipsa consequuntur autem nulla earum sit commodi velit tempore similique quas quae in facilis, dolores quo, praesentium quasi.</p>
                </div>
            </div>
        </div>
    )
}

export default Home