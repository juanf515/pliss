
import React, {PureComponent} from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends PureComponent{

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         author: props.author
    //     }
    // }

    state ={
        author: 'Leonidas'
         
    }
    // handleClick = (evento) => {
    //     // console.log(this.props.title)
    //     this.setState({
    //         author: 'Ricardo peña'
    //     })
    // }

    render(){

        return(
            <div className="Media" onClick={this.props.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image" src={this.props.cover} alt="" width={260} height={160}/>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string, 
    type: PropTypes.oneOf(['video', 'audio']),
}
export default Media;
