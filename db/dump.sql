
-- criar banco de dados
create database clarke;

-- criar tabela
create table suppliers (
  id serial primary key,
  name text not null,
  img text not null,
  origin_state text not null,
  cost_per_kwh int not null,
  min_kwh int not null,
  total_customers int not null,
  costumers_score int not null
);

-- create table categorias (
--   id serial primary key,
--   descrição text
-- );

-- create table transacoes (
--   id serial primary key,
--   descrição text,
--   valor int not null,
--   data date,
--   categoria_id int references categorias(id) not null,
--   usuario_id int references usuarios(id) not null,
--   tipo text
-- );

--iserir categorias na tabela categorias
INSERT INTO "suppliers" (name, img, origin_state, cost_per_kwh, min_kwh, total_customers, costumers_score) 
VALUES 
('a', 'xxxx', 'Bahia', 105, 100, 100, 4),
('b', 'xxxx', 'Bahia', 100, 100, 100, 5),
('c', 'xxxx', 'Piauí', 109, 10, 100, 3),
('d', 'xxxx', 'Bahia', 107, 10, 100, 5),
('e', 'xxxx', 'São Paulo', 110, 50, 100, 2)
