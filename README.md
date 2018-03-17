
# Api de Usuarios

## Create

`POST api/users`

La operación de creación recibirá un JSON con la siguiente estructura mediante POST:

```
POST api/users
{
  "id": Number,
  "name": "String",
  "last_name": "String",
  "address": "String",
  "city": "String",
  "state": "String",
  "country": "String",
  "phone": "String",
  "area_code": "String",
  "birthdate": "Date"
}
```

### Ejemplo

```
POST api/users -d'
{
  "id": 12345678,
  "name": "Sebastian",
  "last_name": "Velasquez",
  "address": "Calle 47n #3fn-10",
  "city": "Cali",
  "state": "Valle",
  "country": "String",
  "phone": "String",
  "area_code": "String",
  "birthdate": "Date"
}'
```

__Respuesta__

El código de respuesta debe ser `200 Created`

```json
{
  "_id" : "507f1f77bcf86cd799439011",
  "id": 12345678,
  "name": "Sebastian",
  "last_name": "Velasquez",
  "address": "Calle 47n #3fn-10",
  "city": "Cali",
  "state": "Valle",
  "country": "Colombia",
  "phone": "3147065196",
  "area_code": "57",
  "birthdate": "08-09-1994",
  "__v" : 0
}
```
  
__Errores__

* `500 Server Error` Este error se debe retornar si:
  * Ocurre un error al guardar el usuario en la base de datos.

## Update

`PUT api/users/:id`

Se requiere el `id` en la url  y un objeto JSON con la misma estructura de la acción crear. La petición debe ser PUT

### Ejemplo 

```
PUT api/users/12345678 -d'
{
  "id": 12345678,
  "name": "Juan",
  "last_name": "Velasquez",
  "address": "Calle 47n #3fn-10",
  "city": "Cali",
  "state": "Valle",
  "country": "Colombia",
  "phone": "3147065196",
  "area_code": "57",
  "birthdate": "08-09-1994"
}'
```

__Respuesta__

El codigo de respuesta debe ser `200 OK`

```json
{
  "_id" : "507f1f77bcf86cd799439011",
  "id": 12345678,
  "name": "Juan",
  "last_name": "Velasquez",
  "address": "Calle 47n #3fn-10",
  "city": "Cali",
  "state": "Valle",
  "country": "Colombia",
  "phone": "3147065196",
  "area_code": "57",
  "birthdate": "08-09-1994",
  "__v" : 0
}
```

__Errores__

* `500 Server Error`  Si ocurre un error al actualizar el usuario

## Index

`GET api/users`

Retorna la lista de todos los usuarios existentes.

### Ejemplo

```
GET api/users
```

__Respuesta__

El codigo de respuesta debe ser `200 OK`

```json
{
  "users": [
    {
	  "_id" : "507f1f77bcf86cd799439011",
	  "id": 12345678,
	  "name": "Juan",
	  "last_name": "Velasquez",
	  "address": "Calle 47n #3fn-10",
	  "city": "Cali",
	  "state": "Valle",
	  "country": "Colombia",
	  "phone": "3147065196",
	  "area_code": "57",
	  "birthdate": "08-09-1994",
	  "__v" : 0
	}
    {
	  "_id" : "507f1f77bcf86cd79943901a",
	  "id": 987654321,
	  "name": "Sebastian",
	  "last_name": "Valencia",
	  "address": "Calle 47n #3fn-10",
	  "city": "Cali",
	  "state": "Valle",
	  "country": "Colombia",
	  "phone": "3147065196",
	  "area_code": "57",
	  "birthdate": "08-09-1994",
	  "__v" : 0
	}
  ]
}

```

__Errores__

* `500 Server Error`  Si ocurre un error al consultar los usuarios.
* `404 Not Found`  Si no existen usuarios registrados.

## Show

`GET api/users/:id:`

### Ejemplo 1

```
GET api/users/12345678
```

__Respuesta__

El codigo de respuesta debe ser `200 OK`

```json
{
  "_id" : "507f1f77bcf86cd79943901a",
  "id": 987654321,
  "name": "Sebastian",
  "last_name": "Valencia",
  "address": "Calle 47n #3fn-10",
  "city": "Cali",
  "state": "Valle",
  "country": "Colombia",
  "phone": "3147065196",
  "area_code": "57",
  "birthdate": "08-09-1994",
  "__v" : 0
}
```

__Errores__

* `500 Server Error` Error al realizar la petición.
* `404 Not Found` El usuario no existe.

## Destroy

`DELETE api/users/:id:`

### Ejemplo 1

```
DELETE api/users/123456789
```

__Respuesta__

El codigo de respuesta debe ser `204 No Content`

__Errores__

* `500 Server Error` Error al realizar la petición.
* `404 Not Found` El usuario no existe.
