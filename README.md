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
<img width="1761" alt="Home" src="https://user-images.githubusercontent.com/17351134/99809477-76041580-2b96-11eb-8fd7-4d72c9edeb9e.png">

#### Arrange Category
<img width="450" alt="Category" src="https://user-images.githubusercontent.com/17351134/99809483-77cdd900-2b96-11eb-8ed4-bcb02080e6fe.png">

#### Search Books
<img width="1784" alt="Search" src="https://user-images.githubusercontent.com/17351134/99809485-78ff0600-2b96-11eb-9748-44a56ef30170.png">


## Link
[MyReads App](https://myread-rfeeenpdf.vercel.app/)

## License

This project is authorized by MIT License