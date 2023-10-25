<?php

define("PROJECT_ROOT_PATH", __DIR__ . "/../");

require PROJECT_ROOT_PATH . "/config/DBClass.php";

require PROJECT_ROOT_PATH . "/models/User.php";

require_once('vendor/autoload.php');

//echo "testing";die;
require PROJECT_ROOT_PATH . "/controllers/UserController.php";
//echo "testing2";die;

require PROJECT_ROOT_PATH . "/controllers/AdminController.php";

function GetControllerInstance($controller)
{
 //  echo "controller-".$controller."\n";
    try {
        switch ($controller) {
            case "user":
                return new UserController();
            case "admin":
                    return new AdminController();                     
            default:
                header("HTTP/1.1 404 Not Found");
                exit();
                break;
        }
    } catch (Error $e) {
        sendError(array('error' => $e->getMessage()));
    }
    return null;
}
?>