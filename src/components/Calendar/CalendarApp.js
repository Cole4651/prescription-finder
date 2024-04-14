import React, {useState} from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';


const localizer = momentLocalizer(moment);

export default function CalendarApp(init_events) {
    const [events, setEvents] = useState([]); 
    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventTitle, setEventTitle] = useState('');


    const handleSelectSlot = (slotInfo) => {
        setShowModal(true);
        setSelectedDate(slotInfo.start);
    }

    const saveEvent = () => {
        if (eventTitle && selectedDate) {
            const newEvent = {
                title: eventTitle,
                start: selectedDate,
                end: moment(selectedDate).add(1, 'hours').toDate(),
            };
            setEvents ([...events, newEvent]);
            setShowModal(false);
            setEventTitle('');
        }
    }


	function getEvents() {
		console.log(JSON.stringify(events))
		return ;
	}
    return (
        <div style={{height: '800px'}}>
            <Calendar 
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable={true}
                onSelectSlot={handleSelectSlot}
            />
            {showModal && (
                    <div class="modal" style={{display:'block', backgroundColor:'rgba(0.0.0.0.5)', position:'fixed', top:0, bottom:0, left:0, right:0}}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Prescription Refill</h5>
                            <button type="button" class="btn-close" onClick={()=> setShowModal(false)}></button>
                        </div>
                        <div class="modal-body">
                            <label>Prescription Name:</label>
                            <input 
                                type='text'
                                className='form-control'
                                id='eventTitle'
                                value={eventTitle}
                                onChange={(e) => setEventTitle(e.target.value)}
                            />
                        </div>
                        <div class="modal-footer">
                            <button type="button" className='btn btn-primary'onClick={saveEvent}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>)}
			<button onClick={getEvents}>Export</button>
        </div>
        

    )
}
