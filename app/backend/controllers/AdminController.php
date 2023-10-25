<?php


use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;
use \Rakit\Validation\Validator;
use PHPMailer\PHPMailer\PHPMailer;


//echo "AdminController\n";



class AdminController
{

    var $DBclass;

    var $conn;

    var $validator;

    public function __construct(){
    //    echo "AdminController_constructor\n";
        $this->DBclass = new DBClass();
        $this->validator = new Validator();
    }


    public function loginPostAction($data){
      //  echo "dfd";die;
        if($this->conn==null)
 {
    //echo "DBclass".$this->DBclass."\n";
    $this->conn = $this->DBclass->connect();
 }
 $return = array();
 $msgs=array();




 if(isset($data['email']) && isset($data['password']))
 {

        

    $email=filter_var($data['email'],FILTER_SANITIZE_EMAIL);
    $password=filter_var($data['password'],FILTER_SANITIZE_STRING);

 

 $query = "SELECT user_id,username,email,created_at,updated_at from users where email= ? and password= ? and isAdmin=?";
 $stmt = $this->conn->prepare($query);
 $stmt->execute(array($email,md5($password),1));
 //echo "select_query-".$stmt->debugDumpParams()."\n";die;

 $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);



 if(count($ret)>0)
 {


        



 $jwt=$this->DBclass->generateToken($ret[0]['user_id']);

 if($jwt['status']==true)
 {
   // session_start();
   // $_SESSION['user_id'] = $ret[0]['user_id'];
   // $_SESSION['token'] = $jwt['Token'];

 $return["status"]=200;
 $return["user_id"] = $ret[0]['user_id'];
 $return["token"]= $jwt['Token'];
 array_push($msgs,array("text"=>"User has not been verified by admin","type"=>"danger"));

 //$return["message"]='User Logged in Successfully.';

 }
 else{
 unset($return['_data_']);
 $return["status"]=500;
 array_push($msgs,array("text"=>"Error:".$jwt['Error'],"type"=>"danger"));

 //$return["message"]='Error:'.$jwt['Error'];
 
 }
    }
    else{
       
     
        $return["status"]=500;
        array_push($msgs,array("text"=>"Error:Invalid Email or Password!","type"=>"danger"));

      //  $return["message"]='Error:Invalid Email or Password!';
    }

}

else{
    $return["status"]=500;
    array_push($msgs,array("text"=>"Error:Email or Password not provided!","type"=>"danger"));

   
   // $return["message"]='Error:Email or Password not provided!';
}
$return["msgs"] = $msgs;
return json_encode($return);
}


public function Authenticate($JWT,$Curret_User_id)
    {
    try {
    $decoded = JWT::decode($JWT,new Key($this->DBclass->Secret_Key, 'HS256'));
    $payload = json_decode(json_encode($decoded),true);
 //   print_r($payload);
    if($payload['uId'] == $Curret_User_id) {
    $res=array("status"=>true);
    }else{
    $res=array("status"=>false,"Error"=>"Invalid Token or Token Exipred, So Please login Again!");
    }
    }catch (UnexpectedValueException $e) {
    $res=array("status"=>false,"Error"=>$e->getMessage());
    } 
    return $res;
    
    }

    public function logoutPostAction(){

    }

    public function declinePostAction($data){
  //      print_r($data);die;
        $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
        $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
        $delete_id=filter_var($data['delete_id'],FILTER_SANITIZE_NUMBER_INT);
    
        $message=filter_var($data['message'],FILTER_SANITIZE_STRING);

        $authentification_status = $this->Authenticate($jwt,$user_id);
        $return = array();
        $msgs=array();
    //    print_r($authentification_status);

 

        if($authentification_status["status"]){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }
 $query = "SELECT user_id,username,email,created_at,updated_at from users where user_id= ?";
 $stmt = $this->conn->prepare($query);

 $stmt->execute(array($delete_id));
 $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);
 //print_r($ret);die;



 $mail = new PHPMailer(true); //From email address and name 
 $mail->From = "vijayljaiswal8@gmail.com"; 
 $mail->FromName = "Vijay Laxmi Jaiswal"; //To address and name 
 $mail->addAddress($ret[0]['email'], "Evening glory Partners User");//Recipient name is optional
 $mail->addAddress("adharjswl@yahoo.com"); //Address to which recipient will reply 
 $mail->addReplyTo("vijayljaiswal8@gmail.com", "Reply"); //CC and BCC 
 //$mail->addCC("malename909@gmail.com"); 
 //$mail->addBCC("adharjswl@yahoo.com"); //Send HTML or Plain Text email 
 $mail->IsSMTP(); 
 $mail->SMTPDebug = 0; //from 1 to 4 to get more details.
 $mail->SMTPAuth = true; 
 $mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for GMail
 $mail->Port = 587; // or 587
 $mail->Host = "smtp.gmail.com";
 $mail->Username = "vijayljaiswal8@gmail.com";
 $mail->Password = "upozijbycvrpbozp";
 $mail->isHTML(true); 
 $mail->Subject = "Your access in evening glory partners has been denied by admin"; 
 $mail->Body = $message;
 $mail->AltBody = "This is the plain text version of the email content"; 
 
 if(!$mail->send()) 
 {
    
     $return['status'] = 500;
     array_push($msgs,array("text"=>"Error in sending mail","type"=>"danger"));
   
  //   $return['message'] = "Error in sending mail";
 } 
 else { 

     $return['status'] = 200;
     array_push($msgs,array("text"=>"User successfully declined","type"=>"success"));

  //   $return['message'] = "User successfully declined";

 }

}
else{
    $return['status'] = 500;
    array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));

  //  $return['message'] = "User not authentificated";


}
$return["msgs"] = $msgs;
return json_encode($return);

    }

    public function getAllUsersPostAction($data){

        $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
        $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);

        $authentification_status = $this->Authenticate($jwt,$user_id);
        $return = array();
        $msgs=array();
        if($authentification_status["status"]){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }
 $query = "SELECT user_id,username,email,age,profession,created_at,updated_at,verified from users where isAdmin= ?";
 $stmt = $this->conn->prepare($query);

 $stmt->execute(array(false));
 $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);
 $return['status'] = 200;
 $return['users'] = $ret;
// $return['message'] = "Users retrieved successfully";
array_push($msgs,array("text"=>"Users retrieved successfully","type"=>"success"));

}
else{
    $return['status'] = 500;
  //  $return['message'] = "User not authentificated";
    array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));
}
$return["msgs"] = $msgs;
return json_encode($return);

    }


    public function deletePostAction($data){

        $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
        $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
        $delete_id=filter_var($data['delete_id'],FILTER_SANITIZE_NUMBER_INT);
        $authentification_status = $this->Authenticate($jwt,$user_id);
      //  print_r($authentification_status);
      $return = array();
      $msgs=array();
        if($authentification_status["status"]){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }

            

 $query = "DELETE from users where user_id= ?";
 $stmt = $this->conn->prepare($query);

 $stmt->execute(array($delete_id));
 $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);


 $return['status'] = 200;
 //$return['message'] = "User successfully deleted";
 array_push($msgs,array("text"=>"User successfully deleted","type"=>"success"));



}
else{
    $return['status'] = 500;
    array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));

  //  $return['message'] = "User not authentificated";
  
}
$return["msgs"] = $msgs;
return json_encode($return);

 
    }


    public function deleteAllPostAction($data){

        $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
        $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
        $authentification_status = $this->Authenticate($jwt,$user_id);
        $return = array();
        $msgs=array();
        if($authentification_status["status"] ){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }


 $query = "DELETE from users";
 $stmt = $this->conn->prepare($query);

 $stmt->execute();
 $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);



 $return['status'] = 200;
 array_push($msgs,array("text"=>"Users successfully deleted","type"=>"success"));

 //$return['message'] = "Users successfully deleted";


}
else{
    $return['status'] = 500;
    array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));

 //   $return['message'] = "User not authentificated";
  
}
$return["msgs"] = $msgs;

return json_encode($return);
 
    }

    public function verifyUserPostAction($data){

        $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
        $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
        $verify_id=filter_var($data['verify_id'],FILTER_SANITIZE_NUMBER_INT);

        $authentification_status = $this->Authenticate($jwt,$user_id);
     //  print_r($authentification_status);
     $return = array();
     $msgs=array();
        if($authentification_status["status"]){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }

           

           // $query = "SELECT from users WHERE user_id=?";
            $query = "SELECT user_id,username,email,created_at,updated_at from users where user_id= ?";

            $stmt= $this->conn->prepare($query);
            $stmt->execute(array($verify_id));

            $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);
          //  print_r($ret);


            $sql = "UPDATE users SET verified= ? where user_id= ?";

            $stmt= $this->conn->prepare($sql);
            $stmt->execute(array(1,$verify_id));

            

       //     echo "update_query-".$stmt->debugDumpParams()."\n";






 $mail = new PHPMailer(true); //From email address and name 
 $mail->From = "vijayljaiswal8@gmail.com"; 
 $mail->FromName = "Vijay Laxmi Jaiswal"; //To address and name 
 $mail->addAddress($ret[0]['email'], "Evening glory Partners User");//Recipient name is optional
 $mail->addAddress("adharjswl@yahoo.com"); //Address to which recipient will reply 
 $mail->addReplyTo("vijayljaiswal8@gmail.com", "Reply"); //CC and BCC 
 //$mail->addCC("malename909@gmail.com"); 
 //$mail->addBCC("adharjswl@yahoo.com"); //Send HTML or Plain Text email 
 $mail->IsSMTP(); 
 $mail->SMTPDebug = 0; //from 1 to 4 to get more details.
 $mail->SMTPAuth = true; 
 $mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for GMail
 $mail->Port = 587; // or 587
 $mail->Host = "smtp.gmail.com";
 $mail->Username = "vijayljaiswal8@gmail.com";
 $mail->Password = "upozijbycvrpbozp";
 $mail->isHTML(true); 
 $mail->Subject = "your account has been verified by admin on evening glory partners"; 
 $mail->Body = "Your account has been verified by admin on evening glory partners\n"." To Login click on this link\n"."<a href='https://eveningglorypartners.com'>Login</a>" ;
 $mail->AltBody = "This is the plain text version of the email content"; 
 
 if(!$mail->send()) 
 {
     $return['status'] = 500;
     array_push($msgs,array("text"=>"Error in sending mail","type"=>"danger"));

 //    $return['message'] =  "Error in sending mail";
 } 
 else { 
    $return['status'] = 200;
    array_push($msgs,array("text"=>"User successfully verified","type"=>"success"));

   //s $return['message'] =  "User successfully verified";

 }




}
else{
    $return['status'] = 500;
    array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));

   // $return['message'] =  "User not authentificated";

    
  
}
$return["msgs"] = $msgs;
return json_encode($return);

    }




}

?>