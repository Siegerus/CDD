import { internet, name } from 'faker';

const makeFakeOffer = () => ({
  id: name.title(),
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: 120,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 16,
  },
  isFavorite: false,
  isPremium: true,
  rating: 2,
  images: internet.avatar(),
  isActive: false,
});

// 'describe' - для группирования
describe('Just group to testing tets', () => {
  describe('Function: returnToTestTrue', () => {
    // 'it' - сам тестовый случай
    it('Should return true to testing', () => {
      // Arrange подготовка

      const fakeOffer = makeFakeOffer();
      function returnToTestTrue() {
        return fakeOffer === fakeOffer;
      }
      // Act действие

      const result = returnToTestTrue();
      // Accert проверка

      expect(result).toBe(true);
    });

    it('Should return true to testing', () => {
      // Arrange подготовка

      const fakeOffer = makeFakeOffer();
      function returnToTestTrue() {
        return fakeOffer === fakeOffer;
      }
      // Act действие

      const result = returnToTestTrue();
      // Accert проверка

      expect(result).toBe(false);
    });
  });
});
