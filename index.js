const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn, .btnG");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        console.log(`Botón apretado: ${botonApretado}`);

        if (boton.id === "ac") {
            pantalla.textContent = "0";
            console.log("Pantalla: 0"); // Mostrar el valor de la pantalla
            return;
        }

        if (boton.id === "delete") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            console.log(`Pantalla: ${pantalla.textContent}`); // Mostrar el valor de la pantalla
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            console.log(`Resultado: ${pantalla.textContent}`); // Mostrar el valor de la pantalla
            return;
        }

        if (boton.id === "decimal") {
            if (!pantalla.textContent.includes(".")) {
                pantalla.textContent += ".";
            }
            console.log(`Pantalla: ${pantalla.textContent}`); // Mostrar el valor de la pantalla
            return;
        }

        const ultimoCaracter = pantalla.textContent.slice(-1);
        if (["+", "-", "*", "/"].includes(botonApretado) && ["+", "-", "*", "/"].includes(ultimoCaracter)) {
            pantalla.textContent = pantalla.textContent.slice(0, -1) + botonApretado;
            console.log(`Pantalla: ${pantalla.textContent}`); // Mostrar el valor de la pantalla
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }

        console.log(`Pantalla: ${pantalla.textContent}`); // Mostrar el valor de la pantalla
    });
});
