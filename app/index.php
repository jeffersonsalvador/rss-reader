<?php
ini_set("display_errors", true);
error_reporting(E_ALL);

require_once "../vendor/autoload.php";

use Illuminate\Database\Capsule\Manager as Capsule;
use Symfony\Component\Dotenv\Dotenv;
use App\Models\User;

$dotenv = new Dotenv();
$dotenv->load(__DIR__ . '/../.env');

$capsule = new Capsule();
$capsule->addConnection([
    'driver'    =>  getenv('DB_CONNECTION'),
    'host'      =>  getenv("DB_HOST"),
    'database'  =>  getenv("DB_DATABASE"),
    'username'  =>  getenv("DB_USERNAME"),
    'password'  =>  getenv("DB_PASSWORD"),
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix'    => '',
]);

// Set the event dispatcher used by Eloquent models... (optional)
//use Illuminate\Events\Dispatcher;
//use Illuminate\Container\Container;
//$capsule->setEventDispatcher(new Dispatcher(new Container));

// Make this Capsule instance available globally via static methods... (optional)
$capsule->setAsGlobal();

// Setup the Eloquent ORM... (optional; unless you've used setEventDispatcher())
$capsule->bootEloquent();

include_once "config/routes.php";
