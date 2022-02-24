# Holiday Chat Agent

A simple 'chat agent' SPA made with Laravel and React.

## Description

As part of my apprenticeship with Estio Training, I was tasked with the creation of a simple 'chat bot' esque application - requiring the ability to ask users at least two questions, and provide matching holidays from a provided dataset based on responses.

Whilst remaining an extremely simple application, I have implemented extra tasks than were identified within the initial brief. These include user authentication - powered by Laravel Sanctum - and user access levels.

## Getting Started

### Dependencies

-   Git
-   Node
-   NPM
-   PHP
-   Composer
-   MySQL

### Installing

From the command line, clone this repository:
`$ git clone https://github.com/samharvey44/holiday-chat-agent`

### Executing program

-   Initialise the project:
    `$ npm install`
    `$ composer install`

-   Copy the .env.example file, and rename it to .env.

-   Configure the database credentials in the newly created .env file.

-   Migrate and seed the database:
    `$ npm run migrate`

-   Generate the app key:
    `$ php artisan key:generate`

-   And finally, start the server!
    `$ php artisan serve`
