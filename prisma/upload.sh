if [ -f prisma/.env ]
then
    export $(cat prisma/.env | sed 's/#.*//g' | xargs)
fi

pg_dump -c -d $DATABASE_URL --no-owner | psql -d $CLOUD_DATABASE_URL -1 

