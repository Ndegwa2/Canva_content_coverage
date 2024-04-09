//creating a scheduler for the collection days.
//the data is stored in two arrays containing the day and time of the scheduled pick up.

const schedule ={
    madaraka:{
        days:['Monday', 'Thursday'],
        times:['8:00 AM', '5:00 PM'],
    },
    jamhuri:{
        days:['Tuesday', 'Friday'],
        times:['9:00 AM', '4:00 PM'],

    },

    nyayo:{
        days:['Wednesday', 'Saturday'],
    times:['7:00 AM', '6:00 PM'],
    },
};

//having created the schedule we now display it in the html.

const displaySchedule = () => {
    console.log('Displaying schedule');
    const scheduleElement = document.getElementById('schedule');
    Object.keys(schedule).forEach(estate => {
        const estateSchedule = schedule[estate];
        const scheduleItem = document.createElement('div');
        scheduleItem.classList.add('schedule-item');
        scheduleItem.innerHTML = `
            <div>
                <h3>${estate} Estate</h3>
                <ul>
                    <li>Days: ${estateSchedule.days.join(', ')}</li>
                    <li>Times: ${estateSchedule.times.join(' and ')}</li>
                </ul>
            </div>
        `;
        scheduleElement.appendChild(scheduleItem);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    displaySchedule();
});