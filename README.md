NESSE DESAFIO FOQUEI NO BACK MAS TAMBÉM QUASE TERMINEI O DESAFIO DO FRONT :)

utilizei o prisma para de ORM 

mongo db para banco de dados

e o express para as rotas CRUD  

JWT para gerar os token de autentucaçao

bccrypt para encriptar a senha no banco

json2csv para converter os dados que o prisma busca no banco para csv




./src/CRUD.index.jsx
[GET]
ROTA PARA BUSCAR TODOS USUARIOS - PRECISA DO TOKEN DE LOGIN 
![image](https://github.com/user-attachments/assets/8843e020-54ad-4f3b-9e15-6066a21fc9b1)

[GET]
ROTA QUE GERA O RELATORIO E CSV - (Faltou tempo para buscar a solução de permitir apenas usuários com nível de acesso mais alto acessar)
![image](https://github.com/user-attachments/assets/03f2b552-fe80-4c88-bccd-1d2d6b281eef)

[POST]
ROTA DE LOGIN - AUTENTICA O USUARIO E GERA O TOKEN COM O JWT
![image](https://github.com/user-attachments/assets/005ad214-b355-4f7e-b493-95f892517eb4)

[GET] 
ROTA DE BUSCA - BUSCA OS USUÁRIOS POR EMAIL (NECESSITA DE TOKEN) REQUISIÇÃO NA URL
![image](https://github.com/user-attachments/assets/a6b6d595-463e-4650-85cc-2c2e15cf7182)

[GET] 
ROTA DE BUSCA - BUSCA OS USUÁRIOS POR EMAIL (PÚBLICA) REQUISIÇÃO NO BODY
![image](https://github.com/user-attachments/assets/fc6fbfb9-9e1c-424c-a7af-7a2e44c6a329)

			"name": "/updateuser - Rota com validação Copy",
			"request": {
				"auth": {
					"type": "basic"
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{URL}}//export/csv  GERAR relatorio",
					"host": [
						"{{URL}}"
					],
					"path": [
						"",
						"export",
						"csv  GERAR relatorio"
					]
				}
			},
			"response": []
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "URL",
			"value": "http://localhost:3000",
			"type": "string"
		},
		{
			"key": "TOKEN",
			"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGJkNjA2MjNhN2I4NDBhZjk3YTQ4NiIsImlhdCI6MTcxNjI2Mzk3MX0.e8Gp7n6gE2OAtCPqkarVVq1nQpqSFM45FC4XFMfk9DE",
			"type": "string"
		}
	]
}
