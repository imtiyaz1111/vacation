<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html");
    exit();
}

// ================= DATA =================
$name    = htmlspecialchars(trim($_POST['name'] ?? ''));
$email   = htmlspecialchars(trim($_POST['email'] ?? ''));
$phone   = htmlspecialchars(trim($_POST['phone'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

// ================= VALIDATION =================
if ($name === '' || $email === '' || $phone === '') {
    echo "Required fields missing.";
    exit();
}

// ================= EMAIL =================
$to = "enquiry.vacationpartner@gmail.com"; // <-- CHANGE THIS

$subject = "New Contact Inquiry - Website";

$body = "
<h2>New Contact Inquiry</h2>
<table border='1' cellpadding='10'>
<tr><td><b>Name</b></td><td>$name</td></tr>
<tr><td><b>Email</b></td><td>$email</td></tr>
<tr><td><b>Phone</b></td><td>$phone</td></tr>
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