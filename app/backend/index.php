<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header("HTTP/1.1 200 OK");
   die();
}
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
//error_reporting(E_ALL);



include(__DIR__ . "/config/Register.php");

include(__DIR__ . '/vendor/autoload.php');




include(PROJECT_ROOT_PATH . "/controllers/index.php");

//echo "checka";die;

$controller = null;
$action = null;


/* STEP 1: ROUTE PATH VALIDATION */

$uri_pattern = explode('/', ROUTE_PATTERN); 

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

// pattern verification


if (count($uri) < count($uri_pattern)) {
  //  echo "uri_count-".count($uri)."\n";
    //echo "uri_pattern-".count($uri_pattern)."\n";
    header("HTTP/1.1 404 Not Found");
    exit();
} else {
    for ($x = 0; $x < count($uri); $x++) {
     //   echo "val-".$uri_pattern[$x]."\n";
       // echo "val2-".$uri[$x]."\n";
        if ($x < count($uri_pattern)) {
            if ($uri_pattern[$x] == "{controller}") { 
                $controller = $uri[$x];
            } else if ($uri_pattern[$x] == "{action}") { 
                $action = $uri[$x];
            } else if ($uri_pattern[$x] != $uri[$x]) {  
                //echo "hejjjyy";
                header("HTTP/1.1 404 Not Found");
                exit();
            } 
        }
    }
}



//echo "step2\n";
/* STEP 2: GET CONTROLLER INSTANCE */

$controllerInstance = GetControllerInstance($controller);  
//echo "controllerInstance-".$controllerInstance."\n";

if ($controllerInstance == null) {
  //  echo "instance\n";
    header("HTTP/1.1 404 Not Found");
    exit();
}

function getAuthorizationHeader(){
    $headers = null;
    if (isset($_SERVER['Authorization'])) {
        $headers = trim($_SERVER["Authorization"]);
    }
    else if (isset($_SERVER['HTTP_AUTHORIZATION'])) { //Nginx or fast CGI
        $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
    } elseif (function_exists('apache_request_headers')) {
        $requestHeaders = apache_request_headers();
        // Server-side fix for bug in old Android versions (a nice side-effect of this fix means we don't care about capitalization for Authorization)
        $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
        //print_r($requestHeaders);
        if (isset($requestHeaders['Authorization'])) {
            $headers = trim($requestHeaders['Authorization']);
        }
    }
    return $headers;
}

/**
 * get access token from header
 * */
function getBearerToken() {
    $headers = getAuthorizationHeader();
    // HEADER: Get the access token from the header
    if (!empty($headers)) {
        if (preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
            return $matches[1];
        }
    }
    return null;
}

//echo "step3\n";
/* STEP 3: PROCESS THE REQUEST */

//$method = $_SERVER["REQUEST_METHOD"];
if($action!="forgotPassword" && $action!="resetPassword"){
   // echo "check";die;
$token = getBearerToken();
}
//echo $token;die;
switch ($method) {
    case "POST":
   //     $_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
//print_r($_POST);die;
       $data = json_decode(file_get_contents('php://input'), true);
      // $data  = filter_input_array($data, FILTER_SANITIZE_STRING);

      // print_r($data);die;
       if($action!="forgotPassword" && $action!="resetPassword"){
      $data["jwt"] = $token;
       }
      
       $return_val = $controllerInstance->{$action . 'PostAction'}($data);
     echo $return_val;
        break;
    case "PUT":
        parse_str(file_get_contents("php://input"), $post_vars);
        $controllerInstance->{$action . 'PutAction'}($post_vars);
        break;
    case "DELETE":
        parse_str(file_get_contents("php://input"), $post_vars);
        $controllerInstance->{$action . 'DeleteAction'}($post_vars);
        break;
    default:
        $controllerInstance->{$action . 'Action'}($_GET);
        break;
}

?>