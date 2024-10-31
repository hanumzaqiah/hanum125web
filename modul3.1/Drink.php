<?php
namespace McDonalds;

require_once 'MenuNamespace.php';

class Drink extends MenuItem {
    use Describable;

    private $size;

    public function __construct($name, $price, $size) {
        parent::__construct($name, $price);
        $this->size = $size;
    }

    public function getCalories() {
        return 200;
    }

    public function getSize() {
        return $this->size;
    }
}
?>
