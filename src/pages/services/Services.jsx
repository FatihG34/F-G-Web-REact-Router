import React from 'react'
import NavSubscribe from '../../components/navbar/NavSubscribe'

const Services = () => {
    return (
        <div>
            <NavSubscribe />
            <div className='row mt-4'>
                <div className='col-8 p-3'>
                    <div className='text-start p-4 m-3' style={{ backgroundColor: 'lightgray' }}>
                        <h3>Website Design</h3>
                        <p>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.</p>
                        <p>Pricing $1.000 - $3.000</p>
                    </div>
                    <div className='text-start p-4 m-3' style={{ backgroundColor: 'lightgray' }}>
                        <h3>Website Maintenance</h3>
                        <p>Develops, designs and delivers web site structure for Internet/Intranet sites. Documents, tests, implements and maintains web pages and multimedia design using appropriate web publishing, editing and graphics applications.</p>
                        <p>Pricing $250 per month</p>
                    </div>
                    <div className='text-start p-4 m-3' style={{ backgroundColor: 'lightgray' }}>
                        <h3>Website Hosting</h3>
                        <p>Web hosting is an online service that enables you to publish your website or web application on the internet. When you sign up for a web hosting service, you basically rent some space on a physical server where you can store all the files and data necessary for your website to work properly.</p>
                        <p>Pricing $25 per month</p>
                    </div>
                </div>
                <div className='col-4 text-start mt-5'>
                    <form className='w-75 p-3 rounded-2' style={{ backgroundColor: '#35414A' }}>
                        <div class="mb-3">
                            <label for="name" class="form-label text-white">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Name" aria-label="Name" aria-describedby="addon-wrapping" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label text-white">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Email" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="textarea" class="form-label text-white">Message</label>
                            <textarea class="form-control" id="textarea" rows="3" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-warning w-50">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Services