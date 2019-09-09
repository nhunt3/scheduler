import React from 'react';
import './index.css';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

export default function UpdateModal (props) {
    const phoneValidation = {
        pattern: '^\\(?[0-9]{3}[\\)-]?[0-9]{3}-?[0-9]{4}$',
        title: 'Not a valid phone number: Make sure you have 10 digits'
    };
    
    return (
        <div>
            <Modal
                open={props.modalIsOpen}
                onClose={props.closeModal}
                >
            <div className="paper">
                <form onSubmit={props.save}>
                    <h2>Create an Appointment</h2>
                    <div>
                        <FormControl className={makeStyles.formControl}>
                            <InputLabel htmlFor="component-simple">Name</InputLabel>
                            <Input
                                required
                                id="component-simple"
                                name="name"
                                value={props.selectedItem.name}
                                onChange={props.updateField} />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={makeStyles.formControl}>
                            <InputLabel htmlFor="component-simple">Phone Number</InputLabel>
                            <Input
                                required
                                inputProps={phoneValidation}
                                id="component-simple"
                                name="phone"
                                value={props.selectedItem.phone}
                                onChange={props.updateField}
                                />
                        </FormControl>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <Button style={{marginRight: '15px'}} variant="contained" className={makeStyles.button} onClick={props.closeModal}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" className={makeStyles.button}>
                            Save
                        </Button>
                    </div>
                </form>
            </div>
            </Modal>
        </div>
    );
}