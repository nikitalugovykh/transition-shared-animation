const DATA = [
    {
        imageUri: 'https://cdn-icons-png.flaticon.com/512/2990/2990502.png',
        title: 'Ukelele',
        id: '1384354'
    },
    {
        imageUri: 'https://cdn-icons.flaticon.com/png/512/3913/premium/3913712.png',
        title: 'See',
        id: '12435434154'
    },
    {
        imageUri: 'https://cdn-icons.flaticon.com/png/512/3038/premium/3038981.png?token=exp=1647160276~hmac=0336931c412d62970ea57da800c66d45',
        title: 'Sea',
        id: '1243543454154'
    },
    {
        imageUri: 'https://cdn-icons-png.flaticon.com/512/2028/2028346.png',
        title: 'Tiki',
        id: '13813544'
    },
    {
        imageUri: 'https://cdn-icons.flaticon.com/png/512/831/premium/831896.png?token=exp=1647160346~hmac=34ddf8a39aec90815b0edea11b772a08',
        title: 'Banana',
        id: '13524514'
    },
    {
        imageUri: 'https://cdn-icons-png.flaticon.com/512/878/878033.png',
        title: 'Coconut tree',
        id: '1384354151'
    },
    {
        imageUri: 'https://cdn-icons.flaticon.com/png/512/2957/premium/2957480.png?token=exp=1647160422~hmac=b178fdca5b0c2571579db73d3d02f4af',
        title: 'Bikini',
        id: '1514843'
    },
    {
        imageUri: 'https://cdn-icons.flaticon.com/png/512/1776/premium/1776933.png?token=exp=1647160465~hmac=5304ed95aea8c0bdc206d65825fa4e28',
        title: 'Palm',
        id: '1843'
    },
    {
        imageUri: 'https://cdn-icons-png.flaticon.com/512/3126/3126710.png',
        title: 'Swimsuit',
        id: '18435'
    },
    {
        imageUri: 'https://cdn-icons.flaticon.com/png/512/2977/premium/2977402.png?token=exp=1647160598~hmac=70b8e4b7f3680cbb49c69cc21c852361',
        title: 'Turtle',
        id: '184355'
    },
    {
        imageUri: 'https://cdn-icons-png.flaticon.com/512/3126/3126671.png',
        title: 'Sunbed',
        id: '1843555'
    },
    {
        imageUri: 'https://cdn-icons.flaticon.com/png/512/2872/premium/2872601.png?token=exp=1647160706~hmac=adce4bda0f2fec00cba780c56369a208',
        title: 'Sneakers',
        id: '18453555'
    },
]


const SLIDER_DATA = [
    {
        title: 'Sunny days',
        color: 'turquoise'
    },
    {
        title: 'Sand & beach',
        color: 'aquamarine',
    },
    {
        title: 'Coctails & Party',
        color: 'tomato',
    },
    {
        title: 'All-inclusive',
        color: '#a531f9',
    }
]

const LOCATIONS = [
    {
        key: '1',
        locations: 'Canada',
        numberOfDays: 9,
        image: 'https://images.unsplash.com/photo-1498855926480-d98e83099315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        color: '#0C212D' 
    },
    {
        key: '2',
        locations: 'Iceland',
        numberOfDays: 3,
        image: 'https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1237&q=80',
        color: '#0C212D' 
    },
    {
        key: '3',
        locations: 'Bucharest, Romania',
        numberOfDays: 5,
        image: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        color: '#0C212D' 
    },
    {
        key: '4',
        locations: 'Brno, Czech republic',
        numberOfDays: 5,
        image: 'https://images.unsplash.com/photo-1611919965397-fa051b945824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1132&q=80',
        color: '#0C212D' 
    },
    {
        key: '5',
        locations: 'Paris, France',
        numberOfDays: 5,
        image: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        color: '#0C212D' 
    },
    {
        key: '6',
        locations: 'Latvia',
        numberOfDays: 5,
        image: 'https://images.unsplash.com/photo-1567669721460-221b82865ee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        color: '#0C212D' 
    },
    {
        key: '7',
        locations: 'Berlin, Germany',
        numberOfDays: 5,
        image: 'https://images.unsplash.com/photo-1509136561942-7d8663edaaa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
        color: '#0C212D' 
    },
    {
        key: '8',
        locations: 'Venice, Italy',
        numberOfDays: 5,
        image: 'https://images.unsplash.com/photo-1476802379768-84b0af3e39ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        color: '#0C212D' 
    },
]


export { DATA, SLIDER_DATA, LOCATIONS }