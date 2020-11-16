if [ -f prisma/.env ]
then
    export $(cat prisma/.env | sed 's/#.*//g' | xargs)
fi

pg_dump -c -d $DATABASE_URL --no-owner | psql -d $CLOUD_DATABASE_URL -1 



# --file="/home/boogie/GL3-2021-2020-{timestamp}-dump.sql" --clean --dbname="schedule-dev" --schema='public' --table=public.Filiere --table=public.FiliereWithLevel --table=public.Professor --table=public.SchoolSession --table=public.SchoolTime --table=public.SessionType --table=public.Subject --table=public.WeekDay --if-exists 
