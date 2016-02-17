import React, { Component } from 'react'
import $ from 'jquery'

// Components
import IconLink from 'components/icon-link'
import PageDescription from 'components/page-description'

// Content
import socialLinks from 'content/social-links'

// Utilities
import { styleHelper } from 'utilities/style-helper'

// Styles
const styles = [
	require('styl/contact')
]

class Contact extends Component {
	constructor() {
		super()

		this.state = {
			emailAwaitingResponse: false,
			emailSentResponse: '',
			emailSentSuccessfully: false
		}
	}

	emailSentResponse(res) {
		if (res) {
			if (res.success) {
				this.setState({emailSentSuccessfully: true})
				return 'Message sent succesfully. Please allow some time for us to receive, read, and respond back ^_^.'
			} else {
				return res.message
			}
		}
	}

	setReasonForContactFromHashtag() {
		let hashtag = location.hash.substr(1)

		let items = document.querySelectorAll('[name="reason"]')
		for(let i in items) {
			let item = items[i]
			if (item.value === hashtag) {
				item.setAttribute('checked', true)
				return
			}
		}
	}

	setContactFormSubmissionAJAX() {
		let invalidClass = 'is-invalid'
		let errorElementSelector = '.js-contact-error'

		let contactForm = $('.js-contact-form')
		this.contactFormSubmitButton = $('.js-contact-form [type="submit"]')

		let validations = $('.js-contact-validate')

		validations.click(function() {
			$(this).parent().find(errorElementSelector).removeClass(invalidClass)
		})

		this.contactFormSubmitButton.click((e) => {
			e.preventDefault()

			// Check if waiting for email response
			// Prevent sending if email awaiting response
			if (this.state.emailAwaitingResponse) {
				return
			}

			// Check validation on fields
			let validationErrors = []
			for (let i = 0, l = validations.length; i < l; i++) {
				let validation = $(validations[i])
				let re = new RegExp(validation.data('pattern'))
				let text = validation.val()

				if (!re.test(text)) {
					validationErrors.push(validation)
				}
			}

			if (validationErrors.length) {
				for (let i = 0, l = validationErrors.length; i < l; i++) {
					let validationError = $(validationErrors[i])
					validationError.parent().find(errorElementSelector).addClass(invalidClass)
				}

				return
			}

			this.setState({
				emailAwaitingResponse: true,
				emailSentResponse: 'Sending...'
			})

			// Ready data for sending
			let data = {}
			contactForm.serializeArray().forEach((item) => {
				data[item.name] = item.value
			})

			// Send email
			$.ajax({
				type: 'POST',
				url: contactForm.attr('action'),
				data: data,
				success: (res) => {
					this.setState({
						emailAwaitingResponse: false,
						emailSentResponse: this.emailSentResponse(res)
					})
				},
				dataType: 'json'
			})
		})
	}

	unsetContactFormSubmissionAJAX() {
		this.contactFormSubmitButton.click(false)
	}

	componentDidMount() {
		this.setReasonForContactFromHashtag()
		this.setContactFormSubmissionAJAX()
	}

	componentWillUnmount() {
		this.unsetContactFormSubmissionAJAX()
	}

	renderSentMessage() { return (
		<section className={'bubble bubble--message ' + (this.state.emailAwaitingResponse || this.state.emailSentSuccessfully ? 'bubble--success' : 'bubble--error')}>
			<p className="callout">{this.state.emailSentResponse}</p>
		</section>
	)}

	renderContactFields() { return (
		<div>
			<div className="contact__fields">
				<label className="contact__field contact__field--spacing">
					<input className="contact__field__input js-contact-validate" type="text" name="name" placeholder="Name" data-pattern="^([\w\d\s-\.]{2,64})$" required autofocus />
					<small className="contact__field__error js-contact-error">Please provide a name between 2 and 64 characters.</small>
				</label>
				<label className="contact__field contact__field--spacing">
					<input className="contact__field__input js-contact-validate" type="email" name="email" placeholder="Email" data-pattern="^(\S+@\S+\.\S+)$" required />
					<small className="contact__field__error js-contact-error">Please provide a valid email address.</small>
				</label>
				<label className="contact__field contact__field--spacing">
					<input className="contact__field__input js-contact-validate" type="text" name="subject" placeholder="Subject" data-pattern="^(.{2,64})$" required />
					<small className="contact__field__error js-contact-error">Please provide a subject between 2 and 64 characters.</small>
				</label>
			</div>

			<div className="contact__message">
				<textarea className="contact__field__input js-contact-validate" name="message" placeholder="Message" data-pattern="^(.{2,800})$" required />
				<small className="contact__field__error js-contact-error">Ensure your message is between 2 and 800 characters long.</small>
			</div>

			<div className="contact__choices">
				<fieldset className="contact__choices__wrapper">
					<legend className="contact__choices__heading">Reason for Contact</legend>
					<div className="contact__reasons">
						<div className="contact__reason contact__reason--separator" />

						<div className="contact__reason">
							<div className="contact__choices__button">
								<input className="contact__choices__input" type="radio" name="reason" value="general" id="reasonGeneral" defaultChecked required /><label className="contact__choices__label" htmlFor="reasonGeneral">General</label>
							</div>
						</div>

						<div className="contact__reason contact__reason--separator">
							<hr className="contact__reason__separator" />
						</div>

						<div className="contact__reason">
							<div className="contact__choices__button" title="testing">
								<input className="contact__choices__input" type="radio" name="reason" value="press" id="reasonPress" required /><label className="contact__choices__label" htmlFor="reasonPress">Press</label>
							</div>
						</div>

						<div className="contact__reason contact__reason--separator">
							<hr className="contact__reason__separator" />
						</div>

						<div className="contact__reason">
							<div className="contact__choices__button">
								<input className="contact__choices__input" type="radio" name="reason" value="support" id="reasonSupport" required /><label className="contact__choices__label" htmlFor="reasonSupport">Support</label>
							</div>
						</div>

						<div className="contact__reason contact__reason--separator">
							<hr className="contact__reason__separator" />
						</div>

						<div className="contact__reason">
							<div className="contact__choices__button">
								<input className="contact__choices__input" type="radio" name="reason" value="submission" id="reasonSubmission" /><label className="contact__choices__label" htmlFor="reasonSubmission">Submission</label>
							</div>
						</div>

						<div className="contact__reason contact__reason--separator" />
					</div>
				</fieldset>
			</div>

			<button className="contact__field__input contact__send-button" type="submit" name="submit" value="Send">{this.state.emailAwaitingResponse ? this.state.emailSentResponse : 'Send'}</button>
		</div>
	)}

	renderContactForm() { return (
		<div className="contact__form-container">
			<form className="contact__form js-contact-form" action="/contact/send" method="post">
				{!this.state.emailSentSuccessfully && this.renderContactFields()}
				{!this.state.emailAwaitingResponse && this.state.emailSentResponse && this.renderSentMessage()}
			</form>
		</div>
	)}

	render() { return (
		<article>
			<section className="bubble">
				<PageDescription
					title="Contact Us"
					subtitle="Get in Touch"
				/>
			</section>

			<section className="bubble">
				<div className="contact">
					{this.renderContactForm()}

					<div className="contact__extras-container">
						<h2>Social Media</h2>
						<nav>
							<ul className="contact__social-links">
								<li className="contact__social-link">
									<IconLink href={socialLinks.twitter.link} icon={socialLinks.twitter.icon} external>Twitter</IconLink>
								</li>
								<li className="contact__social-link">
									<IconLink href={socialLinks.facebook.link} icon={socialLinks.facebook.icon} external>Facebook</IconLink>
								</li>
								<li className="contact__social-link">
									<IconLink href={socialLinks.youtube.link} icon={socialLinks.youtube.icon} external>YouTube</IconLink>
								</li>
							</ul>
						</nav>

						<h2>Subscribe to Newsletter</h2>
						<form className="contact__form validate" action="//pulsengame.us2.list-manage.com/subscribe/post?u=c8a5409b150cb22ef3549dd35&amp;id=67c909b1a6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" _lpchecked="1">
							<div className="contact__field">
								<input className="contact__field__input" type="email" name="EMAIL" placeholder="Email" required />
							</div>

							<button className="contact__field__input contact__send-button" type="submit" name="subscribe" value="Subscribe">Subscribe</button>
						</form>
					</div>
				</div>
			</section>
		</article>
	)}
}

module.exports = styleHelper(Contact, styles)
