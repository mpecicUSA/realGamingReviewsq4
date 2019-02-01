if(process.env.NODE_ENV !== "production")
    require('dotenv').load({path: './local.env'});

module.exports = {
    development: {
        client: 'pg',
        connection: {
<<<<<<< HEAD
            database: "realGamingReviews",
=======
            database: 'realGamingReviews',
>>>>>>> 2771c5d57b5436c7e515644d576f2979306aece7
            host: 'localhost'
            // ,user: 'postgres', 
            // password: 'root'
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },
    },
    production: {
        client: 'pg',
        connection: {
            database: process.env.RDS_DB,
            host: process.env.RDS_HOST,
            user: process.env.RDS_USER,
            password: process.env.RDS_PASSWORD,
            port: process.env.RDS_PORT
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds/production',
        },
    },
};
