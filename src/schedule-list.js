import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function ScheduleList(props) {
    const schedule = props.schedule.map(function(item) {
        const hasAppointment = item.name !== '' ? {backgroundColor: 'red'} : {};
        return (
        <ListItem
            key={item.id}
            button
            divider
            onClick={() => props.openModal(item)}
            style={hasAppointment}
            >
            <ListItemText primary={item.time} />
        </ListItem>);
    });

    return (
        <List disablePadding component="nav">
            {schedule}
        </List>
    );   
}