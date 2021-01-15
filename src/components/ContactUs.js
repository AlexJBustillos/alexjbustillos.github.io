import React, { Component } from 'react';

export default class ContactUs extends Component {
    render () {
        let resumeData = this.props.resumeData;

        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Feel free to contact me for any work or suggestions below
                        </p>
                        <form id="form" className="topBefore" action="https://formspree.io/f/xjvpjqga" method="POST">
                            
                            <input id="name" placeholder="NAME" type="text" name="name" />
                            <input id="email" placeholder="E-MAIL" type="text" name="_replyto" />
                            
                            
                            <textarea id="message" placeholder="MESSAGE" name="message"></textarea>
            
                            <button id="submit" type="submit">Send</button>
                        </form>
                    </div>
                </div>
                {/* <div className="row">
                    <aside className="eight columns footer-widgets">
                        <div className="widget">
                            <h4>Linked in : {resumeData.linkedinId}</h4>
                        </div>
                    </aside>
                </div> */}
            </section>
        );
    }
}