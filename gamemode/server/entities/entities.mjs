import orm from 'typeorm';

export const Users = new orm.EntitySchema({
    name: 'users',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        username: {
            type: 'text'
        },
        password: {
            type: 'text'
        },
        email: {
            type: 'text'
        },
        adminLevel: {
            type: 'int',
            default: 0
        },
        helperLevel: {
            type: 'int',
            default: 0
        },
        premium: {
            type: 'int',
            default: 0
        },
        premiumPoints: {
            type: 'int',
            default: 0
        },
        creation: {
            type: 'bigint',
            default: Date.now()
        },
        lastlogin: {
            type: 'bigint',
            default: Date.now()
        },
        playingtime: {
            type: 'int',
            default: 0
        },
        cash: {
            type: 'numeric',
            default: 0
        },
        faction: {
            type: 'int',
            default: -1
        },
        arrestTime: {
            type: 'int',
            default: -1
        },
        //JOBS
        truckerSkill: {
            type: 'int',
            default: 1
        },
        truckerProgress: {
            type: 'int',
            default: 0
        },
        courierSkill: {
            type: 'int',
            default: 1
        },
        courierProgress: {
            type: 'int',
            default: 0
        },
        fisherSkill: {
            type: 'int',
            default: 1
        },
        fisherProgress: {
            type: 'int',
            default: 0
        },
        playermodel: {
            type: 'text'
        },
        bank:  {
            type: 'numeric',
            default: 0
        },
        driverlicence: {
            type: 'numeric',
            default: 0
        },
        driverhours: {
            type: 'numeric',
            default: 0
        },
        level: {
            type: 'numeric',
            default: 0
        },
        job: {
            type:'numeric',
            default: 0
        },
        paydaytime:
        {
            type: 'numeric',
            default: 60
        }
    }
});