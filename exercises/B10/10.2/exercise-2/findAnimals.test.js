const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalsByType = (type) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const arrayAnimals = Animals.filter((animal) => animal.type === type);
        if (arrayAnimals.length !== 0) {
          return resolve(arrayAnimals);
        }
  
        return reject({ error: 'Não possui esse tipo de animal.' });
      }, 100);
    })
  );
  
  const getListAnimals = (type) => (
    findAnimalsByType(type).then(list => list)
  );

  describe('Testes com promise', () => {
    describe('Quando o tipo do animal existe, testando promisse', () => {
      test('Retorna a lista de animais', () => {
        expect.assertions(2);
        return findAnimalsByType('Dog').then((listDogs) => {
          expect(listDogs[0].name).toEqual('Dorminhoco');
          expect(listDogs[1].name).toEqual('Soneca');
        });
      });
    });
  
    describe('Quando o tipo do animal não existe, testando promisse', () => {
      test('Retorne a lista de animais', () => {
        return getListAnimals('Lion').catch(error =>
          expect(error).toEqual({ error: "Não possui esse tipo de animal." })
        );
      });
    });
  });

  describe('Testes com async/await', () => {
    test('Testando com async/await', async () => {
      const listDogs = await getListAnimals('Dog');
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
    test('Testando o reject', async () => {
      try {
        await getListAnimals('Lion');
      } catch (error) {
        expect(error).toEqual({ error: "Não possui esse tipo de animal." })
      }
    });
  });

  describe('Teste com promise e matcher resolve/reject', () => {
    test('Retorne a lista de animais', () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ]
      expect.assertions(1);
      return expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
    });
    test('Retorna um erro', () => {
      // expect.assertions(1);
      return expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
    });
  })

  describe('Teste com async/await e matcher resolve/reject', () =>{
    test('Retorne a lista de animais', async () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ]
      // expect.assertions(1);
      await expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
    });
    test('Retorna um erro', async () => {
      expect.assertions(1);
      await expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
    });
  });
