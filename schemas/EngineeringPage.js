export default {
    name: 'engineeringPage',
    type: 'document',
    title: 'Engineering Page Main',
    fields: [
        {
            name: 'hero_title',
            type: 'string',
            title: 'Hero Title'
        },
        {
            name: 'hero_text',
            title: 'Hero Text',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'intro_title',
            type: 'string',
            title: 'Intro_title'
        },
        {
            name: 'intro_text',
            title: 'Intro Text',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'intro_image',
            title: 'Intro Image',
            type: 'image'
        },
        {
            name: 'services_title',
            title: 'Services Title',
            type: 'string'
        }
    ]
  }