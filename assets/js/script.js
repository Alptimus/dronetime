document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const voltage = parseFloat(document.getElementById('voltage').value);
    const capacity_mAh = parseFloat(document.getElementById('capacity').value);
    const powerDraw = parseFloat(document.getElementById('powerDraw').value);
    const chargerCurrent = parseFloat(document.getElementById('chargerCurrent').value);
    const efficiency = parseFloat(document.getElementById('efficiency').value);

    // Convert mAh to Ah
    const capacity_Ah = capacity_mAh / 1000;

    // Calculate total energy in Wh
    const energy_Wh = voltage * capacity_Ah;

    // Calculate flight time (hours = energy in Wh / power draw in W)
    const flightTimeHours = energy_Wh / powerDraw;
    const flightTimeMinutes = flightTimeHours * 60;

    // Calculate ideal recharge time (hours = capacity (Ah) / charger current (A))
    let rechargeTimeHours = capacity_Ah / chargerCurrent;
    // Adjust for real-world charging (constant-current/constant-voltage phases, cell balancing)
    rechargeTimeHours *= efficiency;
    const rechargeTimeMinutes = rechargeTimeHours * 60;

    // Display results
    document.getElementById('flightTimeResult').textContent = "Estimated Flight Time: " + flightTimeMinutes.toFixed(1) + " minutes";
    document.getElementById('rechargeTimeResult').textContent = "Estimated Recharge Time: " + rechargeTimeMinutes.toFixed(1) + " minutes";
});