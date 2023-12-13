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
            title: 'Intro Image 1',
            name: 'intro_image_1',
            type: 'image'
        },
        {
            title: 'Intro Image 2',
            name: 'intro_image_2',
            type: 'image'
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
            title: 'Engineering Image',
            name: 'engineering_image',
            type: 'image'
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
        {
            title: 'Electrical Image',
            name: 'electrical_image',
            type: 'image'
        },
    ]
  }