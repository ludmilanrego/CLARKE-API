# Aplicação para listagem de fornecedores 
nodeJS | PostgreSQL | API REST


A API consiste em uma ferramenta para a listagem de fornecedores que tem valor mínimo de consumo inferior ou igual ao consumo informado.

Todas as funcionalidades operam vinculadas a um banco de dados SQL e as imagens das logos dos fornecedores foram salvas em um diretório no blackblaze.

API disponível em: https://clarkeapi.onrender.com

Para experiência completa acessar o repositório [CLARKE - UI] (https://github.com/ludmilanrego/CLARKE-UI)
 ou acessar https://clarke-ui.vercel.app/ 

## Como rodar o projeto

1 - Crie o banco de dados no Beekeeper.

1.1 - Crie uma conexão com:

host: 'localhost',
port: 5432,
user: 'postgres',
password: '123456'

1.2 - Crie uma banco de dadoscom o neome clarke
Copie o comando descrito no arquivo dump.sql na seção reservada para as querys no beekeeper e selecione run.
Após a criação do banco selecione o banco clarke na lista de banco de dados

1.3 - Crie as tabelas
Copie o comando descrito no arquivo dump.sql na seção reservada para as querys no beekeeper e selecione run.

1.4 - Iserira categorias na tabela categorias
Copie o comando descrito no arquivo dump.sql na seção reservada para as querys no beekeeper e selecione run.

2 - Tenha certeza que o npm está instalado.

Para isso use o comando npm -v no terminal do VScode

3 - Com o npm instalado rode o rode em seguida:

npm i npm run dev no terminal do VScode


## Testando a aplicação - Endpoints

### Listar fornecedores em função do valor de consumo

#### `POST` `/suppliers/minkwh`

Esse endpoint lista todos os fornecedores cadastrados que exigem um valor de consumo de energia mensal inferior ou igual ao valor de consumo informado.
Atenção: O valor de consumo informado deve estar em kWh.

curl --request GET \
  --url http://localhost:3001/suppliers/minkwh \
  --header 'Content-Type: application/json' \
  --data '{
	"energyConsumption": 100
}'

- **Requisição**  
    Sem parâmetros de rota ou de query.  
    O corpo (body) deverá possuir um objeto com a propriedade:
  - energyConsumption
 

- **Resposta**  
    O corpo (body) da resposta apresenta o conteúdo do usuário cadastrado. 


#### **Exemplo de resposta**

```javascript
[{"id":2,"name":"Corumbá","img":"https://f005.backblazeb2.com/file/clarke-challenge/corumba-concessoes.png","origin_state":"Bahia","cost_per_kwh":105,"min_kwh":100,"total_customers":100,"costumers_score":4},{"id":3,"name":"Aratu","img":"https://f005.backblazeb2.com/file/clarke-challenge/aratu.jpg","origin_state":"Bahia","cost_per_kwh":100,"min_kwh":100,"total_customers":100,"costumers_score":5},{"id":4,"name":"Ventos Potiguares","img":"https://f005.backblazeb2.com/file/clarke-challenge/ventos-potiguares.png","origin_state":"Piauí","cost_per_kwh":109,"min_kwh":10,"total_customers":100,"costumers_score":3},{"id":5,"name":"d","img":"https://f005.backblazeb2.com/file/clarke-challenge/aratu.jpg","origin_state":"Bahia","cost_per_kwh":107,"min_kwh":10,"total_customers":100,"costumers_score":5},{"id":6,"name":"e","img":"https://f005.backblazeb2.com/file/clarke-challenge/ventos-potiguares.png","origin_state":"São Paulo","cost_per_kwh":110,"min_kwh":50,"total_customers":100,"costumers_score":2}]
```


###### tags: `back-end` `nodeJS` `PostgreSQL` `API REST`
