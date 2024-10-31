<?php
namespace McDonalds;

trait Describable {
    public function describe() {
        return "Delicious McDonald's menu item.";
    }
}

abstract class MenuItem {
    protected $name;
    protected $price;

    public function __construct($name, $price) {
        $this->name = $name;
        $this->price = $price;
    }

    abstract public function getCalories();

    public function __toString() {
        return "{$this->name} - $ {$this->price}";
    }
}
?>
