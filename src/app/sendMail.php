<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json"); // Set JSON header

        // Payload is not sent to $_POST Variable,
        // it's sent to php://input as raw text
        $json = file_get_contents('php://input');
        // Parse the Payload from JSON format
        $params = json_decode($json);

        if (!$params || !isset($params->email) || !isset($params->name) || !isset($params->message)) {
            // Error handling for invalid payload
            http_response_code(400);
            echo json_encode(["status" => "error", "message" => "Invalid input data"]);
            exit;
        }

        $email = $params->email;
        $name = $params->name;
        $messageContent = $params->message;

        $recipient = 'mail@sebastian-rothe.com';  
        $subject = "Contact From <$email>";
        $message = "From: " . htmlspecialchars($name) . "<br>" . htmlspecialchars($messageContent);

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@mywebsite.com";

        // Send the email
        if (mail($recipient, $subject, $message, implode("\r\n", $headers))) {
            echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "message" => "Failed to send email"]);
        }
        break;
    
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
