import React from 'react';
import RegisterServiceForm from '../../service-form/RegisterServiceForm';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import InvalidAccessMessage from '../../controls/InvalidAccessMessage';

//Register Service page
class RegisterServices extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
    console.log(this.props.isAdmin);
    if(this.props.loggedin && this.props.isAdmin){
      return(
        <section className="content">
          <RegisterServiceForm/>
        </section>
      );
    }

    return (
          <section className="content">
            <InvalidAccessMessage/>
          </section>
    );
  
  }

}

const mapStateToProps = state => {
  return { loggedin: state.usersReducer.loggedin,
          isAdmin: state.usersReducer.isAdmin };
};

export default connect(
  mapStateToProps,
  actions
)(RegisterServices);
