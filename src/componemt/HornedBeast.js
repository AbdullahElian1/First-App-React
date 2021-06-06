import React from 'react';


class HornedBeast extends React.Component{

    render(){
        return(
            <div className='horned'>
               <h2>{this.props.titleName}</h2>
               <p>{this.props.des}</p>
               <img  src={this.props.url} alt={this.props.alter} />
            </div>
        );
    }
}

export default HornedBeast;