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

--iserir categorias na tabela categorias
INSERT INTO "suppliers" (name, img, origin_state, cost_per_kwh, min_kwh, total_customers, costumers_score) 
VALUES 
('Cana Brava', 'https://f005.backblazeb2.com/file/clarke-challenge/canabravalogo1.png', 'Rio de Janeiro', 105, 100, 100, 4)

