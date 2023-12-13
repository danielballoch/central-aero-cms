// schemas/ElectricalComponents.js
export default {
    name: 'electrical-components',
    type: 'document',
      title: 'Shop Parts Components',
    fields: [
        {
            name: 'component_title',
            type: 'string',
            title: 'Component Title'
        },
        {
            name: 'component_type',
            type: 'string',
            title: 'Component Type',
            options: {
                list: [
                    {title: 'Order', value: 'order'},
                    {title: 'Repair', value: 'repair'}
                ]
            }
        },
        {
            name: 'component_subtext',
            type: 'string',
            title: 'Component Subtext'
        },
        {
            name: 'component_path',
            type: 'string',
            title: 'Component Path'
        },
        {
            name: 'component_image',
            type: 'image',
            title: 'Component Image'
        },
        {
            name: 'blurb',
            type: 'text',
            title: 'Component Page Blurb'
        },
        {
            name: 'component_content',
            type: 'array',
            title: 'Content Page Content',
            of: [{type: 'block'}]
        },
    ]
  }