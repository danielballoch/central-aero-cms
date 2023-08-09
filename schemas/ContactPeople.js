// schemas/ContactPeople.js
export default {
    name: 'contact_people',
    type: 'document',
    title: 'Contact People',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone'
        },
        {
            name: 'department',
            type: 'string',
            title: 'Department',
            options: {
                list: [
                    {title: 'Electrical', value: 'electrical'},
                    {title: 'Engineering', value: 'engineering'}
                ]
            }
        },
    ]
  }