<?php
function cetakAngka($n) {
    for ($i = 1; $i <= $n; $i++) {
        // Kondisi jika bilangan habis dibagi 4 dan 6
        if ($i % 4 == 0 && $i % 6 == 0) {
            echo "Pemrograman Website 2024\n";
        }
        // Kondisi jika bilangan hanya habis dibagi 5
        elseif ($i % 5 == 0) {
            echo "2024\n";
        }
        // Kondisi jika bilangan hanya habis dibagi 4 tetapi tidak habis dibagi 6
        elseif ($i % 4 == 0 && $i % 6 != 0) {
            echo "Pemrograman\n";
        }
        // Kondisi jika bilangan hanya habis dibagi 6 tetapi tidak habis dibagi 4
        elseif ($i % 6 == 0 && $i % 4 != 0) {
            echo "Website\n";
        }
        // Kondisi default jika tidak memenuhi syarat lainnya
        else {
            echo $i . "\n";
        }
    }
}

// Memanggil fungsi dengan nilai n sebagai input
cetakAngka(30);
?>
