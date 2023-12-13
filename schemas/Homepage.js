// schemas/Homepage.js
export default {
    name: 'homepage',
    type: 'document',
    title: 'Homepage',
    fields: [
        {
            name: 'hero_title',
            type: 'string',
            title: 'Hero Title'
        },
        {
            name: 'intro_title',
            type: 'string',
            title: 'Intro Title'
        },
        {
            title: 'Intro Text',
            name: 'intro_text',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'engineering_title',
            type: 'string',
            title: 'Engineering Title'
        },
        {
            title: 'Engineering Text',
            name: 'engineering_text',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'electrical_title',
            type: 'string',
            title: 'Electrical Title'
        },
        {
            title: 'Electrical Text',
            name: 'electrical_text',
            type: 'array',
            of: [{type: 'block'}]
        },
    ]
  }