import React, {Component} from 'react';
import './Calendar.css';
import {Event} from './Event';

export class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventsList: {},
        }
    }

    listEvents = async () => {
        const data = await fetch('http://localhost:3001/api/get/events', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
        },
            body: {}
        });
        return await data.json()
    };

    async componentDidMount() {
        const eventsList = await this.listEvents();
        this.setState({
            eventsList : eventsList.data
        });
    }

    render() {
        return (
            <div className="calendar">
                <div className="containerTitle"> Évènements à venir</div>
                <div className="flexCtnEvent">
                {
                    this.state.eventsList.length ? this.state.eventsList.map((event) => (
                        <Event
                            place={event.place}
                            date={event.date}
                            name={event.name}
                            key={event.date + '-' + event.name + '-' + event.place}
                        />
                    )) : <div> No no no</div>
                }
                </div>
            </div>
        );
    }
}

export default Calendar;
