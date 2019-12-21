import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

class People extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            people: []
        }
    }
    componentDidMount() {
        setTimeout(() =>
            fetch('https://swapi.co/api/people/')
                .then(response => response.json())
                .then(data => this.setState({ people: data.results, loading: false }))
        , 2000);
    }

    render() {
        var html = [];
        if(this.state.loading){
            return (
                <div>
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={5000} //3 secs
                    />
                </div>
            );
        }
        if(this.state.people.length > 0){
            let id = -1;
            html = this.state.people.map(person =>
                {
                  id++;
                  return (<div key={id}><b>{person.name}</b> is {person.height} cm tall</div>)
                }
            );
            console.log(html);
        }
        return (
            <div>
                {html}
            </div>
        );
    }
}

export default People;