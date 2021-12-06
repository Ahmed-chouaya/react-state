import React from "react";
class App extends React.Component{
    state = {
      Person: {
        fullName: "Naruto Uzumaki",
        bio: "I just love ramen",
        imgSrc: "./naruto.jpg",
        profession: "7th Hokage"
      },
      show: true,
      digit: 0
    };
  
    handleShowPerson = () => {
      this.setState({
        ...this.state,
        show: !this.state.show
      });
    };

    componentDidMount = () => {
      setInterval(() => {
        this.setState(prevState => ({
          digit: prevState.digit + 1,
        }));
      }, 1000);
    };
    
    
    render() {
      return (
        <>
          {this.state.show && (
            <>
              <h1>{this.state.Person.fullName}</h1>
              <h1>{this.state.Person.bio}</h1>
              <img style={{width:"300px",}} src={this.state.Person.imgSrc} alt="Naruto"></img>
              <h1>{this.state.Person.profession}</h1>
              <br></br>
            </>
          )}
          <div className='App'>counter: {this.state.digit}</div>
          <button onClick={this.handleShowPerson}>click here</button>
        </>
      );
    }
  };
export default App;
