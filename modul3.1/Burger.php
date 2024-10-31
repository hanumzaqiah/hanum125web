<?php
namespace McDonalds;

require_once 'MenuNamespace.php';

class Burger extends MenuItem {
    use Describable;

    private $pattyType;

    public function __construct($name, $price, $pattyType) {
        parent::__construct($name, $price);
        $this->pattyType = $pattyType;
    }

    public function getCalories() {
        return 500;
    }

    public function getPattyType() {
        return $this->pattyType;
    }
}
?>
