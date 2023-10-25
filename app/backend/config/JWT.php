<?php
use Firebase\JWT\JWT;
use Firebase\JWT\Key;


$key = 'example_key';
$issuedAt = time();
$expirationTime = $issuedAt + 60 * 60 * 24 * 60;

$payload = [
    'iss' => 'http://example.org',
    'aud' => 'http://example.com',
    'iat' => $issuedAt,
    'nbf' => $expirationTime
];

$jwt = JWT::encode($payload, $key, 'HS256');
$decoded = JWT::decode($jwt, new Key($key, 'HS256'));

print_r($decoded);

$decoded_array = (array) $decoded;
JWT::$leeway = 60; // $leeway in seconds
$decoded = JWT::decode($jwt, new Key($key, 'HS256'));

?>