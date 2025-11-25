import React from 'react'
import '../Footer/Footer.css'
import logoimg from '../Assets/logo/image.png'
import { Link } from 'react-router-dom';
const Footer = () => {
	const socialLinks = [
		{
			href: 'https://www.linkedin.com/company/techland-it-solutions/',
			svg: <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512" >
				<path
					d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
				></path>
			</svg >,
			label: 'LinkedIn',
		},
		{
			href: `https://wa.me/917842385604?text=${encodeURI("Hi Techland, \nI'm inquiring about the website development and mobile app development")}`,
			svg: <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16" >
				<path
					d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
				></path>
			</svg >,
			label: 'Whats App',
		},
		{
			href: 'tel:+917842385604',
			svg: <svg className="socialSvg phoneSvg" width="32" viewBox="0 0 32 32" height="32" fill="none" >
				<path strokeWidth="2" strokeLinecap="round" stroke="#fff" fillRule="evenodd" d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z" clipRule="evenodd"></path>
			</svg >,
			label: 'Phone',
		},

		// {
		// 	href: 'https://twitter.com/your-profile',
		// 	svg: <svg className="socialSvg twitterSvg" viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" >
		// 		<path
		// 			d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
		// 		></path>
		// 	</svg >,
		// 	label: 'Twitter',
		// },
		{
			href: 'https://www.instagram.com/techlanditsolutions?igsh=MW1hemQ4YngxMWQ2aQ==',
			svg: <svg className="socialSvg instagramSvg" viewBox="0 0 16 16" >
				<path
					d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
				></path>
			</svg >,
			label: 'Instragram',
		},

	];

	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
				<defs>
					<linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style={{ stopColor: "#c6c2f5", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#b554ff", stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: "#f9c4f6", stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5" fill="url(#grad3)"></path>
				<path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" fill="url(#grad3)"></path>
			</svg>
			<footer className="footer">
				<div className="container">
					<div className="widget-wrapper">
						<div className="row">
							<div className="col-xl-3 col-md-6">
								<div className="footer-widget">
									<div className="logo mb-35">
										<Link to="/"> <img src={logoimg} alt="" style={{ height: '80px' }} /> </Link>
									</div >
									<p className="desc mb-35" > We are expert designer team, There have a lot of designer and
										developer If you have any project you can hire Create a website.</p >


									<div className="socialcard mt-3" >
										{
											socialLinks.map((link, idx) => (
												<a key={link.label} href={link.href} aria-label={link.label} target='_blank' rel="noreferrer" className={`socialContainer container${idx}`}>
													{link.svg}
												</a>
											))
										}


									</div >

								</div >
							</div >

							<div className="col-xl-2 offset-xl-1 col-md-5 offset-md-1 col-sm-6" >
								<div className="footer-widget" >
									<h3>Link</h3>
									<ul className="links" >
										<li> <a href='/'>Home</a> </li>
										<li> <a href='/about'>About us</a> </li>
										{/* <li> <a href='/services'>Services</a> </li> */}
										<li> <a href='/portfolio'>Portfolio</a> </li>
										<li> <a href='/team'>Our Team</a> </li>
										<li> <a href='/contact'>Contact us</a> </li>
									</ul >
								</div >
							</div >

							<div className="col-xl-3 col-md-6 col-sm-6" >
								<div className="footer-widget" >
									<h3>Services</h3>
									<ul className="links" >
										<li> <a href='/services'>Mobile App Development</a> </li>
										<li> <a href='/services'>Web Development</a> </li>
										<li> <a href='/services'>Digital Marketing</a> </li>
										<li> <a href='/services'>Custom Software Development</a> </li>
										<li> <a href='/services'>UI/UX Design</a> </li>
										<li> <a href='/services'>Staffing Services</a> </li>
									</ul >
								</div >
							</div >

							<div className="col-xl-3 col-md-6">
								<div className="footer-widget">
									<h3>Contact</h3>
									<ul className="links">
										<li ><a href="tel:+917842385604">+917842385604</a></li>
										<li><a href="mailto:helldesigner@gmail.com">info@techlanditsolutions.com</a></li>
										<li><a href="https://maps.app.goo.gl/N13ixNnC7UHf7nwT9" rel="noreferrer" target="_blank">Flat No. 101, Sirisampada Hitec Apartment, H. No. 1-63/C/8/2,Plot No. 2, Block No. 8, Kavuri Hills Madhapur, Serilingampally, Hyderabad, Telangana 500081</a></li>
									</ul>

								</div>
							</div>
							<div className='footer-map' style={{ display: 'flex', gap: '10%' }}>
								<div className="working-hours" style={{ width: '100%', height: '100%', marginTop: '20px' }}>
									<h3>Find Us</h3>
									<div className="gmap_canvas">
										<iframe title='OfficeLocation' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.263340846998!2d78.37701741037169!3d17.447105483381275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb938fa04b952d%3A0x2d0c448b127e06e3!2sTechland%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1737129743764!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
									</div>
								</div>
								<div className="working-hours" style={{ width: '60%' }}>
									<h3>Working Hours</h3>
									<p><i className="fas fa-clock"></i> Monday - Friday: 9:30 AM - 6:30 PM</p>
									{/* <p><i className="fas fa-clock"></i> Saturday: 10:00 AM - 4:00 PM</p> */}
									<p><i className="fas fa-clock"></i> Sunday: Closed</p>
								</div>


							</div>

						</div >
					</div >

					<div className="copy-right" >
						<span>Copyright by @Techland- 2025</span>
					</div >

				</div >
			</footer >

		</>
	)
}

export default Footer