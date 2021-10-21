function soma(a: number, b: number){
  return a + b;
}

interface IAnimal{
  nome: string;
  tipo: 'Terrestre' | 'Aquático';
  domestico: boolean;
}

interface IFelino extends IAnimal{
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
  porte: 'Pequeno' | 'Médio' | 'Grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
  domestico: true,
  nome: 'Cachorro',
  porte: 'Médio',
  tipo: 'Terrestre'
}