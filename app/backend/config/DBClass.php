<?php

//define("PROJECT_ROOT_PATH", __DIR__ . "/../");

// import config file
require_once PROJECT_ROOT_PATH . "/config/Config.php";

//require_once('vendor/autoload.php');
use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

//echo "DBClass\n";
class DBClass {

  //  public $host = "162.241.24.233";
  //  public $username = "eveninj8_vijay";
   // public $password = "VijaySql@171991";
  //  public $database = "eveninj8_evening_glory_partners";


   public $host = "localhost";
    public $username = "root";
    public $password = "";
    public $database = "evening_glory_partners";

    public $connection;

    public $Secret_Key="*$%43MVKJTKMN$#"; 

    public function __construct(){
    //    echo "DBClass_constructor\n";

    }

    public function connect(){
   
    $this->connection = null;
   
    try{
    $this->connection = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database, $this->username, $this->password);
    $this->connection->exec("set names utf8");
    }catch(PDOException $exception){
    echo "Error: " . $exception->getMessage();
    }
   
    return $this->connection;
    }

    public function generateToken($UiD)
 {
 $payload = array(
 'iss' => $_SERVER['HOST_NAME'],
 'exp' => time()+60 * 60 * 24 * 60, 'uId' => $UiD
 );
 try{
 $jwt = JWT::encode($payload, $this->Secret_Key,'HS256'); 
 $res=array("status"=>true,"Token"=>$jwt);
 }catch (UnexpectedValueException $e) {
 $res=array("status"=>false,"Error"=>$e->getMessage());
 }
 return $res;
 }

    
}

?>