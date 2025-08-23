
			<footer id="footer" class="bg-color-primary border-top-0">
				<div class="container py-4">
					<div class="row py-5">
						<div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
							<h5 class="text-3 mb-3 opacity-7">NEWSLETTER</h5>
							<p class="pe-1 text-color-light">Keep up on our always evolving product features and technology. Enter your e-mail address and subscribe to our newsletter.</p>
							<div class="alert alert-success d-none" id="newsletterSuccess">
								<strong>Success!</strong> You've been added to our email list.
							</div>
							<div class="alert alert-danger d-none" id="newsletterError"></div>
							<form id="newsletterForm" action="/wp-content/themes/understrap-child-1.2.0/porto-assets/php/newsletter-subscribe.php" method="POST" class="me-4 mb-3 mb-md-0">
								<div class="input-group input-group-rounded">
									<input class="form-control form-control-sm bg-light" placeholder="Email Address" name="newsletterEmail" id="newsletterEmail" type="email">
									<button class="btn btn-light text-color-dark" type="submit"><strong>GO!</strong></button>
								</div>
							</form>
							
						</div>
						<div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
							<h5 class="text-3 mb-3 opacity-7">LATEST POSTS</h5>
							<ul class="list-unstyled mb-0">
								<li class="mb-2 pb-1">
									<a href="#">
										<p class="text-3 text-color-light mb-0"><i class="fas fa-angle-right text-color-light"></i><strong class="ms-2 font-weight-semibold">Lorem ipsum dolor sit amet.</strong></p>
										<p class="text-2 text-color-light opacity-8 mb-0">12:55 AM Dec 19th</p>
									</a>
								</li>
								<li class="mb-2 pb-1">
									<a href="#">
										<p class="text-3 text-color-light mb-0"><i class="fas fa-angle-right text-color-light"></i><strong class="ms-2 font-weight-semibold">Ipsum dolor sit amet.</strong></p>
										<p class="text-2 text-color-light opacity-8 mb-0">12:55 AM Dec 19th</p>
									</a>
								</li>
								<li>
									<a href="#">
										<p class="text-3 text-color-light mb-0"><i class="fas fa-angle-right text-color-light"></i><strong class="ms-2 font-weight-semibold">Lorem ipsum dolor sit amet.</strong></p>
										<p class="text-2 text-color-light opacity-8 mb-0">12:55 AM Dec 19th</p>
									</a>
								</li>
							</ul>
						</div>
						<div class="col-md-6 col-lg-3 mb-4 mb-md-0">
							<h5 class="text-3 mb-3 opacity-7">CONTACT US</h5>
							<ul class="list list-icons list-icons-lg">
								<li class="mb-1"><i class="far fa-dot-circle text-color-light"></i><p class="m-0 text-color-light">234 Street Name, City Name</p></li>
								<li class="mb-1"><i class="fab fa-whatsapp text-color-light"></i><p class="m-0"><a class="text-color-light" href="tel:8001234567">(800) 123-4567</a></p></li>
								<li class="mb-1"><i class="far fa-envelope text-color-light"></i><p class="m-0"><a class="text-color-light" href="mailto:mail@example.com">mail@example.com</a></p></li>
							</ul>
						</div>
						<div class="col-md-6 col-lg-2">
							<h5 class="text-3 mb-3 opacity-7">FOLLOW US</h5>
							<ul class="header-social-icons social-icons">
								<li class="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f text-2"></i></a></li>
								<li class="social-icons-x"><a href="http://www.x.com/" target="_blank" title="X"><i class="fab fa-x-twitter text-2"></i></a></li>
								<li class="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in text-2"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="footer-copyright bg-color-primary bg-color-scale-overlay bg-color-scale-overlay-1">
					<div class="bg-color-scale-overlay-wrapper">
						<div class="container py-2">
							<div class="row py-4">
								<div class="col-lg-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-2 mb-lg-0">
									<a href="index.html" class="logo pe-0 pe-lg-3">
										<img alt="Porto Website Template" src="img/logo-footer.png" class="opacity-5" height="32">
									</a>
								</div>
								<div class="col-lg-7 d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
									<p class="text-color-light">© Copyright 2025. All Rights Reserved.</p>
								</div>
								<div class="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end">
									<nav id="sub-menu">
										<ul>
											<li class="border-0"><i class="fas fa-angle-right text-color-light"></i><a href="page-faq.html" class="ms-1 text-decoration-none text-color-light"> FAQ's</a></li>
											<li class="border-0"><i class="fas fa-angle-right text-color-light"></i><a href="sitemap.html" class="ms-1 text-decoration-none text-color-light"> Sitemap</a></li>
											<li class="border-0"><i class="fas fa-angle-right text-color-light"></i><a href="contact-us.html" class="ms-1 text-decoration-none text-color-light"> Contact Us</a></li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</div>

<?php wp_footer(); ?>

</body>

</html>