<?php

//echo "checktesta";die;
use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;
use \Rakit\Validation\Validator;
use \Ramsey\Uuid\Uuid;
use PHPMailer\PHPMailer\PHPMailer;


//echo "checktestb"

class UserController
{

    var $DBclass;

    var $conn;

    var $validator;

    public function __construct(){
     // echo "UserController_constructor\n";
        $this->DBclass = new DBClass();
        $this->validator = new Validator();
    }

    public function loginPostAction($data){
//print_r($data);
        if($this->conn==null)
 {
    //echo "DBclass".$this->DBclass."\n";
    $this->conn = $this->DBclass->connect();
 }
 $return=array();
 $msgs=array();

 if(isset($data['username']) && isset($data['password']))
 {
        
 $username=filter_var($data['username'],FILTER_SANITIZE_STRING);
 $password=filter_var($data['password'],FILTER_SANITIZE_STRING);

 

 $query = "SELECT user_id,username,email,created_at,updated_at,verified from users where (username= ? and password= ?) or (email= ? and password= ?)";
 $stmt = $this->conn->prepare($query);
 $stmt->execute(array($username,md5($password),$username,md5($password)));
 //echo "select_query-".$stmt->debugDumpParams()."\n";

 $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);
//print_r($ret);


 if(count($ret)>0)
 {


       if($ret[0]['verified']==0)
       {
        $return['status']=500;
       // $return['message']='User has not been verified by admin';
        array_push($msgs,array("text"=>"User has not been verified by admin","type"=>"danger"));
       }
       else{

 $jwt=$this->DBclass->generateToken($ret[0]['user_id']);
 if($jwt['status']==true)
 {
    session_start();
    $_SESSION['user_id'] = $ret[0]['user_id'];
   
    $return['status']=200;
 $return['JWT']=$jwt['Token'];
 $return['user_id']=$ret[0]['user_id'];
 array_push($msgs,array("text"=>"User  logged in successfully","type"=>"success"));
 //$return['message']="User  logged in successfully";
 }
 else{
 unset($return['_data_']);
 $return['status']=500;
 array_push($msgs,array("text"=>'Error:'.$jwt['Error'],"type"=>"success"));

 //$return['message']='Error:'.$jwt['Error'];
 }
    }
    

}
else{
    $return['status']=500;
 //   $return['message']='Email or Password not provided!';
    array_push($msgs,array("text"=>"Incorrect Username/Email or Password","type"=>"danger"));

}

 }
else{
    $return['status']=500;
   // $return['message']='Error:Email or Password not provided!';
    array_push($msgs,array("text"=>'Error:Username/Email or Password not provided!',"type"=>"danger"));

}
$return["msgs"] = $msgs;
return json_encode($return);
//return $return;
}



    public function Authenticate($JWT,$Curret_User_id)
    {
      //  echo "heyyy";die;
    try {
       // echo $JWT;
       //die($JWT);
    $decoded = JWT::decode($JWT,new Key($this->DBclass->Secret_Key, 'HS256'));

    $payload = json_decode(json_encode($decoded),true);
    //echo $Curret_User_id;die;
//print_r($payload);die;


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

    public function logouPostActiont(){

    }

    public function RegisterPostAction($data){
   
        if($this->conn==null)
        {
           //echo "DBclass".$this->DBclass."\n";
           $this->conn = $this->DBclass->connect();
        }
        $return = array();
        $msgs=array();

        $validation = $this->validator->make($data, [
            'username'                  => 'required',
            'email'                 => 'required|email',
            'password'              => 'required|min:6',
            'confirm_password'      => 'required|same:password',
            'age'                   => 'required|numeric',
            'profession'            => 'required',
        ]);

        $validation->validate();

       

        if ($validation->fails()) {
            // handling errors
            $errors = $validation->errors();
          //  print_r($errors);
        
            $return["status"] = 500;
          //  $return["message"] =  "Error in registering User";

            foreach ($errors->firstOfAll() as $key => $value){
              //  foreach ($value1 as $key2 => $value2){
            array_push($msgs,array("text"=>$value,"type"=>"danger"));
          //  }
        }
            
         //   $return["errors"] =  $errors;
           

           
        } 
else{

    $username=filter_var($data['username'],FILTER_SANITIZE_STRING);
    $email=filter_var($data['email'],FILTER_SANITIZE_EMAIL);
    $password=filter_var($data['password'],FILTER_SANITIZE_STRING);
    $confirm_password=filter_var($data['confirm_password'],FILTER_SANITIZE_STRING);
    $age=filter_var($data['age'],FILTER_SANITIZE_NUMBER_INT);
    $profession=filter_var($data['profession'],FILTER_SANITIZE_STRING);

    $query = "SELECT * from users where username= ? or email= ?";
    $stmt = $this->conn->prepare($query);
   
    $stmt->execute(array($data['username'],$data['email']));
    $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);
    if($ret){
        $return["users"]=$ret;
        $return["status"] = 500;
        array_push($msgs,array("text"=>"Username or email already taken","type"=>"danger"));
    }
    else{

       if(isset($data['interests'])){

        if (!empty( $data['interests'])  && is_array( $$data['interests'])  ) {
            foreach( $data['interests'] as $key => $value ) {
                $data['interests'][$key] = filter_var( $value, FILTER_SANITIZE_STRING );
            }
          }
        $interests = json_encode($data['interests']);
       }
       {
        $interests = null;
       }
       
        $sql = "INSERT INTO users (username, email, password, age, profession, verified, isAdmin, interests) VALUES (?,?,?,?,?,?,?,?)";

        $stmt = $this->conn->prepare($sql);
        $stmt->execute(array($username,$email,md5($password),$age,$profession,0,0,$interests));
        $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);

        $mail = new PHPMailer(true); //From email address and name 
        $mail->From = "vijayljaiswal8@gmail.com"; 
        $mail->FromName = "Vijay Jaiswal"; //To address and name 
        $mail->addAddress("vijayljaiswal8@gmail.com", "Evening glory Partners Admin");//Recipient name is optional
        $mail->addAddress("adharjswl@yahoo.com"); //Address to which recipient will reply 
        $mail->addReplyTo($data['email'], "Reply"); //CC and BCC 
        //$mail->addCC("malename909@gmail.com"); 
        //$mail->addBCC("adharjswl@yahoo.com"); //Send HTML or Plain Text email 
        $mail->IsSMTP(); 
        $mail->SMTPDebug = 0; //from 1 to 4 to get more details.
        $mail->SMTPAuth = true; 
        $mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for GMail
        $mail->Port = 587; // or 587
        $mail->Host = "smtp.gmail.com";
        $mail->Username = "adh171991@gmail.com";
        $mail->Password = "wcgspndgvcxjhnht";
        $mail->isHTML(true); 
        $mail->Subject = "New User on evening glory partners"; 
        $mail->Body = "
        New User Details:"."\n"."
        Username: ".$data['username']."\n".
        "Email: ".$data['email']."\n".
        "To verify new user, click this link:"."\n".
        "<a href='https://eveningglorypartners.com/admin/login'>Admin Login</a>";
        $mail->AltBody = "This is the plain text version of the email content"; 
        
        if(!$mail->send()) 
        {
            $return["status"] = 500;
            array_push($msgs,array("text"=>"Error in sending mail","type"=>"danger"));
           // $return["message"] =  "Error in sending mail";
        } 
        else { 
            $return["status"] = 200;
            array_push($msgs,array("text"=>"User successfully registered","type"=>"success"));
        //    $return["message"] =  "User successfully registered";

        }
        
    }
    }
      
    $return["msgs"] = $msgs;


        return json_encode($return);
    }

    public function getCurrentUserPostAction($data){
     //   print_r($data);die;
     $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
    $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
        $authentification_status = $this->Authenticate( $jwt,$user_id);
        $return = array();
        $msgs=array();
        if($authentification_status["status"]){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }
 $query = "SELECT user_id,username,email,created_at,updated_at,verified,requests,friends,declines from users where user_id= ?";
 $stmt = $this->conn->prepare($query);

 $stmt->execute(array($user_id));
 $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);
 $return['status'] = 200;
 $return['user'] = $ret;
 array_push($msgs,array("text"=>"User retrieved successfully","type"=>"success"));

 //$return['message'] = "User retrieved successfully";
}
else{
    $return['status'] = 500;
    array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));

   // $return['message'] = "User not authentificated";
}
$return["msgs"] = $msgs;
return json_encode($return);



    }
    public function getAllUsersPostAction($data){
        $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
        $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
        
        $authentification_status = $this->Authenticate( $jwt,$user_id);
        $return = array();
        $msgs=array();
        if($authentification_status["status"]){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }
 $query = "SELECT user_id,username,email,age,profession,created_at,updated_at,verified,requests from users where isAdmin= ?";
 $stmt = $this->conn->prepare($query);

 $stmt->execute(array(false));
 $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);
 $return['status'] = 200;
 $return['users'] = $ret;
 array_push($msgs,array("text"=>"Users retrieved successfully","type"=>"success"));

 //$return['message'] = "Users retrieved successfully";
}
else{
    $return['status'] = 500;
    //$return['message'] = "User not authentificated";
    array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));
}
$return["msgs"] = $msgs;
return json_encode($return);

    }


    public function getUsersPostAction($data){
      //  echo "jjj";die;
      $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
      $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
      
      $authentification_status = $this->Authenticate( $jwt,$user_id);
       // print_r($authentification_status);die;
        $return = array();
        $msgs=array();
        if($authentification_status["status"]){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }

          //  $user_id = $data['user_id'];
          
            
        $query = "SELECT user_id,username,age,profession,requests,declines,friends,email,created_at,updated_at from users where isAdmin =? and user_id != ? and verified != ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindValue(1, false, PDO::PARAM_INT);
       $stmt->bindValue(2, $user_id, PDO::PARAM_INT);
       $stmt->bindValue(3, 0, PDO::PARAM_INT);

        $stmt->execute();
      //  echo "select_query-".$stmt->debugDumpParams()."\n";

        $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $return['status'] = 200;
        $return['users'] = $ret;
        array_push($msgs,array("text"=>"Users retrieved successfully","type"=>"success"));
      //  $return['message'] = "Users retrieved successfully"; 

    
        }
        else{
            $return['status'] = 500;
            array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));

          //  $return['message'] = "User not authentificated";
           
          
        }
        $return["msgs"] = $msgs;
        return json_encode($return);
    }

    public function getRequestsPostAction($data){

        $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
        $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
        
        $authentification_status = $this->Authenticate( $jwt,$user_id);
        $return = array();
        $msgs=array();
        if($authentification_status["status"]){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }
            
        $query = "SELECT requests from users where user_id= ?";
 $stmt = $this->conn->prepare($query);
 $stmt->execute(array($user_id));
 $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);
$return['status'] = 200;
$return['requests'] = $ret[0]['requests'];
array_push($msgs,array("text"=>"Requests retrieved successfully","type"=>"success"));

//$return['message'] = "Requests retrieved successfully";

}
else{
    
    $return['status'] = 500;
    array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));

//$return['message'] = "User not authentificated";
  
}
$return["msgs"] = $msgs;
return json_encode($return);
    }

    public function getFriendsPostAction($data){
        $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
        $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
        
        $authentification_status = $this->Authenticate( $jwt,$user_id);
        $return = array();
        $msgs=array();
        if($authentification_status["status"]){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }
        $query = "SELECT friends from users where user_id= ?";
 $stmt = $this->conn->prepare($query);
 $stmt->execute(array($user_id));
 $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);

 $return['status'] = 200;
$return['friends'] = $ret[0]['friends'];
array_push($msgs,array("text"=>"Friends retrieved successfully","type"=>"success"));
//$return['message'] = "Friends retrieved successfully";
        }
        else{
            $return['status'] = 500;
            array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));

         //   $return['message'] = "User not authentificated";
        }
        $return["msgs"] = $msgs;
        return json_encode($return);

    }

    public function getDeclinesPostAction($data){
        $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
        $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
        
        $authentification_status = $this->Authenticate( $jwt,$user_id);
        $return = array();
        $msgs=array();
        if($authentification_status["status"]){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }
        $query = "SELECT declines from users where user_id= ?";
    $stmt = $this->conn->prepare($query);
    $stmt->execute(array($user_id));
    $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);
    
   
 $return['status'] = 200;
 $return['declines'] = $ret[0]['declines'];
 //$return['message'] = "Declines retrieved successfully";
 array_push($msgs,array("text"=>"Friends retrieved successfully","type"=>"success"));
        }
        else{
            $return['status'] = 500;
            array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));

          //  $return['message'] = "User not authentificated";
        }
        $return["msgs"] = $msgs;
        return json_encode($return);
    
    }

    public function addRequestPostAction($data){
        
        $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
        $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
        $request_id=filter_var($data['request_id'],FILTER_SANITIZE_NUMBER_INT);

        $authentification_status = $this->Authenticate( $jwt,$user_id);
        $return = array();
        $msgs=array();
        if($authentification_status["status"]){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }

          
        $query = "SELECT requests from users where user_id= ?";
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($user_id));
      
        $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);


        $requests=array();
 if(count($ret)>0)
 {
    $requests_array  = array();
    if($ret[0]['requests']){
$requests_array = json_decode($ret[0]['requests']);

   
    }
    array_push($requests_array,$user_id);
    


$sql = "UPDATE users SET requests=? WHERE user_id=?";
$stmt= $this->conn->prepare($sql);
$stmt->execute(array(json_encode($requests_array), $request_id));
//echo "query-".$stmt->debugDumpParams()."\n";

$return["status"] = 200;
array_push($msgs,array("text"=>"Request successfully added","type"=>"success"));
 //$return["message"] = "Request successfully added";

 }
 else{
    $return["status"] = 500;
    array_push($msgs,array("text"=>"Error retrieving requests","type"=>"danger"));

   // $return["message"] = "Error retrieving requests";
 }
 

}
else{
    $return["status"] = 500;
    array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));

  //  $return["message"] = "User not authentificated";
    
}
$return["msgs"] = $msgs;
return json_encode($return);

    }


    public function removeRequestPostAction($data){

        $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
        $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
        $request_id=filter_var($data['request_id'],FILTER_SANITIZE_NUMBER_INT);
        
        $authentification_status = $this->Authenticate($jwt,$user_id);
        $return = array();
        $msgs=array();
        if($authentification_status["status"]){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }
        $query = "SELECT requests from users where user_id= ?";
        $stmt = $this->conn->prepare($query);
        $stmt->execute(array($request_id));
        $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);


       
 if(count($ret)>0)
 {
    $requests=array();
    if($ret[0]['requests']){
$requests_array = json_decode($ret[0]['requests']);


if (($key = array_search($user_id, $requests_array)) !== false) {
    unset($requests_array[$key]);
}
$requests_array=array_values($requests_array);
    }


$sql = "UPDATE users SET requests=? WHERE user_id=?";
$stmt= $this->conn->prepare($sql);
$stmt->execute(array(json_encode($requests_array), $request_id));

$return["status"] = 200;
array_push($msgs,array("text"=>"Request successfully removed","type"=>"success"));

//$return["message"] = "Request successfully removed";

 }
 else{
    $return["status"] = 500;
    array_push($msgs,array("text"=>"Error in retrieving requests","type"=>"danger"));

 //   $return["message"] = "Error in retrieving requests";
 }

}
else{
    $return["status"] = 500;
    array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));
   // $return["message"] = "User not authentificated";
}
$return["msgs"] = $msgs;
return json_encode($return);

    }
  

    public  function getMessagesPostAction($data){
        
            
        $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
        $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
        $receiver_id=filter_var($data['receiver_id'],FILTER_SANITIZE_NUMBER_INT);

        $authentification_status = $this->Authenticate($jwt,$user_id);
        $return = array();
        $msgs=array();
        if($authentification_status["status"]){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }
            $query = "SELECT * from messages where (sender_id= ? and receiver_id=?) or (sender_id= ? and receiver_id=?) ";
            $stmt = $this->conn->prepare($query);
            $stmt->execute(array($user_id,$receiver_id,$receiver_id,$user_id));
            $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);
         

            $return['status'] = 200;
            $return['messages'] = $ret;
            array_push($msgs,array("text"=>"Messages retrieved successfully","type"=>"success"));

     //       $return['message'] = "Messages retrieved successfully";

        }

        else{
            $return["status"] = 500;
            array_push($msgs,array("text"=>"User not authentificated","type"=>"error"));

          //  $return["message"] = "User not authentificated";
        }
        $return["msgs"] = $msgs;
        return json_encode($return);
    }

    public function sendMessagePostAction($data){
        $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
        $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
        $receiver_id=filter_var($data['receiver_id'],FILTER_SANITIZE_NUMBER_INT);
        $message_txt=filter_var($data['message_txt'],FILTER_SANITIZE_STRING);

        $authentification_status = $this->Authenticate($jwt,$user_id);
        
        $return = array();
        $msgs=array();
        if($authentification_status["status"]){
            if($this->conn==null)
            {
               //echo "DBclass".$this->DBclass."\n";
               $this->conn = $this->DBclass->connect();
            }
            $sql = "INSERT INTO messages (sender_id, receiver_id, message_text) VALUES (?,?,?)";

            $stmt = $this->conn->prepare($sql);
            $stmt->execute(array($user_id,$receiver_id,$message_txt));
            $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);
            $return['status'] = 200;
            array_push($msgs,array("text"=>"Message added successfully","type"=>"success"));

       //     $return['message'] = "Message added successfully";

        }

        else{
            $return["status"] = 500;
            array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));

          //  $return["message"] = "User not authentificated";
        }
        $return["msgs"] = $msgs;

        return json_encode($return);


}

public function addFriendPostAction($data){

    $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
    $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
    $friend_id=filter_var($data['friend_id'],FILTER_SANITIZE_NUMBER_INT);
    $mode=filter_var($data['mode'],FILTER_SANITIZE_STRING);

        if($mode=="from"){
            $authentification_status = $this->Authenticate($jwt,$friend_id);

        }
        else{
    $authentification_status = $this->Authenticate($jwt,$user_id);
        }
    $return = array();
    $msgs=array();
    if($authentification_status["status"]){
        if($this->conn==null)
        {
           //echo "DBclass".$this->DBclass."\n";
           $this->conn = $this->DBclass->connect();
        }
    $query = "SELECT requests,declines,friends from users where user_id= ?";
    $stmt = $this->conn->prepare($query);
    $stmt->execute(array($user_id));
    $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);


    
if(count($ret)>0)
{

    $requests_array = array();
    if($ret[0]['requests']){
$requests_array = json_decode($ret[0]['requests']);
//echo "requests_string-".$requests_string."\n";

//echo "requests_array-"."\n";
//print_r($requests_array);
if (($key = array_search($friend_id, $requests_array)) !== false) {
  //  echo "friend_id-".$data['friend_id']."\n";
   unset($requests_array[$key]);
}
//echo $data['friend_id'];
$requests_array=array_values($requests_array);
//print_r($requests_array);
}
    
//echo "requests_string_after-".$requests_string."\n";

$declines_array=array();
if($ret[0]['declines']){
$declines_array= json_decode($ret[0]['declines']);




if (($key = array_search($friend_id, $declines_array)) !== false) {
    
    unset($declines_array[$key]);
}
$declines_array = array_values($declines_array);
}


$friends_array=array();
if($ret[0]['friends']){
$friends_array = json_decode($ret[0]['friends']);



}
array_push($friends_array,$friend_id);

//echo "requests_string_after_2-".$requests_string."\n";

$sql = "UPDATE users SET requests=?, declines=?, friends=? WHERE user_id=?";
$stmt= $this->conn->prepare($sql);
$stmt->execute(array(json_encode($requests_array),json_encode($declines_array),json_encode($friends_array),$user_id));

$return["status"] = 200;
//$return["message"] = "Friend successfully added";
array_push($msgs,array("text"=>"Friend successfully added","type"=>"success"));


 }
 else{
    $return["status"] = 500;
   // $return["message"] = "Error in retrieving requests,declines and friends";
    array_push($msgs,array("text"=>"Error in retrieving requests,declines and friends","type"=>"danger"));

 }


}

else{
    $return["status"] = 500;
       //     $return["message"] = "User not authentificated";
 array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));

}
$return["msgs"] = $msgs;

return json_encode($return);


}

public function addDeclinePostAction($data){

    $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
    $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
    $decline_id=filter_var($data['friend_id'],FILTER_SANITIZE_NUMBER_INT);
    $mode=filter_var($data['mode'],FILTER_SANITIZE_STRING);

    if($mode=="from"){
        $authentification_status = $this->Authenticate($jwt,$decline_id);
    }
    else{
        
    $authentification_status = $this->Authenticate($jwt,$user_id);
    }
    $return = array();
    $msgs=array();
    if($authentification_status["status"]){
        if($this->conn==null)
        {
           //echo "DBclass".$this->DBclass."\n";
           $this->conn = $this->DBclass->connect();
        }
    $query = "SELECT requests,declines,friends from users where user_id= ?";
    $stmt = $this->conn->prepare($query);
    $stmt->execute(array($user_id));
    $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);


    $requests=array();
if(count($ret)>0)
{
    if($ret[0]['requests']){

$requests_array = json_decode($ret[0]['requests']);




if (($key = array_search($decline_id, $requests_array)) !== false) {
    unset($requests_array[$key]);
}
$requests_array=array_values($requests_array);

    }



$friends_array = array();
if($ret[0]['friends']){
    $friends_array  =  json_decode($ret[0]['friends']); 


if (($key = array_search($decline_id, $friends_array)) !== false) {
    unset($friends_array [$key]);
}
$friends_array=array_values($friends_array);

}

$declines_array = array();

if($ret[0]['declines']){
    $declines_array  = json_decode($ret[0]['declines']);


}
array_push($declines_array,$decline_id);

$sql = "UPDATE users SET requests=?, declines=?, friends=? WHERE user_id=?";
$stmt= $this->conn->prepare($sql);
$stmt->execute(array(json_encode($requests_array),json_encode($declines_array),json_encode($friends_array),$user_id));

$return["status"] = 200;
array_push($msgs,array("text"=>"Decline successfully added","type"=>"success"));

//$return["message"] = "Decline successfully added";

 }

 else{
    $return["status"] = 500;
    $return["message"] = "Error in retrieving requests,declines and friends";
 }
}

else{
    $return["status"] = 500;
    array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));
 //   $return["message"] = "User not authentificated";
}
$return["msgs"] = $msgs;
return json_encode($return);


}


public function removeFriendPostAction($data){

    $jwt=filter_var($data['jwt'],FILTER_SANITIZE_STRING);
    $user_id=filter_var($data['user_id'],FILTER_SANITIZE_NUMBER_INT);
    $decline_id=filter_var($data['decline_id'],FILTER_SANITIZE_NUMBER_INT);
    
    $authentification_status = $this->Authenticate($jwt,$user_id);
    
    $return = array();
    $msgs=array();
    if($authentification_status["status"]){
        if($this->conn==null)
        {
           //echo "DBclass".$this->DBclass."\n";
           $this->conn = $this->DBclass->connect();
        }
    $query = "SELECT friends from users where user_id= ?";
    $stmt = $this->conn->prepare($query);
    $stmt->execute(array($data['decline_id']));
    $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);


  
if(count($ret)>0)
{
    


    $friends_array = array();

if($ret[0]['friends']){
    $friends_array  =  json_decode($ret[0]['friends']); 


if (($key = array_search($data['user_id'], $friends_array)) !== false) {
    unset($friends_array [$key]);
}
$friends_array=array_values($friends_array);

}



$sql = "UPDATE users SET  friends=? WHERE user_id=?";
$stmt= $this->conn->prepare($sql);
$stmt->execute(array(json_encode($friends_array),$data['decline_id']));


$query = "SELECT declines from users where user_id= ?";
$stmt = $this->conn->prepare($query);
$stmt->execute(array($data['user_id']));
$ret= $stmt->fetchAll(PDO::FETCH_ASSOC);

if(count($ret)>0)
{
$declines_array = array();

if($ret[0]['declines']){
    $declines_array  = json_decode($ret[0]['declines']);


}
array_push($declines_array,$data['decline_id']);



$sql = "UPDATE users SET  declines=? WHERE user_id=?";
$stmt= $this->conn->prepare($sql);
$stmt->execute(array(json_encode($declines_array),$data['user_id']));

$return["status"] = 200;
array_push($msgs,array("text"=>"Decline successfully added","type"=>"success"));

//$return["message"] = "Decline successfully added";

}
else{
    $return["status"] = 500;
   // $return["message"] = "Error in retrieving requests,declines and friends from user_id";
    array_push($msgs,array("text"=>"Error in retrieving requests,declines and friends from user_id","type"=>"danger"));

 }

 }

 else{
    $return["status"] = 500;
    array_push($msgs,array("text"=>"Error in retrieving requests,declines and friends from decline_id","type"=>"danger"));

   // $return["message"] = "Error in retrieving requests,declines and friends from decline_id";
 }
}

else{
    $return["status"] = 500;
    array_push($msgs,array("text"=>"User not authentificated","type"=>"danger"));

  //  $return["message"] = "User not authentificated";
}
$return["msgs"] = $msgs;
return json_encode($return);


}


public function forgotPasswordPostAction($data){


    $email = filter_var($data['email'],FILTER_SANITIZE_EMAIL);

    if($this->conn==null)
    {
       //echo "DBclass".$this->DBclass."\n";
       $this->conn = $this->DBclass->connect();
    }
   

    $return = array();

    $msgs=array();

    $query = "SELECT *from users where email= ?";
    $stmt = $this->conn->prepare($query);
    $stmt->execute(array($email));
    //echo "select_query-".$stmt->debugDumpParams()."\n";
   
    $ret= $stmt->fetchAll(PDO::FETCH_ASSOC);
   //print_r($ret);
   
   
    if(count($ret)>0)
    {
    $passwordResetCode = Uuid::uuid4();


    $sql = "UPDATE users SET passwordResetCode=? WHERE email=?";
$stmt= $this->conn->prepare($sql);
$status=$stmt->execute(array($passwordResetCode,$email));
if($status){
    $mail = new PHPMailer(true); //From email address and name 
    $mail->From = "vijayljaiswal8@gmail.com"; 
   $mail->FromName = "Vijay Laxmi Jaiswal"; //To address and name 
    $mail->addAddress( $email,"Evening glory Partners User");//Recipient name is optional
    $mail->addAddress("adharjswl@yahoo.com"); //Address to which recipient will reply 
   $mail->addReplyTo("vijayljaiswal8@gmail.com", "Reply"); //CC and BCC 
    $mail->addCC("malename909@gmail.com"); 
    $mail->addBCC("adharjswl@yahoo.com"); //Send HTML or Plain Text email 
    $mail->IsSMTP(); 
    $mail->SMTPDebug = 0; //from 1 to 4 to get more details.
    $mail->SMTPAuth = true; 
    $mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for GMail
    $mail->Port = 587; // or 587
    $mail->Host = "smtp.gmail.com";
    $mail->Username = "adh171991@gmail.com";
    $mail->Password = "wcgspndgvcxjhnht";
    $mail->isHTML(true); 
    $mail->Subject = "Password Reset for evening glory partners account"; 
    $mail->Body = 
    "To reset your password, click this link:"."\n".
    "<a href='https://eveningglorypartners.com/reset-password/$passwordResetCode'>Reset password</a>";
    $mail->AltBody = "This is the plain text version of the email content"; 
    
    if(!$mail->send()) 
    {
        $return["status"] = 500;
        array_push($msgs,array("text"=>"Error in sending mail","type"=>"danger"));

       // $return["message"] =  "Error in sending mail";
    } 
    else { 
        $return["status"] = 200;
        array_push($msgs,array("text"=>"Email successfully sent","type"=>"success"));

       // $return["message"] =  "Email successfully sent";

    }
}
else{
    $return["status"] = 500;
    array_push($msgs,array("text"=>"Error in updating passwordResetCode","type"=>"danger"));

 //   $return["message"] =  "Error in updating passwordResetCode";
}
    }
    else{
        $return["status"] = 500;
        array_push($msgs,array("text"=>"User with this email not found","type"=>"danger")); 
    }
    
$return["msgs"] = $msgs;
return json_encode($return);
}


public function resetPasswordPostAction($data){

    $passwordResetCode=filter_var($data['passwordResetCode'],FILTER_SANITIZE_STRING);
    $newPassword=filter_var($data['newPassword'],FILTER_SANITIZE_STRING);

    if($this->conn==null)
    {
       //echo "DBclass".$this->DBclass."\n";
       $this->conn = $this->DBclass->connect();
    }
    $return = array();
    $msgs=array();
   // $passwordResetCode = $data['passwordResetCode'];
    //$newPassword = $data['newPassword'];

    $sql = "UPDATE users SET password=? WHERE passwordResetCode=?";
$stmt= $this->conn->prepare($sql);
$status=$stmt->execute(array(md5($newPassword),$passwordResetCode));

if($status){
$return["status"] = 200;
array_push($msgs,array("text"=>"Password successfully updated","type"=>"success"));

//$return["message"] =  "Password successfully updated";
}
else{
    $return["status"] = 500;
    array_push($msgs,array("text"=>"Password didn't update successfully","type"=>"danger"));

   // $return["message"] =  "Password didn't update successfully";   
}
$return["msgs"] = $msgs;
return json_encode($return);
}

}

?>