
function ejercicioAqi() {
    const aqiInput = prompt("Ingrese el valor del Índice de Calidad del Aire (AQI, ej: 45, 105):");
    if (aqiInput === null) return alert("Operación cancelada.");

    const aqi = parseInt(aqiInput);
    let clasificacion;

    if (isNaN(aqi) || aqi < 0) {
        return alert("Por favor, ingrese un valor AQI numérico válido.");
    }

    if (aqi <= 50) {
        clasificacion = "Buena (Riesgo bajo)";
    } else if (aqi <= 100) {
        clasificacion = "Moderada (Aceptable para la mayoría)";
    } else if (aqi <= 150) {
        clasificacion = "Dañina para grupos sensibles";
    } else if (aqi <= 200) {
        clasificacion = "Dañina (Riesgo para toda la población)";
    } else if (aqi <= 300) {
        clasificacion = "Muy dañina (Alerta sanitaria)";
    } else {
        clasificacion = "Peligrosa (Condición de emergencia)";
    }

    alert(`AQI: ${aqi}. \n\nClasificación de la calidad del aire: **${clasificacion}**`);
}

function ejercicioRuido() {
    const numInput = prompt("Ingrese el número de mediciones de ruido a registrar:");
    if (numInput === null) return alert("Operación cancelada.");

    const numMediciones = parseInt(numInput);
    if (isNaN(numMediciones) || numMediciones <= 0) {
        return alert("Número de mediciones no válido.");
    }

    let sumaDecibeles = 0;
    let registro = "Niveles de ruido registrados (dB):\n";

    for (let i = 1; i <= numMediciones; i++) {
        const dbInput = prompt(`Medición #${i}: Ingrese nivel de ruido en dB (ej: 75.2):`);
        if (dbInput === null) return alert("Operación cancelada en la medición.");
        
        const decibeles = parseFloat(dbInput);

        if (isNaN(decibeles) || decibeles < 0) {
            return alert("Valor de decibelios no válido. Reinicie el ejercicio.");
        }

        sumaDecibeles += decibeles;
        registro += `- ${decibeles.toFixed(1)} dB\n`;
    }

    const promedio = sumaDecibeles / numMediciones;
    
    alert(`${registro}\nEl promedio de los niveles de ruido es: **${promedio.toFixed(2)} dB**`);
}


function ejercicioFocosCalor() {
    let contadorFocos = 0;
    let temperatura = -1; 
    let totalMediciones = 0;
    const UMBRAL_CALOR = 45; 

    alert(`Ingrese la temperatura en °C. Contaremos cuántas superan los ${UMBRAL_CALOR}°C. Ingrese 0 para terminar.`);

    while (temperatura !== 0) {
        const tempInput = prompt(`Medición #${totalMediciones + 1}: Ingrese temperatura (\\text{\\degree C}, 0 para terminar):`);
        if (tempInput === null) return alert("Operación cancelada.");
        
        temperatura = parseFloat(tempInput);

        if (isNaN(temperatura) || temperatura < 0) {
            return alert("Por favor, ingrese un número positivo válido. Reinicie el ejercicio.");
        }
        
        if (temperatura > 0) {
            totalMediciones++;
            if (temperatura > UMBRAL_CALOR) {
                contadorFocos++;
            }
        }
    }

    alert(`Procesamiento finalizado. \n\nTotal de mediciones leídas: ${totalMediciones} \nFocos de calor (temperatura $> ${UMBRAL_CALOR}\\text{\\degree C}$): **${contadorFocos}**`);
}

function ejercicioResiduo() {
    const input = prompt("Ingrese el código de residuo (1-4):\n1: Orgánico\n2: Plástico\n3: Papel/Cartón\n4: Vidrio");
    if (input === null || input.trim() === "") return alert("Operación cancelada.");
    
    const codigo = parseInt(input);
    let tipoResiduo;

    if (isNaN(codigo)) {
        return alert("Por favor, ingrese un número entero válido.");
    }

    switch (codigo) {
        case 1:
            tipoResiduo = "Orgánico (Compostable)";
            break;
        case 2:
            tipoResiduo = "Plástico (Reciclable, Contenedor Amarillo)";
            break;
        case 3:
            tipoResiduo = "Papel/Cartón (Reciclable, Contenedor Azul)";
            break;
        case 4:
            tipoResiduo = "Vidrio (Reciclable, Contenedor Verde)";
            break;
        default:
            tipoResiduo = "Código de residuo no reconocido";
    }

    alert(`El código ${codigo} corresponde a: \n\n**${tipoResiduo}**`);
}

function ejercicioNivelRio() {
    let mensaje = "--- Resumen del Monitoreo del Nivel del Río ---\n";
    let continuar;
    let contador = 0;
    const UMBRAL_CRECIDA = 3.0; 

    do {
        const nivelInput = prompt(`Medición #${contador + 1}: Ingrese el nivel del río en metros (ej: 1.8):`);
        if (nivelInput === null) return alert("Operación cancelada.");

        const nivel = parseFloat(nivelInput);

        if (isNaN(nivel) || nivel < 0) {
            return alert("Por favor, ingrese un nivel positivo válido. Reinicie el proceso.");
        }
        
        contador++;
        mensaje += `\n- Nivel registrado: ${nivel.toFixed(2)} m.`;
        
        if (nivel > UMBRAL_CRECIDA) {
            mensaje += ` **¡ALERTA! Nivel de crecida (Supera los ${UMBRAL_CRECIDA} m).**`;
        }
        
        continuar = prompt("¿Desea registrar otro nivel? (Escriba 'no' para salir)").toLowerCase();

    } while (continuar !== "no");
    
    alert(mensaje);
}