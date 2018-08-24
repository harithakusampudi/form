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
        'vessel Name': 'ENV1',
        'vessel Code': 589,
        'vdSeries': 'VD-2018'
      }, {
        'key': 'vessel',
        'vessel Name': 'ENV2',
        'vessel Code': 587,
        'vdSeries': 'VD-2018'
      }],
      store: 'vessel'
    },
    value: {
      value: '',
      source: 'vessel.vessel Name'
    },
    display: {
      value: '',
      source: 'vessel.vessel Name'
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
    ],
    lookup: {
    },
    value: {
      value: '',
      source: 'vessel.vessel Code'
    },
    display: {
      value: '',
      source: 'vessel.vdSeries'
    }
  },
  {
    id: '3',
    order: 3,
    label: 'Vessel series',
    keyValue: 'vdSeries',
    fieldType: 'input',
    disable: true,
    dependency: [
    ],
    lookup: {
    },
    value: {
      value: '',
      source: 'vessel.vdSeries'
    },
    display: {
      value: '',
      source: 'vessel.vdSeries'
    }
  },
  {
    id: '4',
    order: 4,
    label: 'Transporter Name',
    keyValue: 'transporter',
    fieldType: 'lookup',
    disable: true,
    dependency: [
      {
        field: 'vessel',
        errorMsg: 'Please enter vessel name field'
      }
    ],
    lookup: {
      url: '/transporter',
      data: [{
        'key': 'transporter',
        'transporter Name': 'xyz',
        'transporter Code': 589,
        'vdSeries': 'VD-2018'
      }, {
        'key': 'transporter',
        'transporter Name': 'abc',
        'transporter Code': 587,
        'vdSeries': 'VD-2018'
      }],
      store: 'transporter'
    },
    value: {
      value: '',
      source: 'transporter.transporter Name'
    },
    display: {
      value: '',
      source: 'transporter.transporter Name'
    }
  },
  {
    id: '5',
    order: 5,
    label: 'Transporter code',
    keyValue: 'transporterCode',
    fieldType: 'input',
    disable: true,
    dependency: [],
    lookup: {
    },
    value: {
      value: '',
      source: 'transporter.transporter Code'
    },
    display: {
      value: '',
      source: 'transporter.transporter Code'
    }
  }
]
