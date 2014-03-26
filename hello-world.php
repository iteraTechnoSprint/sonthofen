<?php
header('Content-Type: text/plain');
echo htmlspecialchars($_GET["x"]) . ',' . htmlspecialchars($_GET["y"]);
?>