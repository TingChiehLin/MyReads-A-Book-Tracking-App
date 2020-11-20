# MyReads Project

This is the first project from [Udacity React Developer Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019)

Using [Create React App](https://github.com/facebookincubator/create-react-app) to develop the project.

## Learning Goal & Technology Use

* React Component Hierarchy
* React Class and Functional Component
* React Hook
* API Fetch / Update

## Getting Start

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server for API Use

 The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Result

#### Home

### Arrange Category

### Search Books


## Link
[MyReads App](https://vercel.com/cooloojayoo/myread/rfeeenpdf)

## License

This project is authorized by MIT License