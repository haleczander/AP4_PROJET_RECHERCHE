CREATE TABLE Molecules (
    nom VARCHAR(255),
    formule VARCHAR(255),
    cas VARCHAR(50),
    masseMolaire NUMERIC,
    nbrCarbone INTEGER,
    nocif BOOLEAN,
    irritant BOOLEAN,
    explosible BOOLEAN,
    dangereuxEnvi BOOLEAN,
    toxique BOOLEAN,
    tresToxique BOOLEAN,
    facilementInflammable BOOLEAN,
    extremementInflammable BOOLEAN,
    r40 BOOLEAN,
    r45 BOOLEAN,
    r49 BOOLEAN,
    r46 BOOLEAN,
    r60 BOOLEAN,
    r61 BOOLEAN,
    r62 BOOLEAN,
    r63 BOOLEAN,
    -- schema BYTEA,
    PRIMARY KEY (nom, formule)
);

CREATE TABLE Activations (
    serial SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL
);

CREATE USER 'admin'@'localhost' IDENTIFIED BY 'motdepasse';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

-- INSERT INTO Molecules (cas, nom, formule, masseMolaire, nbrCarbone, nocif, irritant, explosible, dangereuxEnvi, toxique, tresToxique, facilementInflammable, extremementInflammable, r40, r45, r49, r46, r60, r61, r62, r63)
-- VALUES
-- ('50-00-0', 'Formaldéhyde', 'CH2O', 30.03, 1, TRUE, TRUE, FALSE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE, TRUE),
-- ('64-17-5', 'Éthanol', 'C2H6O', 46.07, 2, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE),
-- ('67-56-1', 'Méthanol', 'CH3OH', 32.04, 1, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, TRUE, TRUE, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE),
-- ('7664-93-9', 'Acide sulfurique', 'H2SO4', 98.08, 2, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE),
-- ('7440-22-4', 'Argent', 'Ag', 107.87, 1, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE),
-- ('7732-18-5', 'Eau', 'H2O', 18.02, 2, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE),
-- ('7446-09-5', 'Sulfite de sodium', 'Na2SO3', 126.04, 2, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE),
-- ('7782-44-7', 'Oxygène', 'O2', 32.00, 2, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE),
-- ('75-09-2', 'Dichlorométhane', 'CH2Cl2', 84.93, 2, FALSE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, TRUE),
-- ('7647-01-0', 'Acide chlorhydrique', 'HCl', 36.46, 1, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE);

-- INSERT INTO Activations (serial, nom) 
-- VALUES
-- (1, 'Activation thermique'),
-- (2, 'Activation par lumière'),
-- (3, 'Activation par lumière visible'),
-- (4, 'Activation électrochimique'),
-- (5, 'Activation catalytique'),
-- (6, 'Activation mécanique'),
-- (7, 'Activation micro-ondes'),
-- (8, 'Activation plasma'),
-- (9, 'Activation par pression'),
-- (10, 'Activation sonochimique');
