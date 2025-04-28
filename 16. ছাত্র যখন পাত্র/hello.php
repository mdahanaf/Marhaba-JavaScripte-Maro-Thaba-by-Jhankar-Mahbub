<?php

print_r(scandir('.'));

$i = 1;
foreach(scandir('.') as $file){
    if(preg_match("/practice-([0-9]).js/", $file)){
        rename($file, "$i.js");
        $i++;
    }
}