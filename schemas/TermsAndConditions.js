// schemas/Homepage.js
export default {
    name: 'termsAndConditions',
    type: 'document',
    title: 'Terms & Conditions',
    fields: [
        {
            title: 'Terms & Conditions Text',
            name: 'terms_and_conditions_text',
            type: 'array',
            of: [{type: 'block'}]
        },
    ]
}