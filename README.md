utilizei o prisma para de ORM 
mongo db para banco de dados
e o express para as rotas CRUD  
JWT para gerar os token de autentucaçao
bccrypt para encriptar a senha no banco
json2csv para converter os dados que o prisma busca no banco para csv





  ROTA PARA BUSCAR TODOS USUARIOS - PRECISA DO TOKEN DE LOGIN ./src/CRUD.index.jsx
	<>
  ![image](https://github.com/user-attachments/assets/8843e020-54ad-4f3b-9e15-6066a21fc9b1)
  </>		

  ROTA QUE GERA O RELATORIO E CSV
			"name": "/export/csv  GERAR relatorio csv",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{URL}}/export/csv",
					"host": [
						"{{URL}}"
					],
					"path": [
						"export",
						"csv"
					]
				}
			},
			"response": []
		},
		{
			"name": "/register - Novo usuário",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\": \"margot\",\r\n    \"email\": \"margot@email.com\",\r\n    \"password\": \"senha\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{URL}}/register",
					"host": [
						"{{URL}}"
					],
					"path": [
						"register"
					]
				}
			},
			"response": []
		},
		{
			"name": "/login - Autenticar usuário",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"email\": \"pinho@email.com\",\r\n    \"password\": \"senha\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{URL}}/login",
					"host": [
						"{{URL}}"
					],
					"path": [
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "/user/:id - Rota publica",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{URL}}/user/668df333d78b0f8ae52a739c",
					"host": [
						"{{URL}}"
					],
					"path": [
						"user",
						"668df333d78b0f8ae52a739c"
					]
				}
			},
			"response": []
		},
		{
			"name": "/find/email - Rota publica",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"email\": \"pinho@email.com\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{URL}}/find/email",
					"host": [
						"{{URL}}"
					],
					"path": [
						"find",
						"email"
					]
				}
			},
			"response": []
		},
		{
			"name": "/find/:email - Rota com validação",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGRmMzMzZDc4YjBmOGFlNTJhNzM5YyIsImlhdCI6MTcyMDY1MjY2NX0.Ca-V8unCuW78tbYy_xquepUOme10cNRfSjy7F-0tTR4",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{URL}}/email/:email",
					"host": [
						"{{URL}}"
					],
					"path": [
						"email",
						":email"
					],
					"variable": [
						{
							"key": "email",
							"value": "pinho@email.com",
							"type": "string"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "/updateuser - Rota com validação",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGRmMzMzZDc4YjBmOGFlNTJhNzM5YyIsImlhdCI6MTcyMTA3MDQ5OH0.PlVOpIZR3fl7HZtBqhEs3WRi5iY9rFGkKbAFECntsfs",
							"type": "string"
						}
					]
				},
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"email\": \"pinho@email.com\",\n    \"name\": \"pinho das neves\",\n    \"level\": 5\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{URL}}/updateuser",
					"host": [
						"{{URL}}"
					],
					"path": [
						"updateuser"
					]
				}
			},
			"response": []
		},
		{
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
