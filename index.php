<?php
$jsonConv = file_get_contents('dischi.json'); //faccio leggere il file json a php

header('Content-Type application/json');

$dischi = json_decode($jsonConv, true); //json decode per passare i dati

echo json_encode($dischi);
