/* Fora event discovery. All demo event/registration data stays in this browser. */
const events = [
  {id:'afterglow',title:'Afterglow Sessions',category:'Music',date:'2026-11-21T19:30:00+05:30',dateLabel:'Sat, Nov 21 · 7:30 PM',day:'21',month:'NOV',city:'Bengaluru',venue:'The Courtyard, Indiranagar',price:'₹799',image:'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=82',short:'Three boundary-pushing artists. One room that feels like yours.',description:'A new kind of live music night for the curious. Discover three artists shaping the independent sound of now, in an intimate open-air courtyard under the Bengaluru sky. Come early, stay late, leave with a new favorite.',capacity:'Limited to 240 guests',duration:'4 hours'},
  {id:'future-founders',title:'Future Founders Forum',category:'Business',date:'2026-11-28T10:00:00+05:30',dateLabel:'Sat, Nov 28 · 10:00 AM',day:'28',month:'NOV',city:'Bengaluru',venue:'The Quorum, UB City',price:'₹1,499',image:'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=82',short:'Unfiltered conversations for people building what comes next.',description:'A one-day gathering for founders, operators and curious builders. Expect candid founder stories, small-group working sessions, and the kind of conversations that continue long after the last slide.',capacity:'Limited to 180 guests',duration:'6 hours'},
  {id:'city-in-motion',title:'The City in Motion',category:'Sports',date:'2026-12-06T06:30:00+05:30',dateLabel:'Sun, Dec 6 · 6:30 AM',day:'06',month:'DEC',city:'Bengaluru',venue:'Cubbon Park, Gate 2',price:'₹399',image:'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=82',short:'A no-pressure sunrise run, followed by coffee and new friends.',description:'A social 5K and 10K run designed for every pace. Meet at the park at sunrise, find your own rhythm with a friendly crew, then refuel with specialty coffee and breakfast at the finish.',capacity:'All running levels welcome',duration:'2.5 hours'},
  {id:'designing-tomorrow',title:'Designing Tomorrow',category:'Education',date:'2026-12-12T11:00:00+05:30',dateLabel:'Sat, Dec 12 · 11:00 AM',day:'12',month:'DEC',city:'Bengaluru',venue:'Ranga Shankara, JP Nagar',price:'₹599',image:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=82',short:'A hands-on day of ideas, prototypes and creative possibility.',description:'Part workshop, part creative playground. Designers and makers lead practical sessions in visual storytelling, prototyping and creative thinking. Bring your curiosity; materials and good company are included.',capacity:'Limited to 100 participants',duration:'5 hours'},
  {id:'table-for-twelve',title:'A Table for Twelve',category:'Entertainment',date:'2026-12-18T19:00:00+05:30',dateLabel:'Fri, Dec 18 · 7:00 PM',day:'18',month:'DEC',city:'Bengaluru',venue:'Misu, Lavelle Road',price:'₹1,899',image:'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=82',short:'A long-table dinner for strangers who won’t stay strangers.',description:'Twelve seats, a chef-curated seasonal menu, and thoughtful conversation prompts. Come solo or with a friend, share a beautiful meal, and let the evening take care of the introductions.',capacity:'12 seats only',duration:'3 hours'},
  {id:'signal-summit',title:'Signal: Future of Tech',category:'Technology',date:'2027-01-09T09:30:00+05:30',dateLabel:'Sat, Jan 9 · 9:30 AM',day:'09',month:'JAN',city:'Bengaluru',venue:'Bangalore International Centre',price:'₹999',image:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=82',short:'A human-first look at the technologies changing how we live.',description:'A sharp, optimistic day for people building with technology. Hear from researchers and founders, explore interactive demos, and join practical conversations about AI, climate tech and what comes next.',capacity:'Limited to 300 guests',duration:'6 hours'},
  {id:'vinyl-after-hours',title:'Vinyl After Hours',category:'Music',date:'2027-01-16T20:00:00+05:30',dateLabel:'Sat, Jan 16 · 8:00 PM',day:'16',month:'JAN',city:'Mumbai',venue:'antiSOCIAL, Lower Parel',price:'₹649',image:'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=82',short:'Deep cuts, warm sound and a dance floor with no dress code.',description:'A listening party for music lovers who like to get lost in the details. Local selectors take over the decks with rare grooves and left-field favorites. Come as you are; stay for one more track.',capacity:'Limited to 200 guests',duration:'4 hours'},
  {id:'open-studio',title:'Open Studio: Make & Mend',category:'Education',date:'2027-01-23T14:00:00+05:30',dateLabel:'Sat, Jan 23 · 2:00 PM',day:'23',month:'JAN',city:'Bengaluru',venue:'The Courtyard, Indiranagar',price:'₹499',image:'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=82',short:'An easy afternoon of hands-on craft and happy accidents.',description:'Slow down and make something with your hands. Local artists host small-group sessions in collage, visible mending and printmaking. All materials, tea and a little creative encouragement are on us.',capacity:'Limited to 48 makers',duration:'3 hours'},
  {id:'playground-live',title:'Playground Live',category:'Entertainment',date:'2027-02-06T17:00:00+05:30',dateLabel:'Sat, Feb 6 · 5:00 PM',day:'06',month:'FEB',city:'Bengaluru',venue:'Lalbagh Glass House',price:'₹899',image:'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=900&q=82',short:'An open-air celebration of new sounds, good food and art.',description:'An open-air mini festival bringing together emerging musicians, playful installations and food from neighborhood kitchens. Wander, listen, meet someone new and watch the evening turn golden.',capacity:'Limited to 500 attendees',duration:'5 hours'},
  {id:'founders-and-friends',title:'Founders & Friends',category:'Business',date:'2027-02-13T18:30:00+05:30',dateLabel:'Sat, Feb 13 · 6:30 PM',day:'13',month:'FEB',city:'Mumbai',venue:'The Habitat, Khar',price:'₹749',image:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=82',short:'A refreshingly useful mixer for people making things happen.',description:'Skip the elevator pitches. This small, hosted evening brings together ambitious people across design, tech and culture for real conversations, shared plates and useful new connections.',capacity:'Limited to 90 guests',duration:'3 hours'},
  {id:'blue-hour-walk',title:'Blue Hour Photo Walk',category:'Sports',date:'2027-02-20T17:15:00+05:30',dateLabel:'Sat, Feb 20 · 5:15 PM',day:'20',month:'FEB',city:'Delhi',venue:'Lodhi Art District',price:'₹299',image:'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=82',short:'See familiar streets differently, one frame at a time.',description:'A slow, guided photo walk through the color and texture of Lodhi Art District. Phone cameras are very welcome. A local photographer shares simple tips, then the group wraps with chai nearby.',capacity:'Limited to 24 walkers',duration:'2 hours'},
  {id:'ideas-in-the-open',title:'Ideas in the Open',category:'Technology',date:'2027-03-06T10:30:00+05:30',dateLabel:'Sat, Mar 6 · 10:30 AM',day:'06',month:'MAR',city:'Delhi',venue:'India Habitat Centre',price:'₹699',image:'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=82',short:'Short talks on big questions, followed by small-group chats.',description:'A lively forum for thoughtful people and open questions. Hear quick, idea-packed talks spanning science, culture and emerging tech, then go deeper in intimate discussion circles over lunch.',capacity:'Limited to 160 guests',duration:'4 hours'}
];

const categories=['All','Technology','Music','Sports','Business','Education','Entertainment'];
const grid=document.querySelector('#event-grid');
const filterList=document.querySelector('#filter-list');
const searchInput=document.querySelector('#event-search');
const emptyState=document.querySelector('#empty-state');
const eventDialog=document.querySelector('#event-dialog');
const registerDialog=document.querySelector('#register-dialog');
let activeCategory='All';
let searchTerm='';

function readStore(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function writeStore(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true}catch{return false}}

function renderFilters(){
  filterList.innerHTML=categories.map(category=>`<button class="filter-chip ${category===activeCategory?'active':''}" type="button" data-category="${category}" aria-pressed="${category===activeCategory}">${category}</button>`).join('');
}
function filteredEvents(){
  const query=searchTerm.trim().toLowerCase();
  return events.filter(event=>{
    const categoryMatch=activeCategory==='All'||event.category===activeCategory;
    const searchable=`${event.title} ${event.category} ${event.city} ${event.venue} ${event.short}`.toLowerCase();
    return categoryMatch&&(!query||searchable.includes(query));
  });
}
function renderEvents(){
  const favorites=readStore('fora-favorites',[]);
  const results=filteredEvents();
  grid.innerHTML=results.map((event,index)=>`<article class="event-card" tabindex="0" role="button" aria-label="View ${event.title} details" data-open-event="${event.id}" style="animation-delay:${Math.min(index*45,300)}ms"><div class="event-photo"><img src="${event.image}" alt="${event.title} event" loading="lazy"><span class="event-category">${event.category}</span><button class="event-save ${favorites.includes(event.id)?'saved':''}" type="button" aria-label="${favorites.includes(event.id)?'Remove':'Save'} ${event.title}" aria-pressed="${favorites.includes(event.id)}" data-favorite="${event.id}">${favorites.includes(event.id)?'♥':'♡'}</button></div><div class="event-info"><div class="event-date-line">${event.dateLabel}</div><h3>${event.title}</h3><p>${event.short}</p><div class="event-card-foot"><span class="event-location">⌖ &nbsp;${event.city} · ${event.venue.split(',')[0]}</span><strong>${event.price}</strong></div></div></article>`).join('');
  emptyState.hidden=results.length>0;
}
function getEvent(id){return events.find(event=>event.id===id)}
function openEvent(id){
  const event=getEvent(id);if(!event)return;
  document.querySelector('#dialog-content').innerHTML=`<div class="detail-image"><img src="${event.image}" alt="${event.title}" loading="lazy"></div><div class="detail-content"><span class="detail-category">${event.category} &nbsp;·&nbsp; FORA PICK</span><h2>${event.title}</h2><p>${event.description}</p><div class="detail-meta"><span>◷ &nbsp;${event.dateLabel}</span><span>⌖ &nbsp;${event.venue}, ${event.city}</span><span>✳ &nbsp;${event.duration}</span><span>◎ &nbsp;${event.capacity}</span></div><button class="button button-primary" type="button" data-register="${event.id}">Reserve your spot · ${event.price} <span>↗</span></button></div>`;
  if(!eventDialog.open)eventDialog.showModal();
}
function openRegistration(id){
  const event=getEvent(id);if(!event)return;
  eventDialog.close();
  document.querySelector('#selected-event').value=event.id;
  document.querySelector('#register-event-name').textContent=`${event.title} · ${event.dateLabel} · ${event.city}`;
  document.querySelector('#registration-form').hidden=false;
  document.querySelector('#success-message').hidden=true;
  document.querySelector('#form-error').textContent='';
  registerDialog.showModal();
}
function closeDialogOnBackdrop(dialog,event){if(event.target===dialog)dialog.close()}

renderFilters();renderEvents();
filterList.addEventListener('click',event=>{const button=event.target.closest('[data-category]');if(!button)return;activeCategory=button.dataset.category;renderFilters();renderEvents()});
searchInput.addEventListener('input',()=>{searchTerm=searchInput.value;renderEvents()});
grid.addEventListener('click',event=>{
  const favorite=event.target.closest('[data-favorite]');
  if(favorite){event.stopPropagation();const id=favorite.dataset.favorite;let favorites=readStore('fora-favorites',[]);favorites=favorites.includes(id)?favorites.filter(item=>item!==id):[...favorites,id];writeStore('fora-favorites',favorites);renderEvents();return}
  const card=event.target.closest('[data-open-event]');if(card)openEvent(card.dataset.openEvent);
});
grid.addEventListener('keydown',event=>{if((event.key==='Enter'||event.key===' ')&&event.target.matches('[data-open-event]')){event.preventDefault();openEvent(event.target.dataset.openEvent)}});
document.addEventListener('click',event=>{
  const open=event.target.closest('[data-event]');if(open)openEvent(open.dataset.event);
  const register=event.target.closest('[data-register]');if(register)openRegistration(register.dataset.register);
  const footerCategory=event.target.closest('[data-footer-category]');if(footerCategory){activeCategory=footerCategory.dataset.footerCategory;renderFilters();renderEvents()}
});
document.querySelectorAll('.dialog-close').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
eventDialog.addEventListener('click',event=>closeDialogOnBackdrop(eventDialog,event));
registerDialog.addEventListener('click',event=>closeDialogOnBackdrop(registerDialog,event));

document.querySelector('#registration-form').addEventListener('submit',event=>{
  event.preventDefault();
  const form=event.currentTarget;const values=Object.fromEntries(new FormData(form).entries());
  const name=values.name.trim();const email=values.email.trim();const phone=values.phone.trim();
  const emailValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid=/^[+0-9() .-]{7,20}$/.test(phone)&&phone.replace(/\D/g,'').length>=7;
  let error='';
  if(name.length<2)error='Please enter your name (at least 2 characters).';
  else if(!emailValid)error='Please enter a valid email address.';
  else if(!phoneValid)error='Please enter a valid phone number with at least 7 digits.';
  else if(!getEvent(values.event))error='Please choose an event before registering.';
  const errorNode=document.querySelector('#form-error');errorNode.textContent=error;
  if(error){(form.querySelector(error.includes('name')?'[name="name"]':error.includes('email')?'[name="email"]':error.includes('phone')?'[name="phone"]':'[name="name"]')).focus();return}
  const eventInfo=getEvent(values.event);const registrations=readStore('fora-registrations',[]);
  registrations.push({name,email,phone,eventId:eventInfo.id,eventTitle:eventInfo.title,registeredAt:new Date().toISOString()});
  const saved=writeStore('fora-registrations',registrations);
  if(!saved){errorNode.textContent='This browser could not save your registration. Check storage settings and try again.';return}
  form.hidden=true;document.querySelector('#success-message').hidden=false;form.reset();
});
document.querySelector('#done-button').addEventListener('click',()=>registerDialog.close());

const themeToggle=document.querySelector('#theme-toggle');
function setTheme(theme){document.body.classList.toggle('light',theme==='light');themeToggle.setAttribute('aria-label',theme==='light'?'Switch to dark theme':'Switch to light theme');themeToggle.querySelector('.theme-glyph').textContent=theme==='light'?'☾':'☼';try{localStorage.setItem('fora-theme',theme)}catch{}}
let savedTheme;try{savedTheme=localStorage.getItem('fora-theme')}catch{}
setTheme(savedTheme==='light'?'light':'dark');
themeToggle.addEventListener('click',()=>setTheme(document.body.classList.contains('light')?'dark':'light'));

const menuToggle=document.querySelector('#menu-toggle');const mainNav=document.querySelector('.main-nav');
menuToggle.addEventListener('click',()=>{const isOpen=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(isOpen));menuToggle.setAttribute('aria-label',isOpen?'Close navigation':'Open navigation');menuToggle.textContent=isOpen?'×':'☰'});
mainNav.addEventListener('click',event=>{if(event.target.closest('a')){mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation');menuToggle.textContent='☰'}});

function updateCountdown(){
  document.querySelectorAll('[data-countdown]').forEach(counter=>{
    const distance=new Date(counter.dataset.countdown).getTime()-Date.now();
    const clamped=Math.max(0,distance);
    const values={days:Math.floor(clamped/86400000),hours:Math.floor(clamped%86400000/3600000),minutes:Math.floor(clamped%3600000/60000),seconds:Math.floor(clamped%60000/1000)};
    Object.entries(values).forEach(([unit,value])=>{const node=counter.querySelector(`[data-${unit}]`);if(node)node.textContent=String(value).padStart(2,'0')});
    if(distance<=0)counter.setAttribute('aria-label','The featured event has started');
  });
}
updateCountdown();window.setInterval(updateCountdown,1000);

document.querySelector('#newsletter-form').addEventListener('submit',event=>{
  event.preventDefault();const input=document.querySelector('#newsletter-email');const message=document.querySelector('#newsletter-message');
  if(!input.checkValidity()){input.reportValidity();return}
  const subscribers=readStore('fora-newsletter',[]);const email=input.value.trim().toLowerCase();
  if(!subscribers.includes(email)){subscribers.push(email);writeStore('fora-newsletter',subscribers)}
  message.textContent='You’re on the list. Keep an eye out for the good stuff.';message.classList.add('success-text');input.value='';
});

document.addEventListener('keydown',event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();searchInput.focus()}if(event.key==='Escape'){mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
