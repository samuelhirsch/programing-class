var express = require('express');
var router = express.Router();

let contacts = [
  {
    id: 1,
    first: 'Donald',
    last: 'Trump',
    phone: '1234567890',
    email: 'dtrump@whitehouse.gov'
  },
  {
    id: 2,
    first: 'JD',
    last: 'Vance',
    phone: '9876543210',
    email: 'jd@whitehouse.gov'
  }
];

router.get("/api/contacts", function (req, res, next) {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(contacts));

});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Contact List',
    contacts,
    noContacts: !contacts?.length,
    partials: { content: 'index.hjs' }
  });
});

router.get('/addContact', (req, res, next) => {
  res.render('layout', {
    title: 'Add Contact',
    partials: { content: 'addContact.hjs' }
  });
});

router.post('/addContact', (req, res, next) => {
  contacts.push(req.body);

  res.writeHead(301, {
    location: '/'
  });

  res.end();
});

router.post('/deleteContact/:id', (req, res, next) => {
  contacts = contacts.filter(c => c.id !== Number(req.params.id));

  res.writeHead(301, {
    location: '/'
  });

  res.end();
});
router.get('/editContact/:id', (req, res, next) => {

  let contactId = Number(req.params.id)
  console.log(contacts.find((c) => c.id === contactId),)
  res.render('layout', {
    title: 'edit Contact',
    contact: contacts.find((c) => c.id === contactId),
    partials: { content: 'editContact.hjs' }
  });
});
router.post('/editContact/:id', (req, res, next) => {
  let contactId = Number(req.params.id)
  console.log(req.body)
  const { first, last, email, phone } = req.body
  let editContact = contacts.find((c) => c.id === contactId)
  editContact.first = first;
  editContact.last = last;
  editContact.email = email;
  editContact.phone = phone;
  res.writeHead(301, {
    location: '/'
  });

  res.end();
});

module.exports = router;
