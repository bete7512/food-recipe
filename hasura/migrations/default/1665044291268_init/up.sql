SET check_function_bodies = false;
CREATE TABLE public.recipe (
    id integer NOT NULL,
    title text NOT NULL,
    instructions text NOT NULL,
    images text NOT NULL,
    durations integer NOT NULL,
    ingredient text NOT NULL,
    owner integer NOT NULL,
    categories text,
    descriptions text
);
CREATE FUNCTION public.rate_average(recipe_row public.recipe) RETURNS double precision
    LANGUAGE sql STABLE
    AS $$
    select AVG(star) FROM comment where recipe_id = recipe_row.id;
$$;
CREATE FUNCTION public.recipe_like_counter(recipe_row public.recipe) RETURNS bigint
    LANGUAGE sql STABLE
    AS $$ select count(1) FROM likes where recipe_id = recipe_row.id;
$$;
CREATE FUNCTION public.user_favorite(recipe_row public.recipe, hasura_session json) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
SELECT EXISTS (
    SELECT 1
    FROM favorite A
    WHERE A.user_id = CAST((hasura_session ->> 'x-hasura-user-id') as INTEGER)  AND A.recipe_id = recipe_row.id
);
$$;
CREATE TABLE public.users (
    id integer NOT NULL,
    fname text,
    lname text NOT NULL,
    email text NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    profile_image text,
    bios text,
    public_name text
);
CREATE FUNCTION public.user_full_name(user_row public.users) RETURNS text
    LANGUAGE sql STABLE
    AS $$
    SELECT  user_row.fname || ' ' || user_row.lname from users;
$$;
CREATE FUNCTION public.user_likes(recipe_row public.recipe, hasura_session json) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
SELECT EXISTS (
    SELECT 1
    FROM likes A
    WHERE A.user_id = CAST((hasura_session ->> 'x-hasura-user-id') as INTEGER)  AND A.recipe_id = recipe_row.id
);
$$;
CREATE FUNCTION public.user_recipe_counter(user_row public.users) RETURNS bigint
    LANGUAGE sql STABLE
    AS $$ select count(1) FROM recipe where owner = user_row.id
$$;
CREATE TABLE public.comment (
    user_id integer NOT NULL,
    recipe_id integer NOT NULL,
    comment text NOT NULL,
    commented_at date DEFAULT now(),
    star real DEFAULT '0'::real NOT NULL
);
CREATE TABLE public.favorite (
    user_id integer NOT NULL,
    recipe_id integer NOT NULL
);
CREATE TABLE public.likes (
    user_id integer NOT NULL,
    recipe_id integer NOT NULL
);
CREATE SEQUENCE public.recipe_durations_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.recipe_durations_seq OWNED BY public.recipe.durations;
CREATE SEQUENCE public.recipe_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.recipe_id_seq OWNED BY public.recipe.id;
CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
ALTER TABLE ONLY public.recipe ALTER COLUMN id SET DEFAULT nextval('public.recipe_id_seq'::regclass);
ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (user_id, recipe_id);
ALTER TABLE ONLY public.favorite
    ADD CONSTRAINT favorite_pkey PRIMARY KEY (user_id, recipe_id);
ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (user_id, recipe_id);
ALTER TABLE ONLY public.recipe
    ADD CONSTRAINT recipe_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipe(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.favorite
    ADD CONSTRAINT favorite_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipe(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.favorite
    ADD CONSTRAINT favorite_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipe(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
ALTER TABLE ONLY public.recipe
    ADD CONSTRAINT recipe_owner_fkey FOREIGN KEY (owner) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
