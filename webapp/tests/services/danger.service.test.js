import DangerService from "../../src/services/danger.service";


describe('DangerService', () => {
  let service;

  beforeEach(() => {
    service = new DangerService();
  });

  describe('getDangerR', () => {
    it('devrait retourner les R pour un H connu', () => {
      expect(service.getDangerR('H224')).toEqual(['R11', 'R12']);
    });

    it('devrait retourner un tableau vide pour un H inconnu', () => {
      expect(service.getDangerR('H999')).toEqual([]);
    });

    it('devrait être insensible à la casse', () => {
      expect(service.getDangerR('h224')).toEqual(['R11', 'R12']);
    });
  });

  describe('getDanger', () => {
    it('devrait retourner les types de danger pour un R connu', () => {
      expect(service.getDanger('R11')).toContain('facilementInflammable');
    });

    it('devrait retourner un tableau vide pour un R inconnu', () => {
      expect(service.getDanger('R999')).toEqual([]);
    });

    it('devrait être insensible à la casse', () => {
      expect(service.getDanger('r11')).toContain('facilementInflammable');
    });
  });

  describe('getGHS', () => {
    it('devrait retourner les GHS pour un H connu', () => {
      expect(service.getGHS('H270')).toContain('GHS03');
    });

    it('devrait retourner un tableau vide pour un H inconnu', () => {
      expect(service.getGHS('H999')).toEqual([]);
    });

    it('devrait être insensible à la casse', () => {
      expect(service.getGHS('h270')).toContain('GHS03');
    });
  });

  describe('getMoleculePictogrammes', () => {
    it('devrait retourner les pictogrammes GHS corrects pour la molécule de formaldéhyde', () => {
      const molecule = {
        danger: [
          "H301", // GHS06
          "H311", // GHS06
          "H314", // GHS05
          "H317", // GHS07
          "H331", // GHS06
          "H335", // GHS07
          "H350", // GHS08
          "EUH071" // Pas mappé, ignoré
        ]
      };

      const pictos = service.getMoleculePictogrammes(molecule);

      expect(Array.from(pictos).sort()).toEqual(
        ["GHS05", "GHS06", "GHS07", "GHS08"].sort()
      );
    });

    it('devrait retourner un ensemble vide si aucun ', () => {
      const molecule = {
        danger: []
      };

      const pictos = service.getMoleculePictogrammes(molecule);
      expect(pictos).toEqual([]);
    });

  });
});
