import React from 'react'
import NavSubscribe from '../../components/navbar/NavSubscribe'

const About = () => {
    return (
        <div>
            <NavSubscribe />
            <div className='row mt-4 text-start w-100'>
                <div className='col-8 p-3'>
                    <h1 className='p-4 m-3'>About Us</h1>
                    <div className='text-start p-4 m-3' style={{ backgroundColor: 'lightgray' }}>
                        <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.</p>
                        <p>Pricing $1.000 - $3.000</p>
                    </div>
                    <div className='text-start p-4 m-3' style={{ backgroundColor: 'lightgray' }}>
                        <p>Develops, designs and delivers web site structure for Internet/Intranet sites. Documents, tests, implements and maintains web pages and multimedia design using appropriate web publishing, editing and graphics applications.</p>
                        <p>Pricing $250 per month</p>
                    </div>
                    <div class="'p-4 m-3">
                        {/* <!-- Video --> */}
                        <div class="embed-responsive embed-responsive-16by9 mb-4">
                            <iframe width="800" height="400" class="embed-responsive-item" src="https://www.youtube.com/embed/Nn--GKhQLHQ" title="Student Spotlight | Sadullah | Full Stack Development Student" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className='col-4 text-start mt-5 text-white p-3' style={{ backgroundColor: '#35414A', width: '30rem', height: '20rem' }}>
                    <h3>What We Do</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea, consequatur ipsam architecto cumque pariatur consectetur. Necessitatibus iusto quia repellendus ab incidunt ullam soluta dolores adipisci laborum totam, corporis, temporibus repudiandae, dicta quasi eaque labore eveniet libero praesentium accusamus. Delectus maxime numquam deserunt maiores voluptatibus magnam iste, odit eius quod!</p>
                </div>
            </div>
        </div>
    )
}

export default About