function calculateDeltaH() {
    const products = parseFloat(document.getElementById("deltaHProducts").value);
    const reactants = parseFloat(document.getElementById("deltaHReactants").value);
    const result = products - reactants;
    document.getElementById("deltaHResult").textContent = `ΔH = ${result} kJ/mol`;
}

function calculateERM() {
    const product = parseFloat(document.getElementById("massProduct").value);
    const reactants = parseFloat(document.getElementById("massReactants").value);
    const result = (product / reactants) * 100;
    document.getElementById("ermResult").textContent = `ERM = ${result.toFixed(2)}%`;
}

function calculateFactorE() {
    const waste = parseFloat(document.getElementById("massWaste").value);
    const desired = parseFloat(document.getElementById("massDesiredProduct").value);
    const result = waste / desired;
    document.getElementById("factorEResult").textContent = `Facteur E = ${result.toFixed(2)}`;
}

function calculateAtomicUsage() {
    const desired = parseFloat(document.getElementById("atomicMassDesired").value);
    const reactants = parseFloat(document.getElementById("atomicMassReactants").value);
    const result = (desired / reactants) * 100;
    document.getElementById("atomicUsageResult").textContent = `Utilisation Atomique = ${result.toFixed(2)}%`;
}

function calculateEF() {
    const input = parseFloat(document.getElementById("inputMass").value);
    const output = parseFloat(document.getElementById("outputMass").value);
    const result = input / output;
    document.getElementById("efResult").textContent = `EF = ${result.toFixed(2)}`;
}

function calculatePRM() {
    const recycled = parseFloat(document.getElementById("recycledMass").value);
    const total = parseFloat(document.getElementById("totalMass").value);
    const result = (recycled / total) * 100;
    document.getElementById("prmResult").textContent = `PRM = ${result.toFixed(2)}%`;
}
