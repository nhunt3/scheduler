import React from 'react';
import './index.css';
import ScheduleList from './schedule-list';
import UpdateModal from './update-modal';
import _ from 'lodash';
const axios = require('axios');
const selectedItemInitialState = {name: '', phone: '', id: null, time: ''};

export default class SchedulingApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            selectedItem: selectedItemInitialState,
            schedule: []
        };
    }

    async componentDidMount() {
        const response = await axios.get('http://localhost:3000/file.json');
        this.setState({schedule: response.data.schedule});
    }

    openModal(item) {
        this.setState({selectedItem: item});
        this.toggleModal();
    }

    closeModal() {
        this.setState({selectedItem: selectedItemInitialState});
        this.toggleModal();
    }

    toggleModal() {
        this.setState({modalIsOpen: !this.state.modalIsOpen})
    }

    updateField(e) {
        this.setState({
            selectedItem: {
                ...this.state.selectedItem,
                [e.target.name]: e.target.value
            }
        });
    };

    save(e) {
        e.preventDefault();
        const newSchedule = this.state.schedule.filter(item => item.id !== this.state.selectedItem.id);
        newSchedule.push(this.state.selectedItem);
        const sortedSchedule = _.sortBy(newSchedule, 'id');
        this.setState({schedule: sortedSchedule});
        this.toggleModal();
    }
    
    render() {
        return (
            <div className="app">
                <ScheduleList
                    openModal={(item) => this.openModal(item)}
                    schedule={this.state.schedule}
                    />
                <UpdateModal
                    modalIsOpen={this.state.modalIsOpen}
                    closeModal={() => this.closeModal()}
                    save={(e) => this.save(e)}
                    selectedItem={this.state.selectedItem}
                    updateField={(event) => this.updateField(event)}
                />
            </div>
        );
    }
}