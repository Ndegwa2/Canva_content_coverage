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

//we now continue to the feedback section.

const resources ={
    recycling:{
        title: 'Best Recycling Practices!',
        content:` What can i recycle?
        Letters

        Envelopes
        
        Brochures
        
        Cardboard boxes (flattened)
        
        Egg boxes
        
        Potato bags
        
        Cardboard centres from toilet roll and kitchen roll
        
        Newspapers
        
        'Tetra Pak' cartons for juice or milk
        
        Pizza boxes (if part of the box is soiled, seperate this and put it in your brown bin)
        
        Rigid plastic (washed and dried)
        
        Plastic drink bottles
        
        Plastic cleaning bottles
        
        Butter, yoghurt and salad tubs
        
        Plastic trays for fruit and vegetables
        
        Plastic milk containers
        
        Plastic bottles for liquid soap or shampoo
        
        Soft plastic (washed and dried)
        
        Frozen food bags
        
        Bread wrappers
        
        Plastic shopping bags
        
        Bubble wrap
        
        Crisp wrappers
        
        Pasta bags
        
        Outer wrapping on kitchen and toilet rolls
        
        Breakfast cereal bags `

    },
    reduceWaste:{
        title: 'Reducing Household Waste'
        content: `Tips and tricks for reducing waste in our homes.
        
        Recycle, reuse, repair

        Recycling is the process of collecting waste and turning it into other materials or objects that can be reused. When we recycle, we use less raw materials than when producing a new product, which reduces air pollution and improves the environment. Recycling household waste can also reduce the amount you spend on waste collection, as many waste collectors have no restriction on the amount of waste you can put in your green and brown bins. But, there are generally thresholds for the amount you can put in your black bin, and excess charges apply if you go above this. You can also take your recyclable waste to a recycling facility to be recycled. Find out more about recycling in Ireland.
        
        The best way to reduce waste is not to produce it in the first place. So, reuse items whenever possible. For example, instead of buying plastic bottles of water, use a reusable bottle and refill it at home or at a free drinking water tap. If you’re going shopping, bring your own reusable shopping bags.
        
        Instead of buying new items, try and repair the ones you have. For example, you could repair your clothes, furniture, bike or appliances. Information on how to fix most things is available on the internet. Or, you can get a local professional to fix your items.
        
        Another option is upcycling. This is reusing items you no longer want, to make new products or materials of a higher value. It can be a fun and creative way of reducing waste and breathing new life into old items.
        
       
        Avoid food packaging
        When you are in the supermarket, 
        avoid buying items with excessive plastic packaging. 
        In some supermarkets, you may be able to leave unwanted packaging behind.
        
        Choose fruit and vegetables that don’t come prepackaged and bring your own bag to carry them home. 
        Choose food items that come in recyclable containers. 
        
        Avoid single-use plastics

Single-use plastics (SUPs) are items that are used once, or for a short period of time, 
and then thrown away. 
For example, straws, cotton bud sticks and polystyrene
 food containers.

You should avoid using SUPs 
as they take a long time to break down and 
can damage the environment, particularly oceans. 70% of marine litter in the world comes from SUPs.
        
Buy second hand
Buying second hand products will save you money.
 It also decreases the demand for new items, which preserves natural resources.
  Cars, clothes, exercise equipment, furniture and books are all examples of items that can be bought and used second hand.

If you have items that you do not want, instead of throwing them out, you could donate them to a charity shop. 
You could also donate or sell them through buy and sell websites or social media groups.
`
    }
};

