if(process.env.NODE_ENV !== "production")
    require('dotenv').load({path: './local.env'});

module.exports = {
    development: {
        client: 'pg',
        connection: {
<<<<<<< HEAD
            database: "realGamingReviews",
            host: 'localhost',
            user: 'postgres', 
            password: 'root'
=======
            database: 'realGamingReviews',
            host: 'localhost'
            // ,user: 'postgres', 
            // password: 'root'
>>>>>>> 3cd4be65f33665a6f70d2c2099a75044bf01530f
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
