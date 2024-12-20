export const columns = [
    { field: 'origin', 
        headerName: 'URL',
        width: 200,
        
    },
    { field: 'firstDate', 
      headerName: 'Collection start date',
      width: 150, 
      valueGetter: (value) => `${value.year || ''}-${value.month || ''}-${value.day || ''}` },
    {
        field: 'lastDate',
        headerName: 'Collection end date',
        width: 150,
        valueGetter: (value) => `${value.year || ''}-${value.month || ''}-${value.day || ''}`
    },
    {
        field: 'largest_contentful_paint',
        headerName: 'LCP (p75)',
        type: "number" ,
        width: 100,
        valueGetter: (value) => value.percentiles.p75,
        filterable:true
    },
    {
        field: 'interaction_to_next_paint',
        headerName: 'INP (p75)',
        type: "number" ,
        width: 100,
        valueGetter: (value) => value.percentiles.p75
    },
    {
        field: 'cumulative_layout_shift',
        headerName: 'CLS (p75)',
        type: "number" ,
        width: 100,
        valueGetter: (value) => value.percentiles.p75
    },
    {
        field: 'experimental_time_to_first_byte',
        headerName: 'TTFB (p75)',
        type: "number" ,
        width: 100,
        valueGetter: (value) => value.percentiles.p75
    }
];
