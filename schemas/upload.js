export default {
  title: 'upload',
  name: 'upload',
  type: 'file',
  options: {
    hotspot: true,
    accept: 'pdf/doc'
  },
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    }
  ]
}
