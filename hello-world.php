<?php
header('Content-Type: text/plain');


$output = array (   "x" => htmlspecialchars($_GET["x"]),
                    "y" => htmlspecialchars($_GET["y"]),
                    "iteratec" => htmlspecialchars(file_get_contents("http://www.iteratec.de")));

echo json_encode ($output);
?>