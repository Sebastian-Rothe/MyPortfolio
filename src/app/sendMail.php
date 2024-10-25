<?php
switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        
    case("POST"): // Send the email.
        header("Access-Control-Allow-Origin: *");
        header('Content-Type: application/json'); // JSON Content-Type Header hinzufügen
        
        // Payload wird nicht in $_POST gesendet, sondern über php://input
        $json = file_get_contents('php://input');
        $params = json_decode($json);
        
        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'mail@sebastian-rothe.com';  
        $subject = "Contact From <$email>";
        $message = "From:" . $name . "<br>" . $message;
        
        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@mywebsite.com";
        
        $mailSent = mail($recipient, $subject, $message, implode("\r\n", $headers));

        // JSON Antwort senden
        echo json_encode([
            'status' => $mailSent ? 'success' : 'error',
            'message' => $mailSent ? 'Email sent successfully' : 'Failed to send email'
        ]);
        break;
        
    default: // Reject any non-POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
