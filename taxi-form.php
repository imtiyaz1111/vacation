<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html");
    exit();
}

// ================= DATA =================
$name     = htmlspecialchars(trim($_POST['name'] ?? ''));
$phone    = htmlspecialchars(trim($_POST['phone'] ?? ''));
$pickup   = htmlspecialchars(trim($_POST['pickup'] ?? ''));
$drop     = htmlspecialchars(trim($_POST['drop'] ?? ''));
$vehicle  = htmlspecialchars(trim($_POST['vehicle'] ?? ''));
$message  = htmlspecialchars(trim($_POST['message'] ?? ''));

// ================= VALIDATION =================
if ($name === '' || $phone === '') {
    echo "Required fields missing.";
    exit();
}

// ================= EMAIL =================
$to = "enquiry.vacationpartner@gmail.com"; // SAME EMAIL

$subject = "New Taxi Booking Request";

$body = "
<h2>Taxi Booking Request</h2>
<table border='1' cellpadding='10'>
<tr><td><b>Name</b></td><td>$name</td></tr>
<tr><td><b>Phone</b></td><td>$phone</td></tr>
<tr><td><b>Pickup</b></td><td>$pickup</td></tr>
<tr><td><b>Drop</b></td><td>$drop</td></tr>
<tr><td><b>Vehicle</b></td><td>$vehicle</td></tr>
<tr><td><b>Message</b></td><td>$message</td></tr>
</table>
";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";
$headers .= "From: Website <no-reply@vacationpartner.in>\r\n";

// ================= SEND =================
if (mail($to, $subject, $body, $headers)) {
    header("Location: thank-you.html");
    exit();
} else {
    echo "Mail failed.";
}
?>