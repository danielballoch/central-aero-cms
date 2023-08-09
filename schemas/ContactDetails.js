// schemas/ContactDetails.js
export default {
    name: 'contact_phone_numbers',
    type: 'document',
    title: 'Contact Phone Numbers',
    fields: [
        {
            name: 'electrical_phone',
            type: 'string',
            title: 'Electrical Main Phone Number'
        },
        {
            name: 'engineering_phone',
            type: 'string',
            title: 'Engineering Main Phone Number'
        },
    ]
  }