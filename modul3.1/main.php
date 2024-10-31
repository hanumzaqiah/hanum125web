<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once 'MenuNamespace.php';
require_once 'Burger.php';
require_once 'Drink.php';

use McDonalds\Burger;
use McDonalds\Drink;

$burger = new Burger("Big Mac", 5.99, "Beef");
$drink = new Drink("Coca Cola", 1.99, "Large");

echo $burger . "\n";
echo "Calories: " . $burger->getCalories() . "\n";
echo "Patty Type: " . $burger->getPattyType() . "\n";
echo "Description: " . $burger->describe() . "\n";

echo "\n";

echo $drink . "\n";
echo "Calories: " . $drink->getCalories() . "\n";
echo "Size: " . $drink->getSize() . "\n";
echo "Description: " . $drink->describe() . "\n";
?>
