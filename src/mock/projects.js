const projects = [
    {
        uid: 'project_dogOrphans1',
        name: 'Dog Orphans',
        company: 'dogOrphans',
        description: 'Feed animals. Clean rooms.',
        appointments: [
            {
                uid: 'dogOrphans1',
                start_date: null,
                end_date: null,
                hours_per_person: 1,
                number_of_volunteers: 6,
                volunteers: [],
            },
            {
                uid: 'dogOrphans2',
                start_date: 'Saturday Sep 22',
                end_date: null,
                hours_per_person: 2,
                number_of_volunteers: 3,
                volunteers: [],
            },
        ],
    },
    {
        uid: 'project_sunrise1',
        name: 'Sunrise Senior Center',
        company: 'sunrise',
        description: 'Organize pantry.  Prepare meals.',
        appointments: [
            {
                uid: 'sunrise1',
                start_date: 'Saturday Sep 22',
                end_date: null,
                hours_per_person: 2,
                number_of_volunteers: 3,
                volunteers: [],
            }
        ]
    },
    {
        uid: 'project_maldenff1',
        name: 'Malden Firefighters Field House',
        company: 'maldenff',
        description: 'Clean storage room',
        appointments: [
            {
                uid: 'maldenff1',
                start_date: 'Saturday Sep 22',
                end_date: null,
                hours_per_person: 4,
                number_of_volunteers: 1,
                volunteers: [],
            },
            {
                uid: 'maldenff2',
                start_date: 'Saturday Sep 22',
                end_date: 'Sun Sep 23 2018 00:00:00 GMT-0400 (EDT)',
                hours_per_person: 4,
                number_of_volunteers: 4,
                volunteers: [],
            },
            {
                uid: 'maldenff3',
                start_date: 'Sep 22 - 23',
                end_date: 'Sunday Sep 23',
                hours_per_person: 4,
                number_of_volunteers: 4,
                volunteers: [],
            },
            {
                uid: 'maldenff4',
                start_date: 'Saturday Sep 22',
                end_date: 'Saturday Sep 22',
                hours_per_person: 4,
                number_of_volunteers: 4,
                volunteers: [],
            },
        ]
    },
    
];

export { projects };

const companies = {
    dogOrphans: {
        name: 'Dog Orphan Company,'
    },
    sunrise: {
        name: 'Sunrise Senior Center',
    },
};
