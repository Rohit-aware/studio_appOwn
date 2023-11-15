interface categoryData {
    title: string,
    img: any
}

interface morningProps {
    img: any;
    title: string;
    date: string;
    time: string;
}
interface schedualProrps {
    day: string;
    date: number
}
interface schedualList {
    time: string;
    type: string;
    trainer: string;
    duration: string;
}


export const category: categoryData[] = [
    {
        title: 'Yoga',
        img: require('../assets/images/Yoga.png')
    },
    {
        title: 'Kickboxing',
        img: require('../assets/images/kickboxing.png')
    },
    {
        title: 'Crossfit',
        img: require('../assets/images/crossFit.png')
    },
    {
        title: 'Personal Fitness',
        img: require('../assets/images/personalFitness.png')
    },
    {
        title: 'Dance Fitness',
        img: require('../assets/images/danceFitness.png')
    },
    {
        title: 'Boxing',
        img: require('../assets/images/boxing.png')
    },
]

export const MornignSessions: morningProps[] = [
    {
        img: require('../assets/images/kicking.png'),
        title: 'Kick boxing',
        date: '9th Nov 2023',
        time: '7 pm',
    },
    {
        img: require('../assets/images/kicking.png'),
        title: 'Kick boxing',
        date: '9th Nov 2023',
        time: '7 pm',
    },
    {
        img: require('../assets/images/kicking.png'),
        title: 'Kick boxing',
        date: '9th Nov 2023',
        time: '7 pm',
    },
    {
        img: require('../assets/images/kicking.png'),
        title: 'Kick boxing',
        date: '9th Nov 2023',
        time: '7 pm',
    },
    {
        img: require('../assets/images/kicking.png'),
        title: 'Kick boxing',
        date: '9th Nov 2023',
        time: '7 pm',
    },
    {
        img: require('../assets/images/kicking.png'),
        title: 'Kick boxing',
        date: '9th Nov 2023',
        time: '7 pm',
    },
]


export const dateTimeListData: schedualProrps[] = [
    {
        day: 'SUN',
        date: 12
    },
    {
        day: 'MON',
        date: 13
    },
    {
        day: 'TUE',
        date: 14
    },
    {
        day: 'WED',
        date: 15
    },
    {
        day: 'THU',
        date: 16
    },
    {
        day: 'FRI',
        date: 17
    },
    {
        day: 'SAT',
        date: 18
    },
]


export const SchedualList: schedualList[] = [
    {
        time: '8 AM',
        type: 'Yoga',
        trainer: 'Mitchel Santner',
        duration: '1 hr'
    },
    {
        time: '8 AM',
        type: 'Yoga',
        trainer: 'Mitchel Santner',
        duration: '1 hr'
    },
    {
        time: '8 AM',
        type: 'Yoga',
        trainer: 'Mitchel Santner',
        duration: '1 hr'
    },
    {
        time: '8 AM',
        type: 'Yoga',
        trainer: 'Mitchel Santner',
        duration: '1 hr'
    },
    {
        time: '8 AM',
        type: 'Yoga',
        trainer: 'Mitchel Santner',
        duration: '1 hr'
    },
    {
        time: '8 AM',
        type: 'Yoga',
        trainer: 'Mitchel Santner',
        duration: '1 hr'
    },
    {
        time: '8 AM',
        type: 'Yoga',
        trainer: 'Mitchel Santner',
        duration: '1 hr'
    },
    {
        time: '8 AM',
        type: 'Yoga',
        trainer: 'Mitchel Santner',
        duration: '1 hr'
    },
]