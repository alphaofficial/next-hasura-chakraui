alter table "public"."users" add column "created_at" timestamptz
 not null default now();
