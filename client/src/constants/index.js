export const navData = [
    {path: '/' , title: 'Start a search'},
    {path: '/my-job' , title: 'My Jobs'},
    {path: '/salary' , title: 'Salary Estimate'},
    {path: '/post-job' , title: 'Post a Job'}
]


export const cityNames = [
    {
        name: 'All',
        val: 'city'
    },
    {
        name: 'London',
        val: 'city'
    },
    {
        name: 'Boston',
        val: 'city'
    },
    {
        name: 'Seattle',
        val: 'city'
    },
    {
        name: 'Florida',
        val: 'city'
    },
    {
        name: 'San Francisco',
        val: 'city'
    },

]

export const salaryType = [
    {
        name: 'Hourly'
    },
    {
        name: 'Monthly'
    },
    {
        name: 'Yearly'
    }
]


export const salaryLimit = [
    {
        name: 'All',
        val: 'salary'
    },
    {
        name: '<30000k', 
        value: 30,
        val: 'salary'
    },
    {
        name: '<50000k', 
        value: 50,
        val: 'salary'
    },
    {
        name: '<80000k', 
        value: 80,
        val: 'salary'
    },
    {
        name: '<100000k', 
        value: 100,
        val: 'salary'
    },
]


export const datePost = [
    {
        name: 'All time', 
        timezone: 'all',
        val: 'post'
    },
    {
        name: 'Last 24 hours', 
        timezone: new Date(new Date() - 24 * 60 * 60 * 1000).toISOString().slice(0,10),
        val: 'post'
    },
    {
        name: 'Last 7 days', 
        timezone: new Date(new Date() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0,10),
        val: 'post'
    },
    {
        name: 'Last Month', 
        timezone: new Date(new Date() - 30 * 30 * 60 * 60 * 1000).toISOString().slice(0,10),
        val: 'post'
    }
]

export const workExp = [
    {
        name: 'Any Experience', 
        work: 'all',
        val: 'experience'
    },
    {
        name: 'Internship', 
        work: 'Internship',
        val: 'experience'
    },
    {
        name: 'Work remotely',
        work: 'Work remotely',
        val: 'experience'
    }
]

export const employment = [
    {
        name: 'Any', 
        type: 'all',
        val: 'employment'
    },
    {
        name: 'Full-time', 
        type: 'Full-time',
        val: 'employment'
    },
    {
        name: 'Temporary', 
        type: 'Temporary',
        val: 'employment'
    },
    {
        name: 'Part-time', 
        type: 'Part-time',
        val: 'employment'
    }
]

import location from '../assets/svg/location.svg';
import phone from '../assets/svg/phone.svg';
import time from '../assets/svg/time.svg';


export const contact = [
    {
        personalData: 'Main KKH, Chinese GraveYard Danyore, Gilgit, Pakistan.',
        svg: location
    },
    {
        personalData: '+92 00 00 00 0',
        svg: phone
    },
    {
        personalData: '24/7',
        svg: time
    }

]