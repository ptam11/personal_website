import React, { Component } from 'react';
import './Contact.css';
import SectionHeader from './SectionHeader';
import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000"

class Contact extends Component {
  state = {
    call: {
      recipient: '',
      callError: ''
    },
    text: {
      recipient: '',
      textMessage: '',
      textError: ''
    }
  };

  async sendText(e) {
    e.preventDefault();
    const { recipient, textMessage } = this.state.text;
    try {
      await axios({
        method: 'post',
        url: '/.netlify/functions/server/api/send-text',
        params: { recipient, textMessage }
      });
      this.setState({ text: { recipient: '', textMessage: '', textError: '' } });
    } catch (err) {
      console.error('err', err.response.data);
      this.setState({ text: { ...this.state.text, textError: err.response.data.errorMessage } });
    }
  }

  async sendCall(e) {
    e.preventDefault();
    const { recipient } = this.state.call;
    try {
      await axios({
        method: 'post',
        url: '/.netlify/functions/server/api/send-call',
        params: { recipient }
      });
      this.setState({ call: { recipient: '', callError: '' } });
    } catch (err) {
      console.error('err', err.response.data);
      this.setState({ call: { ...this.state.call, callError: err.response.data.errorMessage } });
    }
  }

  render() {
    const { call, text } = this.state;

    return (
      <div className="Contact d-flex justify-content-center mb-5" id="contact">
        <div className="Contact-container container">
          <SectionHeader title="C O N T A C T" />
          <div className="Contact-row row d-flex justify-content-center">
            <div
              className="LI-profile-badge"
              data-version="v1"
              data-size="large"
              data-locale="en_US"
              data-type="vertical"
              data-theme="light"
              data-vanity="parcotam"
            >
              <a className="LI-simple-link" href="https://www.linkedin.com/in/parcotam?trk=profile-badge">
                Parco Tam, CFA
              </a>
            </div>
          </div>
          <br />
          <div className="Contact-row row d-flex justify-content-center">
            <p>
              <b>ptam1556@gmail.com </b>{' '}
            </p>
          </div>
          <div className="Contact-row row d-flex justify-content-center">
            <form className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">Call RickRoll:</div>
                </div>
                <input
                  value={call.recipient}
                  onChange={(e) => this.setState({ call: { ...call, recipient: e.target.value } })}
                  placeholder="Enter Your Phone Number"
                  type="text"
                  className="form-control"
                />
                <br />
                <div className="input-group-append">
                  <span className="btn btn-success" onClick={this.sendCall.bind(this)}>
                    {' '}
                    Place Call{' '}
                  </span>
                </div>
              </div>
              <small className="text-danger">{call.callError}</small>
              <br />
            </form>
          </div>
          {/* <form className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<div className="input-group-text">Text Me:</div>
							</div>
						<input value={text.recipient}
							onChange={e => this.setState({ text: {...text, recipient: e.target.value}})}
							placeholder="Enter Your Phone Number" 
							type="text"
							className="form-control"/>
						<br />
						<br />
						<textarea value={text.textMessage}
							onChange={e => this.setState({ text: {...text, textMessage: e.target.value}})} 
							className="form-control"
							placeholder="Enter Text Message"/>
						<button className="btn btn-success" onClick={this.sendText.bind(this)}> Send Text</button>
						<br />
						</div>
						<br />
						<small className="text-danger">{text.textError}</small>
						<br />
					</form > */}
        </div>
      </div>
    );
  }
}

export default Contact;
