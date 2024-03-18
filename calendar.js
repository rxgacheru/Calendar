let calendar = [
  {
    title:"Charity Open Day",
    date: console.log(date.toLocaleTimeString('en-US')),
    location:"Oak Hotel",
    attendees:new Set(['Peter', 'Paul', 'Matthew'])
  },
  {
    title:"Charity Walk",
    date: console.log(date.toLocaleTimeString('en-US')),
    location:"Oak Hotel",
    attendees: new Set(['John', 'Steffany', 'Abby'])
  },
  {
    title:"Charity Fundraising",
    date: console.log(date.toLocaleTimeString('en-US')),
    location:"Oak Hotel",
    attendees:new Set(['Everlyn', 'Billy', 'Neema'])
  },
  {
    title:"Guidance and Counselling Services",
    date: console.log(date.toLocaleTimeString('en-US')),
    location:"Oak Hotel",
    attendees: new Set(['Victor', 'Mercy', 'Nesta'])
  },
  {
    title:"Health Welfare Day",
    date: console.log(date.toLocaleTimeString('en-US')),
    location:"Oak Hotel",
    attendees:new Set(['Cecil', 'Reagan', 'Roy'])
  },
  {
    title:"Mental wellness Day",
    date: console.log(date.toLocaleTimeString('en-US')),
    location:"Oak Hotel",
    attendees:new Set(['Teddy', 'Lydia', 'Melanie'])
  },
  {
    title:"Charity Closing Day",
    date: console.log(date.toLocaleTimeString('en-US')),
    location:"Oak Hotel",
    attendees:new Set(['Kimberly', 'Phoebe', 'Cynthia'])
  }
]

calendar.map(event=>Charity.title);
console.log(calendar);

calendar.filter(event =>eventattendees.size >2);
let eventWithAttendees = filterEvent;
