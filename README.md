# Mintos | RSS Reader

Install the dependencies
```bash
composer install
```

Create a table in your database and setup connection
```bash
Copy the .env.example file to .env and edit database
```
```bash
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

## Start the API
```bash
php -S localhost:3000 -t app
```

Open the app
```bash
php -S localhost:8080 -t public
```
