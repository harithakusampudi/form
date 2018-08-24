export const fields = [
  {
    id: '1',
    order: 1,
    label: 'Vessel',
    keyValue: 'vessel',
    fieldType: 'lookup',
    disable: true,
    dependency: [],
    lookup: {
      url: '/vessel',
      data: [{
        'key': 'vessel',
        'vesselName': 'ENV1',
        'vesselCode': 589,
        'vdSeries': 'VD-2018'
      }, {
        'key': 'vessel',
        'vesselName': 'ENV2',
        'vesselCode': 587,
        'vdSeries': 'VD-2018'
      }],
      store: 'vessel'
    },
    value: {
      value: '',
      source: 'vessel.vesselName'
    },
    display: {
      value: '',
      source: 'vessel.vesselName'
    }
  },
  {
    id: '2',
    order: 2,
    label: 'Vessel Code',
    keyValue: 'vesselCode',
    fieldType: 'input',
    disable: true,
    dependency: [
      {
        field: 'vessel',
        errorMsg: 'Please enter vessel name field'
      }
    ],
    lookup: {
    },
    value: {
      value: '',
      source: 'vessel.vesselCode'
    },
    display: {
      value: '',
      source: 'vessel.vdSeries'
    }
  }
]

const formState = {
  vesselName: 'ENV1',
  vesselCode: 589
}

const sourceState = {
  vessel: {
    'key': '1',
    'vesselName': 'ENV1',
    'vesselCode': 589,
    'vdSeries': 'VD-2018'
  }
}
