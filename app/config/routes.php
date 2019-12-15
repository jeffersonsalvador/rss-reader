<?php
use MiladRahimi\PhpRouter\Router;

$router = new Router('', 'App\Controllers');

$router->post('/api/validate/email', 'UserController@email');
$router->post('/api/create', 'UserController@create');
$router->post('/api/login', 'UserController@login');

$router->dispatch();
