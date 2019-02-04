if(process.env.NODE_ENV !== "production")
    require('dotenv').load({path: './local.env'});

module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: 'realGamingReviews',
<<<<<<< HEAD
            host: 'localhost',
=======
            host: 'localhost'
            // user: 'postgres', 
            // password: 'root'
>>>>>>> b6653bda1a353d590652629a2f7524220ce16fca
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
