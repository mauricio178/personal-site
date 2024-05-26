export interface AllTextProps {
  top: {
    hi_there: string,
    i_am: {
      name: string,
      profession: string,
    },
    its_pleasure: string
  }
}

export const allTextsEnglish =
  {
    top: {
      hi_there: "Hi there!",
      i_am: { name: "I'm Mauricio Rodrigues", profession: "a Front-end Engineer/Developer." },
      its_pleasure: "it's a pleasure to welcome you here. "
    }
  } as AllTextProps;

export const allTextsPortuguese =
  {
    top: {
      hi_there: "Olá!",
      i_am: { name: "Sou Mauricio Rodrigues", profession: "um Engenheiro/Dev Front-end" },
      its_pleasure: "é uma satisfação receber você aqui."
    }
  } as AllTextProps;
