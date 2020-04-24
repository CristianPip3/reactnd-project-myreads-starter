# MyReads Project

# MyReads

App that allows to organize books by bookshelf, which is divided into three categories, Read, Currently reading and I want to read, in addition to this it allows you to search for books by title and in this way I can add them to the three previous categories

## Starting :rocket:

These instructions will allow you to obtain a copy of the running project on your local machine for development and testing purposes.

See ** Deployment ** to learn how to deploy the project.

### Pre requirements 📋

These are the needs of the project in summary, for more information you can review the official documentation of the Framework, here it is about summarizing everything.

_1- Node y Npm (Node dependency manager)_

_2- React Js_

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

-   [`getAll`](#getall)
-   [`update`](#update)
-   [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

-   Returns a Promise which resolves to a JSON object containing a collection of book objects.
-   This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

-   book: `<Object>` containing at minimum an `id` attribute
-   shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
-   Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

-   query: `<String>`
-   Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
-   These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

### Installation 🔧

A series of step-by-step examples that tells you what to do to have a development environment running.

Steps to execute the project:

_1- Clone the project or download the ZIP file_

_2- Run in the command console (Previously installed) _

_Installation for mac_

    brew install node
    brew install watchman

_3- After verifying that you have all the \*\*_ Prerequisites _\*\*.
Open TWO terminals on the same path example_

``
$ pwd
/home/linuxp/

`_4- In one of the terminals execute the command: _`
$ npm install

``
_After finishing the installation of all dependencies you can run_

`$ npm start`

-   [Node v12.16.0](https://nodejs.org/en/) - The web framework used
-   [Npm 6.13.7](https://www.npmjs.com/) - Dependency handler
-   [Rest Client](https://www.getpostman.com/) - Used to make Rest requests
-   [Create React App](https://github.com/facebookincubator/create-react-app) This project was bootstrapped with (<https://github.com/facebookincubator/create-react-app>). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

    ## Autor :sunglasses:

-   **Cristian Felipe Benavides** - _Developer_ - [CristianPip3](https://github.com/CristianPip3)

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
