import React from 'react';
import './App.css';

function App() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src="https://finestdevs.com/demos/shade-preview/image/logo/logo-black.png" alt="" />
					</div>
					<li><a href="#free">Free Landing Pages</a></li>
					<li><a href="#features">Features</a></li>
					<li><a href="#services">Services</a></li>
					<li><a href='#prices'>Prices</a></li>
          <li><a href='#Contact'>Contact</a></li>
				</ul>

				<div class="rightNav">
										<button class="btn btn-sm">Get Started</button>
				</div>
			</nav>


      <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h2>
                          PRESENT YOUR SERVICE
                        </h2>
                        <h1 class="text-big">
                            Make Landing page 
                            fast and easily
                        </h1>
                        <p class="text-small">
                            Create custom landing pages with shades that convert
                            more visitors that any website-no coding required.
                        </p>

                        
                    </div>
                </div>
            </section>
			<div class="Centernave">
                    <input type="text" name="" id="Enter your email" />
                    <button class="btn btn-sm">Subscribe</button>
                </div>
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
	)
}

export default App
