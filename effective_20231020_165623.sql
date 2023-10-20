--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: history; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.history (
    id integer NOT NULL,
    event character varying(255),
    user_id integer NOT NULL,
    created_at timestamp with time zone
);


ALTER TABLE public.history OWNER TO postgres;

--
-- Name: history_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.history_id_seq OWNER TO postgres;

--
-- Name: history_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.history_id_seq OWNED BY public.history.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    role character varying NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_id_seq OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying,
    name character varying,
    role_id integer DEFAULT 2,
    created_at timestamp with time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: history id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.history ALTER COLUMN id SET DEFAULT nextval('public.history_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: history; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.history VALUES
	(9, 'Залогинился', 28, '2023-10-19 15:28:58.427+03'),
	(10, 'Залогинился', 28, '2023-10-19 15:32:36.101+03'),
	(11, 'Регистрация', 56, '2023-10-19 15:34:22.472+03'),
	(12, 'Изменение данных пользователя', 56, '2023-10-19 15:40:04.287+03'),
	(13, 'Изменение данных пользователя', 56, '2023-10-19 15:41:02.015+03'),
	(14, 'Добавление пользователя', 57, '2023-10-19 15:42:52.706+03'),
	(15, 'Изменение данных пользователя', 57, '2023-10-19 15:49:04.998+03'),
	(16, 'Залогинился', 28, '2023-10-19 15:58:35.429+03'),
	(17, 'Залогинился', 28, '2023-10-19 15:59:01.712+03');


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.roles VALUES
	(1, 'admin'),
	(2, 'user');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users VALUES
	(54, '3101000@bk.rucvxcvc', NULL, NULL, 2, '2023-10-19 14:43:26.385+03'),
	(52, 'denis23qw@gmail.comcvxcvcvc', 'U2FsdGVkX1+/3FRq8fmBJTTlTE3Ukgrnpa4KMfJEK8Q=', NULL, 2, '2023-10-19 14:43:26.385+03'),
	(51, 'denis23qw@gmail.comcxcxczxc', 'U2FsdGVkX19Jk0OomzyyaRmFq3KkYXigvNFht4SWK2M=', NULL, 2, '2023-10-19 14:43:26.385+03'),
	(50, '3101000@bk.ruxczcxzcx', 'U2FsdGVkX1+ImVluFao9FQdSkvi8kN1GqoK+XO/hT1k=', 'xzcxzczxc', 2, '2023-10-19 14:43:26.385+03'),
	(49, '3101000@bk.rucxzcxvcvcxv', 'U2FsdGVkX1/5Oxk6OrCmXVrBwfcjIA5hMncjENrToOA=', NULL, 2, '2023-10-19 14:43:26.385+03'),
	(48, '3101000@bk.rucxvcxvcx', 'U2FsdGVkX19fpQAmS3VVYov2ujbDLQ1Y+ekuLjvDRNw=', NULL, 2, '2023-10-19 14:43:26.385+03'),
	(47, '3101000@bk.rucvcxvxcbvxcb', 'U2FsdGVkX1+8rlJ7sUt0b1cQP3MDIRCpYb5FXyY8XMY=', NULL, 2, '2023-10-19 14:43:26.385+03'),
	(46, '3101000@bk.ruxczxcxzc', 'U2FsdGVkX1/rzsfNbhD0Dtr3T9Vcebi0EaM2zqwZPt8=', 'erwerwer', 1, '2023-10-19 14:43:26.385+03'),
	(45, '3101000@bk.ruqw', 'U2FsdGVkX19ibl7z14AotY7knEVJ6WHcT/JtFAl8IQM=', 'ewew', 2, '2023-10-19 14:43:26.385+03'),
	(44, '3101000@bk.rucxczx', 'U2FsdGVkX1+a/7J+tslxt9NPo3LWenQND6gA2j2kVvo=', 'cxczxcx', 1, '2023-10-19 14:43:26.385+03'),
	(43, '3101000xcxcx@bk.ru', 'U2FsdGVkX19391EeA3242uiTnmnhM0OJ63m/Vp4NbGI=', 'sdfsdf', 2, '2023-10-19 14:43:26.385+03'),
	(42, '3101000@bk.ru3424', 'U2FsdGVkX19HXjcS6RxqFWfhGvmRuegrWK7d2Bkiyuo=', 'vvvvvvvvvv', 2, '2023-10-19 14:43:26.385+03'),
	(41, '3101000@bk.rucxcvxcv', 'U2FsdGVkX19HC1yk4fY0vyH2k+69AjyVGdU4gnwB8aQ=', NULL, 2, '2023-10-19 14:43:26.385+03'),
	(40, '3101000@bk.ruvbb', 'U2FsdGVkX1+BrXWki/woozhHGheK+JOVRET06QxTq40=', NULL, 1, '2023-10-19 14:43:26.385+03'),
	(39, '3101000@bk.rudff', 'U2FsdGVkX1+1l0E6O0539WVMY61Wx4+mJhZn7+xRtfo=', NULL, 1, '2023-10-19 14:43:26.385+03'),
	(38, '3101000123w@bk.ru', 'U2FsdGVkX1+04ZVgaBX/oYOR51biTC+V0ejQLVRnCGI=', NULL, 1, '2023-10-19 14:43:26.385+03'),
	(37, 'denis23qw@gmail.com', 'U2FsdGVkX1/yzwzN8FDLqO+9P7JxBgisiVBbRPW2eNk=', NULL, NULL, '2023-10-19 14:43:26.385+03'),
	(36, 'denis23qw@gmail.com1', 'U2FsdGVkX1/SblkTz5ncLQfqFpeaBkXvjt1nlF/TaSw=', 'vsvsdsb', 1, '2023-10-19 14:43:26.385+03'),
	(35, 'denis23@gmail.com1', 'U2FsdGVkX1+pvLEVvWDjOtDeoxhjc7LfSLEiMgCAcTo=', 'dfsfsdfsd', 1, '2023-10-19 14:43:26.385+03'),
	(34, '3101000145@bk.ru', 'U2FsdGVkX1/HH5PDGtdNNdBLS7tnX69comA/sb3OAyU=', 'аввавыа', 1, '2023-10-19 14:43:26.385+03'),
	(33, '310100044@bk.ru', 'U2FsdGVkX19Se1SpA0NIwAE72Y/YUDLJhqDkI8yAtYs=', NULL, NULL, '2023-10-19 14:43:26.385+03'),
	(32, '310100033@bk.ru', 'U2FsdGVkX19f+nLdX7977qhGCm3rvMrMdnT7zUCVfrI=', NULL, NULL, '2023-10-19 14:43:26.385+03'),
	(31, '310100011@bk.ru', 'U2FsdGVkX18IA/56d5C0lqKj8+NGo3uKsYq3uk6Q99g=', NULL, NULL, '2023-10-19 14:43:26.385+03'),
	(30, '31010001@bk.ru', 'U2FsdGVkX1+blvB+NPmEarLl5vS+o9iuK5672ejxy1A=', NULL, NULL, '2023-10-19 14:43:26.385+03'),
	(28, '3101000@bk.ru', 'U2FsdGVkX1/g80xogTjx1c8sbfSTFNL3RGIOPjmOelM=', NULL, 1, '2023-10-19 14:43:26.385+03'),
	(24, 'denis@gmail.com1', 'U2FsdGVkX19XQD/DesqSLRJ1EZ6CVpUP5l4nn+OkDNU=', NULL, NULL, '2023-10-19 14:43:26.385+03'),
	(20, 'denis@gmail.com', 'U2FsdGVkX1+Ya0Bzo5L6pCX68+y+ywsH3uYhCOfvAsk=', NULL, NULL, '2023-10-19 14:43:26.385+03'),
	(56, '3101000@bk.ruxcxcxzcxzc', 'U2FsdGVkX18XA3v7EHxZ4H7kWwo5lmhCi35N2t8Bc9s=', 'чясячсячс', 2, '2023-10-19 15:34:22.26+03'),
	(57, '3101000@bk.ruмсчмсчмч', 'U2FsdGVkX1951eE6q9BZy12/Wofz7+s3wCjxVOfZ5co=', 'ваываыва', 2, '2023-10-19 15:42:52.489+03');


--
-- Name: history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.history_id_seq', 17, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 57, true);


--
-- Name: history history_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.history
    ADD CONSTRAINT history_pkey PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: history history-user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.history
    ADD CONSTRAINT "history-user" FOREIGN KEY (user_id) REFERENCES public.users(id) MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users user_role; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_role FOREIGN KEY (role_id) REFERENCES public.roles(id) MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

