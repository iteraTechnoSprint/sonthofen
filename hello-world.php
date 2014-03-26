<?php
header('Content-Type: text/plain');
echo 'Hallo ' . htmlspecialchars($_GET["name"]) . '!';
?>