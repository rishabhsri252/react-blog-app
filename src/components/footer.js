import React, {Component} from 'react'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: new Date().getFullYear()
        }
    }
    render() { 
        return (
            <footer>
                    <p> &copy {this.state.year} Designed and developed by Rishabh Srivastava</p>
                    <div className="cont-img">
                        <a href="tel:9770733421">
                            <img src="../assets/images/mob.png" alt="telephone icon" />
                        </a>
                        <a href="mailto:rishabhsri252@gmail.com">
                            <img src="../assets/images/email.png" alt="mail icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/rishabh-srivastava-621b33228">
                            <img src="../assets/images/linkdin.png" alt="linkdin icon" />
                        </a>
                    </div>
                </footer>
        )
    }
}

export default Footer