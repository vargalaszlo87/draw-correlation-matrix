const drawCorrelationMatrix = require('./draw-correlation-matrix');

// Tesztadatok
const validMatrix = [
    [1.00, -0.85, -0.78],
    [-0.85, 1.00, 0.79],
    [-0.78, 0.79, 1.00]
];
const labels = ["Alpha", "Beta", "Gamma"];

// checkInputMatrix teszt
test('checkInputMatrix visszaad true-t legalább 3x3-as mátrix esetén', () => {
    expect(drawCorrelationMatrix.checkInputMatrix(validMatrix)).toBe(true);
});

test('checkInputMatrix visszaad false-t, ha a mátrix kisebb, mint 3x3', () => {
    const smallMatrix = [
        [1.0, -0.5],
        [-0.5, 1.0]
    ];
    expect(drawCorrelationMatrix.checkInputMatrix(smallMatrix)).toBe(false);
});

// checkVectorAndMatrix teszt
test('checkVectorAndMatrix visszaad true-t, ha a mátrix négyzetes és a labels hossza megegyezik a mátrix méretével', () => {
    expect(drawCorrelationMatrix.checkVectorAndMatrix(validMatrix, labels)).toBe(true);
});

test('checkVectorAndMatrix visszaad false-t, ha a mátrix nem négyzetes vagy a labels hossza nem egyezik', () => {
    const invalidMatrix = [
        [1.0, -0.5],
        [-0.5, 1.0]
    ];
    expect(drawCorrelationMatrix.checkVectorAndMatrix(invalidMatrix, labels)).toBe(false);
});

// checkCorrelationMatrix teszt
test('checkCorrelationMatrix visszaad true-t, ha minden elem szám -1 és 1 között van', () => {
    expect(drawCorrelationMatrix.checkCorrelationMatrix(validMatrix)).toBe(true);
});

test('checkCorrelationMatrix visszaad false-t, ha bármely elem kívül esik a -1 és 1 közötti tartományon', () => {
    const outOfRangeMatrix = [
        [1.5, -0.85, -0.78],
        [-0.85, 1.00, 0.79],
        [-0.78, 0.79, 1.00]
    ];
    expect(drawCorrelationMatrix.checkCorrelationMatrix(outOfRangeMatrix)).toBe(false);
});